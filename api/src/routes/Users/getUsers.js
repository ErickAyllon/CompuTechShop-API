const router = require("express").Router();
const { User } = require('../../db');
const { users, userName } = require('../../Controllers/Users');

router.get('/', async (req, res) => {
  const {name} = req.query
  try{
    if(name){
      const user = await userName(name)
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