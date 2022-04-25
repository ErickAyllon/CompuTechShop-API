const router = require("express").Router();
const {Shop, User, Product } = require("../../db")


router.post("/", async (req, res, next) =>{

	const {
		amount, 
		date,
		payment,
		userId,
		products
	} = req.body
		
	try {
		let newShop = await Shop.create({
      amount, 
      date,
      payment,
      userId
		});
		// let userShop = await User.findByPk(userId)
    // console.log(userShop.dataValues.id)
		// newShop.addUser(userShop.dataValues.id);
		let dbProducts = await Product.findAll({
			where: {
				name: products,
			}
		})
		newShop.addProduct(dbProducts)
		res.send("Compra posteada")

	} catch (error) {
		res.send(error);
	}	
})


module.exports = router;