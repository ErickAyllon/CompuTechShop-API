const { User, Product } = require("../db");

const users = async () => {
  const arrDB = await User.findAll()
  console.log(arrDB)
  const result = await arrDB.map((u) => {
    return {
      id: u.id,
      given_name: u.given_name, 
      family_name: u.family_name,
      nickname: u.nickname,
      email: u.email,
      email_verified: u.email_verified,
      age: u.age,
      address: u.address,
      image: u.image,
      phone: u.phone
    }
  })
  return result
}

const userName = async (name) => {
  try {
    const nameDB = await User.findAll({
      where: {
        name: name
      }
    })
    console.log(nameDB)
    const user = await nameDB.map((u) => {
      return {
        id: u.dataValues.id,
        given_name: u.given_name.name, 
        family_name: u.family_name.lastName,
        nickname: u.dataValues.nickname,
        email: u.dataValues.email,
        email_verified: u.dataValues.email_verified,
        age: u.dataValues.age,
        address: u.dataValues.address,
        image: u.dataValues.image,
        phone: u.dataValues.phone
      }
    })
    return user[0]
  }
  catch(error){
    console.log(error)
  }
}

const userId = async (id) => {
  try {
    const dbUser = await User.findByPk(id)
    return {
      id: dbUser.id,
      given_name: dbUser.given_name, 
      family_name: dbUser.family_name,
      nickname: dbUser.nickname,
      email: dbUser.email,
      email_verified: dbUser.email_verified,
      age: dbUser.age,
      address: dbUser.address,
      image: dbUser.image,
      phone: dbUser.phone
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = { users, userName, userId };