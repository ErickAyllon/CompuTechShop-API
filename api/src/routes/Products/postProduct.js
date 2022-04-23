const router = require("express").Router();
const {Product } = require("../../db")


router.post("/", async (req, res) =>{

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
		console.log("ESTE ES EL DEL BODY",category)
	try {
		let newProduct = await Product.create({
			name, 
			image,
			price,
			quantity,
			brand,
			description,
			calification,
			category
		});
		// let newProductCategory = await Categories.findAll({
		// 		where: {name: category}
		// })
		// console.log("ESTE ES EL DE LA BASE DE DATOS", newProductCategory[0].dataValues.name)
		// newProduct.addCategories(newProductCategory);
		res.send("PRODUCTO AGREGADO")

	} catch (error) {
		console.log(error, "rutaPost")
	}	
})




module.exports = router;