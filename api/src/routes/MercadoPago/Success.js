const router = require("express").Router();

const axios = require("axios");
require("dotenv").config();

router.get("/", async (req, res) => {
  const id = req.query.payment_id;
  const infoApi = await axios.get("https://api.mercadopago.com/v1/payments/" + id,
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
      console.log(aux);
      // await Payment.create(aux); 
    }
  }
});

module.exports = router;
