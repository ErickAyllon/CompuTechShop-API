const router = require("express").Router();
const {User } = require("../../db");
const {transporter} = require('../../Mails/index')


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
		//console.log(id)
		const updateUser = await User.update(
			{name, lastName, nickname, email, email_verified, age, address, image, phone, is_admin, is_admin_pro},
			{
				where: {id}
			}
		)
		await transporter.sendMail({
      from: '"CompuTech Shop" <computechshopok@gmail.com>', 
      to: email, 
      subject: `${name}, tus datos fueron actualizados`, 
      html: `<h4>Hola ${name}!</h4> 
			<p>Abajo te dejamos tus nuevos datos actualizados:<p/>
			<ul>
			 <li>${name}</li>
			 <li>${lastName}</li>
			 <li>${nickname}</li>
			 <li>${email}</li>
			 <li>${address}</li>
			 <li>${image}</li>
			 <li>${phone}</li>
			</ul>
			<p>Saludos!</p>`,
    });
		//console.log(id)
		res.send({msg: 'actualizado'})
	}
	catch(err){
		console.log(err)
	}
})


module.exports = router;