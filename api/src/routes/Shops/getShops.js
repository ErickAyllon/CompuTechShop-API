const router = require("express").Router();
const {Product } = require("../../db");
const { getShops }  = require('../../Controllers/Shops');




router.get('/', async (req,res) => {

	try {
      const info = await getShops()
      res.send(info)
	}
	catch(err){
		console.log(err)
	}
})


module.exports = router;