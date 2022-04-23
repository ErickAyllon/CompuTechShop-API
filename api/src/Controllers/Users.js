const { User, Product } = require("../db");

const users = async () => {
  const arrDB = await User.findAll()
  console.log(arrDB)
  const result = await arrDB.map((u) => {
    return {
      id: u.id,
      name: u.name, 
      lastName: u.lastName,
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
        name: u.dataValues.name, 
        lastName: u.dataValues.lastName,
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

module.exports = { users, userName };