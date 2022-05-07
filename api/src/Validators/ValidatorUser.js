const { check } = require("express-validator");
const { validateResult } = require("../helpers/helperValidator");

(req) => {
  console.log(req);
};

const validatorUser = [
  check("name")
    .exists()
    .custom((value, { req }) => {
      if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/.test(value))
        throw new Error("Invalid name caracters");
      if (value.length < 1) throw new Error("the name entered is too short");
      return true;
    }),
  check("lastName")
    .exists()
    .custom((value, { req }) => {
      if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/.test(value))
        throw new Error("Invalid lastName caracters");
      if (value.length < 1) throw new Error("the name entered is too short");
      return true;
    }),
  check("nickname")
    .exists() //todo: Validacion para nombre de usuario, deberia poder poner numeros y signos
    .custom((value, { req }) => {
      if (value.length < 1)
        throw new Error("the nickName entered is too short");
      return true;
    }),
  check("email"),
  check("password"), //todo: Validacion de contraseña
  check("email_verified"),
  check("age")
    .exists()
    .custom((value, { res }) => {
      value = Number(value);
      if (value < 18) throw new Error("Not legal age");
      if (value > 100) throw new Error("Too old");
      return true;
    }),
  check("address"),
  check("image"),
  check("phone"), //todo: validaciones que tiene que tener un telefono celular

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validatorUser };
