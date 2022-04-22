const router = require("express").Router();
const {Product } = require("../db")


router.put('/:id', async (req,res) => {
	try {
		const {id} = req.params
		const {
			name, 
			image,
			price,
			quantity,
			brand,
			description,
			calification,
			category
		} = req.body
		const updateProduct = await Product.update(
			{name, image, price, quantity, brand, description, calification, category},
			{
				where: {id}
			}
		)
		res.send({msg: 'actualizado'})
	}
	catch(err){
		console.log(err)
	}
})


module.exports = router;