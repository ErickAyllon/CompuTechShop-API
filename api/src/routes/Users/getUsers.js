const router = require("express").Router();
const { User } = require("../../db");
const { users, userName } = require("../../Controllers/Users");

router.get("/", async (req, res) => {
  const { given_name, email } = req.query;
  try {
    if (given_name) {
      const user = await userName(given_name);
      res.send(user);
    } else if(email){
      const user = await userEmail(email)
      res.send(user)
    } else {
      const info = await users();
      res.send(info);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
