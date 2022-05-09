const router = require("express").Router();
const { Payment, User } = require("../../db");
const { transporter } = require("../../Mails/index");

router.put("/:id", async (req, res) => {
  try {
    const {id} = req.params
    const {state} = req.body;
    // console.log(id, state)

    await Payment.update(
      {
        state: state,
      },
      {
        where: { id },
      }
    );
    const newPay = await Payment.findOne({
      where: {id}
    })
    let user = await User.findOne({
      where: {email: newPay.userEmail}
    })
    //console.log('pay',newPay.state)
    await transporter.sendMail({
      from: '"CompuTech Shop" <computechshopok@gmail.com>', // sender address
      to: newPay.userEmail, // list of receivers
      subject: "Welcome!", // Subject line
      html: `<h4>Hola ${user.given_name}!</h4>
        <p>Se ha actualizado tu compra, en este momento, su estado es "${newPay.state}"<p/>`, // html body
    });
    res.send({ msg: "Actualizado" });
  } catch (err) {
    console.log("Error en updatePayment", err);
  }
});

module.exports = router;
