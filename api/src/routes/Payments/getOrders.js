const router = require("express").Router();
const { getOrders } = require("../../Controllers/Payments");

router.get("/", async (req, res) => {
  const order = await getOrders();

  if (order !== 0) {
    res.send(order);
  } else {
    res.send({ msg: "Error, no hay pagos subidos a la base de datos" });
  }
});

module.exports = router;
