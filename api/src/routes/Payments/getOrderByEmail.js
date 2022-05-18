const router = require("express").Router();
const { getOrders } = require("../../Controllers/Payments");

router.get("/", async (req, res) => {
    const { userEmail } = req.query;
    if (!userEmail) {
      res.json({ msg: "Se necesita ingresar un email" });
    }
  try {
      
    const order = await getOrders();
    if (order === 0) {
      res.json({ msg: "No hay hay pagos en la base de datos" });
    }
    const filtro = order.filter((e) => {
      return e.email === userEmail;
    });
    if (filtro.length === 0) {
      res.json({
        msg: "Ningun email de pago coincide con el ingresado en nuestra base de datos",
      });
    }

    res.send(filtro);
  } catch (error) {
    console.log("error en getOrderByEmail ", error);
  }
});

module.exports = router;
