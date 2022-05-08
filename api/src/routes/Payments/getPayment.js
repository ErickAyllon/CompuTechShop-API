const router = require("express").Router();
const { Payment } = require("../../db");
const {getPaymentsById,getPayments} = require('../../Controllers/Payments')

router.get("/", async (req, res) => {
  const {id} = req.query
  try {
    if(id){
      const payments = await getPaymentsById(id)
      res.send(payments);
    } else {
      const payments = await getPayments()
      res.send(payments);
    }
  } catch (err) {
    console.log("Error en getPayment",err);
  }
});

module.exports = router;
