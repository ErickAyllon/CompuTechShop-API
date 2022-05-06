const router = require("express").Router();
const { User } = require('../../db');
const { users, userName, userEmail } = require('../../Controllers/Users');

router.get('/', async (req, res) => {
  const {name, email} = req.query

  try{
    if(name){
      const user = await userName(name)
      res.send(user)
    } else if(email){
      const user = await userEmail(email)
      res.send(user)
    }
    else{
      const info = await users()
      res.send(info)
    }
  }
  catch(error) {
    console.log(error)
  }
})




module.exports = router;