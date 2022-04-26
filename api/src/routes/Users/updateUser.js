const router = require("express").Router();
const {User } = require("../../db");


router.put('/:id', async (req,res) => {
	try {
		const {id} = req.params
		console.log(id)
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
		console.log(id)
		const updateUser = await User.update(
			{name, lastName, nickname, email, email_verified, age, address, image, phone, is_admin, is_admin_pro},
			{
				where: {id}
			}
		)
		console.log(id)
		res.send({msg: 'actualizado'})
	}
	catch(err){
		console.log(err)
	}
})


module.exports = router;