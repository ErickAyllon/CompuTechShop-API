const { Router } = require("express");
const { products } = require("../Controllers/Products");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const { brand } = req.query;
    const info = await products();
    if (brand) {
      let productInfo = await info.filter((el) =>
        el.brand.toLowerCase().includes(brand.toLowerCase())
      );
      if (productInfo.length !== 0) {
        res.status(200).send(productInfo);
      } else {
        res.status(404).send("That product doesn't exist");
      }
    } else {
      res.status(200).send(info);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
