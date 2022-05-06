const router = require("express").Router();
const { Payment } = require("../../db");

router.get("/", async (req, res) => {
  try {
    const payments = await Payment.findAll({
      order: [["id", "ASC"]],
    });
    res.send(payments);
  } catch (err) {
    console.log("Error en getPayment",err);
  }
});

module.exports = router;
