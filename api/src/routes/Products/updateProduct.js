const router = require("express").Router();
<<<<<<< Updated upstream:api/src/routes/Products/updateProduct.js
const {Product } = require("../../db");
=======
const {Product } = require("../../db")
>>>>>>> Stashed changes:api/src/routes/updateProduct.js


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