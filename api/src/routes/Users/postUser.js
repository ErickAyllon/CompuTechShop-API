const router = require("express").Router();
const { User } = require("../../db");
const { transporter } = require("../../Mails/index");

router.post("/", async (req, res) => {
  const {
    given_name,
    family_name,
    nickname,
    email,
    email_verified,
    birthday,
    address,
    picture,
    phone,
    is_admin,
    is_admin_pro,
    password,
    is_banned
  } = req.body;
  try {
    let newUser = await User.create({
      given_name,
      family_name,
      nickname,
      email,
      email_verified,
      birthday,
      address,
      picture,
      phone,
      is_admin,
      is_admin_pro,
      password,
      is_banned
    });
    //console.log(newUser.dataValues.email);
    await transporter.sendMail({
      from: '"CompuTech Shop" <computechshopok@gmail.com>', // sender address
      to: newUser.dataValues.email, // list of receivers
      subject: "Welcome!", // Subject line
      html: `<h4>Hola ${newUser.dataValues.given_name}!</h4>
    		<p>¡Bienvenido a CompuTech Shop!<p/>`, // html body
    });
    res.send("USUARIO AGREGADO");
  } catch (error) {
    console.log(error, "rutaPost");
  }
});


module.exports = router;
