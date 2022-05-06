const router = require("express").Router();
const { User } = require("../../db")
const {transporter} = require('../../Mails/index');


router.post("/", async (req, res) =>{
	const {
		name, 
		lastName,
		nickname,
		email,
		email_verified,
		age,
		address,
		image,
    phone,
		is_admin,
		is_admin_pro
	} = req.body
	try {
		let newUser = await User.create({
      name, 
      lastName,
      nickname,
      email,
      email_verified,
      age,
      address,
      image,
      phone,
			is_admin,
			is_admin_pro
		});
		//console.log(newUser.dataValues.email)
		res.send("USUARIO AGREGADO")
		await transporter.sendMail({
      from: '"CompuTech Shop" <computechshopok@gmail.com>', // sender address
      to: newUser.dataValues.email, // list of receivers
      subject: "Welcome!", // Subject line
      html: `<h4>Hola ${newUser.dataValues.name}!</h4> 
			<p>Bienvenido a CompuTech Shop, espero que nos des mucha plata 😉<p/>`, // html body
    });
	} catch (error) {
		console.log(error, "rutaPost")
	}	
})

module.exports = router;