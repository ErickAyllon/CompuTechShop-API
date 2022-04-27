const router = require("express").Router();
const { Shop, User, Product } = require("../../db");

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { state } = req.body;

    const updateShop = await Shop.update(
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
