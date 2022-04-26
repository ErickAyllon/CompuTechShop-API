const { Router } = require("express");
const { products } = require("../Controllers/Products");
const router = Router();
const { Product, Category } = require("../db");

router.get("/", async (req, res) => {
  try {
    const { brand } = req.query;
    const products = await Product.findAll({
      where: {
        brand: brand
      },
      include: {
        model: Category,
        attributes: ['name'],
        through: {
          attributes: [],
        },
      }
    })
    if(!products.length) return res.send({msg: 'No se encontro un producto con esa marca'})
    else{
      const resultado = products.map((p) =>{
        return {
          id: p.id,
          name: p.name,
          image: p.image,
          price: p.price,
          quantity: p.quantity,
          category: p.categories.map((e) => e.name),
          brand: p.brand,
          description: p.description,
          calification: p.calification,
        }
      })
      res.send(resultado)
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
