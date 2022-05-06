const router = require("express").Router();
const { Payment } = require("../../db");
const {getPaymentsById} = require('../../Controllers/Payments')

router.get("/", async (req, res) => {
  const {id} = req.query
  try {
    if(id){
      const payments = await getPaymentsById(id)
      res.send(payments);
    } else {
      const payments = await Payment.findAll({
       order: [["id", "ASC"]],
      });
      res.send(payments);
    }
  } catch (err) {
    console.log("Error en getPayment",err);
  }
});

module.exports = router;
