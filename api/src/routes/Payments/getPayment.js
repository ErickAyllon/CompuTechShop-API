const router = require("express").Router();
const {Product } = require("../../db");
const { getPayments }  = require('../../Controllers/Payments');




router.get('/', async (req,res) => {

	try {
      const info = await getPayments()
      res.send(info)
	}
	catch(err){
		console.log(err)
	}
})


module.exports = router;