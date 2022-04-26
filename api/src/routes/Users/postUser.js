const router = require("express").Router();
const { User } = require("../../db")


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
		res.send("USUARIO AGREGADO")

	} catch (error) {
		console.log(error, "rutaPost")
	}	
})

module.exports = router;