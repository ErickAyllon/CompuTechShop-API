const router = require("express").Router();
const { Reviews } = require("../../db");


router.post("/", async (req, res) => {
  const {
    comment,
    userId,
    productId
  } = req.body;
  try {
    let newComment = await Reviews.create({
      comment,
      userId,
      productId
    });
    //console.log(newUser.dataValues.email);
    res.send("COMENTARIO AGREGADO");
  } catch (error) {
    console.log(error, "rutaPostComment");
  }
});


module.exports = router;