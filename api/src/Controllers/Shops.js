const { Product, Shop, User } = require("../db");

const getShops = async () => {
  try {
    const arrDB = await Shop.findAll({
      include: {
        model: Product,
        attributes: ['name'],
        through: {
          attributes: [],
        },
      }
    })
    // console.log(arrDB)
    const result = await arrDB.map((e) => {
      return{
        id: e.id,
        amount: e.amount,
        date: e.date,
        payment: e.payment,
        userId: e.userId,
        products: e.products.map((p) => p.name)
      }
    })
    console.log('result', result)
    return result
  } catch (error) {
    console.log(error)
  }
}

const getShopByUserId = async (userId) => {
  try{
    const userShop = await Shop.findAll({
      where: {
        userId: userId,
      },
      include: {
        model: Product,
        attributes: ['name'],
        through: {
          attributes: [],
        },
      }
    })
    const result = await userShop.map((e) => {
      return{
        id: e.id,
        amount: e.amount,
        date: e.date,
        payment: e.payment,
        userId: e.userId,
        products: e.products.map((p) => p.name)
      }
    })
    return result
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getShops, getShopByUserId };