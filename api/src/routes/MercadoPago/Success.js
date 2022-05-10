const router = require("express").Router();
const { Product, Payment, User } = require("../../db");
const { transporter } = require("../../Mails/index");
const axios = require("axios");

require("dotenv").config();

let idTogether = 0;

router.get("/", async (req, res) => {
  try {
    const { id, successEmail } = req.query;
    const infoApi = await axios.get(
      "https://api.mercadopago.com/v1/payments/" + id,
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      }
    );

    const infoTotal = {
      items: infoApi.data.additional_info.items.map((item) => {
        return {
          name: item.title,
          picture: item.picture_url,
          price: item.unit_price,
          quantity: item.quantity,
        };
      }),
      total_paid_amount: infoApi.data.transaction_details.total_paid_amount,
      status: infoApi.data.status,
      status_detail: infoApi.data.status_detail,
    };

    if (infoTotal) {
      /* const productos = [] */

      for (let i = 0; i < infoTotal.items.length; i++) {
        let actualDate = new Intl.DateTimeFormat("es-ES", {
          dateStyle: "full",
          timeStyle: "long",
        }).format(new Date());
        let aux = {
          //ajustar esto para que conicida con el modelo
          idTogether: idTogether,
          name: infoTotal.items[i].name,
          picture: infoTotal.items[i].picture,
          price: infoTotal.items[i].price,
          date: actualDate,
          quantity: infoTotal.items[i].quantity,
          total_paid_amount:
            infoTotal.items[i].price * infoTotal.items[i].quantity,
          status: infoTotal.status,
          status_detail: infoTotal.status_detail,
          state: "En Preparacion",
          userEmail: successEmail ? successEmail : "CORREO@HARDCODEADO.com",
        };

        const cambioCantidad = await Product.findOne({
          where: {
            name: aux.name,
          },
        });

        let newPayment = await Payment.create(aux);
        let product = await Product.findAll({
          where: { name: aux.name },
        });
        newPayment.addProduct(product);
        /*    productos.push(cambioCantidad) */

        const updateProduct = await Product.update(
          { quantity: cambioCantidad.quantity - infoTotal.items[i].quantity },
          {
            where: { name: aux.name },
          }
        );

        let user = await User.findOne({
          where: { email: aux.userEmail },
        });

        await transporter.sendMail({
          from: '"CompuTech Shop" <computechshopok@gmail.com>', // sender address
          to: aux.userEmail, // list of receivers
          subject: "Welcome!", // Subject line
          html: `<h4>Hola ${user.dataValues.given_name}!</h4>
          <p>Tu compra se ha realizado con éxito!<p/>`, // html body
        });
      }
      idTogether = idTogether + 1;

      /* await newPayment.addProduct(productos); */
      res.send({ msg: "Pagos subidos a la base de datos" });
    }
  } catch (error) {
    console.log("ERROR EN SUCCESS", error);
  }
});

module.exports = router;
