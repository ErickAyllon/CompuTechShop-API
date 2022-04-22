const {Product } = require("../db");


const products = async () => {
  const arrDB = await Product.findAll()
  const result = await arrDB.map((p) => {
    return {
      id: p.id,
      name: p.name,
      image: p.image,
      price: p.price,
      quantity: p.quantity,
      category: p.category,
      brand: p.brand,
      description: p.description,
      calification: p.calification
    }
  })
  return result
}

const productName = async (name) => {
  try {
    console.log(name)
    const nameDB = await Product.findAll({
      where: {
        name: name,
      },
    })
    // console.log(nameDB)
    console.log(nameDB[0].dataValues.id)
    const product = await nameDB.map((p) => {
      // console.log(p.product.dataValues.id)
      return {
        id: p.dataValues.id,
        name: p.dataValues.name,
        image: p.dataValues.image,
        price: p.dataValues.price,
        quantity: p.dataValues.quantity,
        category: p.dataValues.category,
        brand: p.dataValues.brand,
        description: p.dataValues.description,
        calification: p.dataValues.calification
      }
    })
    console.log(product[0])
    return product[0]
  }
  catch(error){
    console.log(error)
  }
}

module.exports = { products, productName };