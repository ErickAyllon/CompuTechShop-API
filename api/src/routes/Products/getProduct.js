const router = require("express").Router();
<<<<<<< Updated upstream:api/src/routes/Products/getProduct.js
const {Product } = require("../../db");
const { products, productName }  = require('../../Controllers/Products');
=======
const {Product } = require("../../db")
const { products, productName }  = require('../../Controllers/Products')
>>>>>>> Stashed changes:api/src/routes/getProduct.js




router.get('/', async (req,res) => {
  const {name} = req.query
	try {
    if(name){
      const product = await productName(name)
      res.send(product)
    }
    else{
      const info = await products()
      res.send(info)
    }
	}
	catch(err){
		console.log(err)
	}
})


module.exports = router;