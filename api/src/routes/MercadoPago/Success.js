const router = require("express").Router();
const { Product, Payment } = require("../../db");
const axios = require("axios");

require("dotenv").config();

// PARA COLOCAR EL EMAIL revisar y completar linea 12
// Una vez este completamente funcional, //todo borrar el: "CORREO@HARDCODEADO.com"
router.get("/", async (req, res) => {
  try {
    const id = req.query.payment_id;
     const successEmail = req.query //no se como lo mandes pero completalo ahi. Abajo ya esta el codigo completado
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
        let aux = {
          //ajustar esto para que conicida con el modelo
          name: infoTotal.items[i].name,
          picture: infoTotal.items[i].picture,
          price: infoTotal.items[i].price,
          date: Date.now(),
          quantity: infoTotal.items[i].quantity,
          total_paid_amount: infoTotal.total_paid_amount,
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
         where:{name: aux.name}
       })
       newPayment.addProduct(product)
     /*    productos.push(cambioCantidad) */

        const updateProduct = await Product.update(
          { quantity: cambioCantidad.quantity - infoTotal.items[i].quantity },
          {
            where: { name: aux.name },
          }
          );
        }
        /* await newPayment.addProduct(productos); */
        res.send({ msg: "Pagos subidos a la base de datos" });
    }
  } catch (error) {
    console.log("ERROR EN SUCCESS", error);
  }
});

module.exports = router;
