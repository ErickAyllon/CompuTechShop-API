const { Product, Payment } = require("../db");

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
        idTogether: e.idTogether,
        name: e.name,
        picture: e.picture,
        price: e.price,
        date: e.date,
        quantity: e.quantity,
        total_paid_amount: e.total_paid_amount,
        status: e.status,
        status_detail: e.status_detail,
        state: e.state,
        userEmail: e.userEmail,
        products: e.products.map((p) => p.name),
      };
    });
    //console.log("result", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getPaymentsById = async (id) => {
  try {
    const arrDB = await Payment.findAll({
      where: {
        id,
      },
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
        idTogether: e.idTogether,
        name: e.name,
        picture: e.picture,
        price: e.price,
        date: e.date,
        quantity: e.quantity,
        total_paid_amount: e.total_paid_amount,
        status: e.status,
        status_detail: e.status_detail,
        state: e.state,
        userEmail: e.userEmail,
        products: e.products.map((p) => p.name),
      };
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

const getPaymentByUserEmail = async (userEmail) => {
  try {
    const userPayment = await Payment.findAll({
      where: {
        userEmail: userEmail,
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
        idTogether: e.idTogether,
        name: e.name,
        picture: e.picture,
        price: e.price,
        date: e.date,
        quantity: e.quantity,
        total_paid_amount: e.total_paid_amount,
        status: e.status,
        status_detail: e.status_detail,
        state: e.state,
        userEmail: e.userEmail,
        products: e.products.map((p) => p.name),
      };
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
const getPaymentByUserName = async (userName) => {
  try {
    const userPayment = await Payment.findAll({
      where: {
        name: userName,
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
        idTogether: e.idTogether,
        name: e.name,
        picture: e.picture,
        price: e.price,
        date: e.date,
        quantity: e.quantity,
        total_paid_amount: e.total_paid_amount,
        status: e.status,
        status_detail: e.status_detail,
        state: e.state,
        userEmail: e.userEmail,
        products: e.products.map((p) => p.name),
      };
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPayments,
  getPaymentsById,
  getPaymentByUserEmail,
  getPaymentByUserName,
};
