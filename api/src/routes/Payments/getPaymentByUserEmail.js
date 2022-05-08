const router = require("express").Router();
const { getPaymentByUserEmail }  = require('../../Controllers/Payments');

router.get('/:userEmail', async (req,res) => {
  const {userEmail} = req.params
	try {
      const userPayment = await getPaymentByUserEmail(userEmail)
      res.send(userPayment)
    }
	catch(err){
		console.log(err)
	}
})


module.exports = router;