const router = require("express").Router();
const {Product } = require("../../db");
const { getPayments, getPaymentByUserId }  = require('../../Controllers/Payments');

router.get('/:userId', async (req,res) => {
  const {userId} = req.params
	try {
      const userPayment = await getPaymentByUserId(userId)
      res.send(userPayment)
    }
	catch(err){
		console.log(err)
	}
})


module.exports = router;