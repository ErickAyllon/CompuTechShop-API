const { Router } = require("express");
const { products } = require("../Controllers/Products");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const info = await products();
    let priceMin = info.sort(function (a, b) {
      return b.price - a.price;
    });
    res.status(200).send(priceMin);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
