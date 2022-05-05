const { Product, Payment, User } = require("../db");

const getPayments = async () => {
  try {
    const arrDB = await Payment.findAll({
      include: {
        model: Product,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    // console.log(arrDB)
    const result = await arrDB.map((e) => {
      return {
        id: e.id,
        amount: e.amount,
        date: e.date,
        payment: e.payment,
        state: e.state,
        userId: e.userId,
        products: e.products.map((p) => p.name),
      };
    });
    console.log("result", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getPaymentByUserId = async (userId) => {
  try {
    const userPayment = await Payment.findAll({
      where: {
        userId: userId,
      },
      include: {
        model: Product,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    const result = await userPayment.map((e) => {
      return {
        id: e.id,
        amount: e.amount,
        date: e.date,
        payment: e.payment,
        state: e.state,
        userId: e.userId,
        products: e.products.map((p) => p.name),
      };
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getPayments, getPaymentByUserId };
