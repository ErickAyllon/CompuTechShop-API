const router = require("express").Router();

const mercadopago = require("mercadopago");
const axios = require("axios");
require("dotenv").config();
//MERCADOPAGO START

mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

router.post("/Checkout", (req, res) => {
  const data = req.body;
  let preference = {
    items: [],
    back_urls: {
      success: "https://www.musimundo.com/audio-tv-video/televisores/c/57",
      failure: "https://www.musimundo.com/audio-tv-video/televisores/c/57",
      pending: "https://www.musimundo.com/audio-tv-video/televisores/c/57",
      // Rutas del front a las que quiero redireccionar, tienen que mostrar los productos vendidos, una vez que la pagina cargue, tiene que hacer un efect
    },
    auto_return: "approved",
    statement_descriptor: "TechPayment",
    shipments: {
      cost: 0, //costo del envio
      mode: "not_specified",
    }, //data que tengo que guardar y manejar el stock
  };

  if (Array.isArray(data.name)) {
    for (let i = 0; i < data.name.length; i++) {
      preference.items.push({
        title: data.name[i],
        picture_url: data.picture_url[i],

        unit_price: parseInt(data.price[i]),
        quantity: parseInt(data.quantity[i]),
      });
    }
  } else {
    preference.items.push({
      title: data.name,
      picture_url: data.picture_url,

      unit_price: parseInt(data.price),
      quantity: parseInt(data.quantity),
    });
  }

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      console.log(response.response.init_point);
      res.redirect(response.response.init_point);
    })
    .catch(function (error) {
      console.log(error);
    });
});

//

router.get("/success", async (req, res) => {
  const id = req.query.payment_id;
  const infoApi = await axios.get(
    "https://api.mercadopago.com/v1/payments/" + id,
    {
      headers: {
        Authorization:
          `Bearer  ${process.env.ACCESS_TOKEN}`,
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
    for (let i = 0; i < infoTotal.items.length; i++) {
      let aux = {
        //ajustar esto para que conicida con el modelo
        name: infoTotal.items[i].name,
        picture: infoTotal.items[i].picture,
        price: infoTotal.items[i].price,
        quantity: infoTotal.items[i].quantity,
        total_paid_amount: infoTotal.total_paid_amount,
        status: infoTotal.status,
        status_detail: infoTotal.status_detail,
      };
      /* console.log(aux); */
      await Payment.create(aux);
    }
  }
});

//MERCADOPAGO END
// start products

const postProduct = require("./Products/postProduct");
const updateProduct = require("./Products/updateProduct.js");
const deleteProduct = require("./Products/deleteProduct");
const getProduct = require("./Products/getProduct");
// end products / start Users
const postUser = require("./Users/postUser.js");
const deleteUser = require("./Users/deleteUser.js");
const updateUser = require("./Users/updateUser.js");
const getUsers = require("./Users/getUsers.js");
const getUserById = require("./Users/getUserById");
// end users / start categories
const Categories = require("./Categories/Categories");
const postCategory = require("./Categories/postCategory");
const deleteCategory = require("./Categories/deleteCategory");
// end categories / start filtros
const getProductBrand = require("../Filters/getProductBrand");
const productCategory = require("../Filters/getProductCategory.js");
// end filtros / start validaciones
/* const { validatorProduct } = require("../Validators/ValidatorProduct");
const { validatorUser } = require("../Validators/ValidatorUser");
const { validatorCategory } = require("../Validators/ValidatorCategory"); */
// end validaciones / start Payments

const postPayment = require("./Payments/postPayment");
const getPayments = require("./Payments/getPayment");
const getPaymentByUserId = require("./Payments/getPaymentByUserId");
const updatePayment = require("./Payments/updatePayment");
// end Payments / start carrusel

const postCarrusel = require("./Carrusel/postCarrusel");

// start products
router.use("/products", getProduct);
router.use("/postProduct", /*validatorProduct, */ postProduct);
router.use("/updateProduct", updateProduct);
router.use("/deleteProduct", deleteProduct);
// end products / start Users
router.use("/users", getUsers, getUserById);
router.use("/postUser", /* validatorUser, */ postUser);
router.use("/updateUser", updateUser);
router.use("/deleteUser", deleteUser);
// end users / start categories
router.use("/categories", Categories);
router.use("/postCategory", /* validatorCategory, */ postCategory);
router.use("/deleteCategory", deleteCategory);
// end categories / start filtros
router.use("/productBrand", getProductBrand);
router.use("/productCategory", productCategory);
// end filtros / start Payment
router.use("/postPayment", postPayment);
router.use("/getPayments", getPayments, getPaymentByUserId);
router.use("/updatePayment", updatePayment);
// end Payments / start carrusel
router.use("/postImgCarrusel", postCarrusel);
// end carrusel / ....
module.exports = router;