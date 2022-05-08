const { User, Product } = require("../db");

const users = async () => {
  const arrDB = await User.findAll();
  console.log(arrDB);
  const result = await arrDB.map((u) => {
    return {
      id: u.id,
      given_name: u.given_name,
      family_name: u.family_name,
      nickname: u.nickname,
      email: u.email,
      email_verified: u.email_verified,
      birthday: u.birthday,
      address: u.address,
      picture: u.picture,
      phone: u.phone,
    };
  });
  return result;
};

const userName = async (given_name) => {
  try {
    const nameDB = await User.findAll({
      where: {
        given_name: given_name,
      },
    });
    console.log(nameDB);
    const user = await nameDB.map((u) => {
      return {
        id: u.dataValues.id,
        given_name: u.dataValues.given_name,
        family_name: u.dataValues.family_name,
        nickname: u.dataValues.nickname,
        email: u.dataValues.email,
        email_verified: u.dataValues.email_verified,
        birthday: u.dataValues.birthday,
        address: u.dataValues.address,
        picture: u.dataValues.picture,
        phone: u.dataValues.phone,
      };
    });
    return user[0];
  } catch (error) {
    console.log(error);
  }
};

const userId = async (id) => {
  try {
    const dbUser = await User.findByPk(id);
    return {
      id: dbUser.id,
      given_name: dbUser.given_name,
      family_name: dbUser.family_name,
      nickname: dbUser.nickname,
      email: dbUser.email,
      email_verified: dbUser.email_verified,
      birthday: dbUser.birthday,
      address: dbUser.address,
      picture: dbUser.picture,
      phone: dbUser.phone,
    };
  } catch (error) {
    console.log(error);
  }
};

const userEmail = async (email) => {
  try {
    const dbUser = await User.findOne({ where: { email } });
    return {
      id: dbUser.id,
      given_name: dbUser.given_name,
      family_name: dbUser.family_name,
      nickname: dbUser.nickname,
      email: dbUser.email,
      email_verified: dbUser.email_verified,
      birthday: dbUser.birthday,
      address: dbUser.address,
      picture: dbUser.picture,
      phone: dbUser.phone,
    };
  } catch (error) {
    console.log(error);
  }
};


module.exports = { users, userName, userId, userEmail };

