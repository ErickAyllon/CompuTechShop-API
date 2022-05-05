const router = require("express").Router();
const { Payment, User, Product } = require("../../db");

router.post("/", async (req, res, next) => {
  const { amount, date, payment, userId, products, state } = req.body;

  try {
    let newPayment = await Payment.create({
      amount,
      date,
      payment,
      userId,
	  state
    });
    // let userPayment = await User.findByPk(userId)
    // console.log(userPayment.dataValues.id)
    // newPayment.addUser(userPayment.dataValues.id);
    let dbProducts = await Product.findAll({
      where: {
        name: products,
      },
    });
    newPayment.addProduct(dbProducts);
    res.send("Compra posteada");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
