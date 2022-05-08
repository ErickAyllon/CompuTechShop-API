const router = require("express").Router();
const { getPaymentByUserEmail }  = require('../../Controllers/Payments');

router.get('/:userEmail', async (req,res) => {
  const {userEmail} = req.params
	try {
      const userPayment = await getPaymentByUserEmail(userEmail)
      if(userPayment.length===0)res.send(404, {msg: "Ningun pago coincide con el correo"})
      res.send(userPayment)
    }
	catch(err){
		console.log(err)
	}
})


module.exports = router;