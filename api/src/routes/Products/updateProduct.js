const router = require("express").Router();
const {Product, Category } = require("../../db");


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
			categories
		} = req.body
		const updateProduct = await Product.update(
			{name, image, price, quantity, brand, description, calification},
			{
				where: {id}
			}
		)
		let dbCategory = await Category.findAll({
			where: {
				name: categories
			}
		})
		const product = await Product.findOne({where: {id}})
		product.setCategory(dbCategory.map(c => c.id))
		res.send({msg: 'actualizado'})
	}
	catch(err){
		console.log(err)
	}
})


module.exports = router;