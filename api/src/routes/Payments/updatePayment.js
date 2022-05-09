const router = require("express").Router();
const { Payment } = require("../../db");

router.put("/:id", async (req, res) => {
  try {
    const {id} = req.params
    const {state} = req.body;
    console.log(id, state)

    await Payment.update(
      {
        state: state,
      },
      {
        where: { id },
      }
    );

    res.send({ msg: "Actualizado" });
  } catch (err) {
    console.log("Error en updatePayment", err);
  }
});

module.exports = router;
