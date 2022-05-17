const router = require("express").Router();
const { getPayments } = require("../../Controllers/Payments");

router.get("/", async (req, res) => {
  const all = await getPayments();
  if (all.length !== 0) {
    let array = [];
    let total = all.length;

    while (total > 0) {
      let order = {};
      let tajada = Number(all[0].idMatch); //idMatch son la cantidad de pagos q se hicieron desde el mismo carrito

      let arrayRespaldo = [];
      for (let i = 0; i < tajada; i++) {
        arrayRespaldo.push(all.pop());
        total--;
      }
      order.idTogether = arrayRespaldo[0].idTogether;
      /* state */

      order.totalCarrito = arrayRespaldo.reduce((a, b) => {
        return a + b.total_paid_amount;
      }, 0);

      order.email = arrayRespaldo[0].userEmail;
      order.date = arrayRespaldo[0].date;
      order.state = arrayRespaldo[0].state;
      order.payments = [];
      
      for (let x = 0; x < arrayRespaldo.length; x++) {
        let obj = {};
        obj.name = arrayRespaldo[x].name;
        obj.idTogether = arrayRespaldo[x].idTogether;
        obj.id = arrayRespaldo[x].id;
        obj.price = arrayRespaldo[x].price;
        obj.quantity = arrayRespaldo[x].quantity;
        obj.total_paid_amount = arrayRespaldo[x].total_paid_amount;
        obj.status = arrayRespaldo[x].status;
        obj.status_detail = arrayRespaldo[x].status_detail;
        (obj.extraEmail = arrayRespaldo[x].extraEmail),
          (obj.extraAddress = arrayRespaldo[x].extraAddress);
        //
        order.payments.push(obj);
      }

      array.push(order);
      if (all.length === 0) total--;
    }
    res.send(array);
  } else {
    res.send({ msg: "Error, no hay pagos subidos a la base de datos" });
  }
});

module.exports = router;
