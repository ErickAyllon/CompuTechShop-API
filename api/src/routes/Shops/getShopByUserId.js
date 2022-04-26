const router = require("express").Router();
const {Product } = require("../../db");
const { getShops, getShopByUserId }  = require('../../Controllers/Shops');

router.get('/:userId', async (req,res) => {
  const {userId} = req.params
	try {
      const userShop = await getShopByUserId(userId)
      res.send(userShop)
    }
	catch(err){
		console.log(err)
	}
})


module.exports = router;