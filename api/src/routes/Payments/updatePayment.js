const router = require("express").Router();
const { Payment, User, Product } = require("../../db");

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { state } = req.body;

    const updatePayment = await Payment.update(
      {
        state,
      },
      {
        where: { id },
      }
    );

    res.send({ msg: "actualizado" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
