const router = require("express").Router();
const { Payment } = require("../../db");

router.put("/", async (req, res) => {
  try {
    const data = req.body;

    await Payment.update(
      {
        state: data.state,
      },
      {
        where: { id: data.id },
      }
    );

    res.send({ msg: "Actualizado" });
  } catch (err) {
    console.log("Error en updatePayment", err);
  }
});

module.exports = router;
