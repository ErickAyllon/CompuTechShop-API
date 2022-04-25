const { check } = require("express-validator");
const { validateResult } = require("../helpers/helperValidatorProduct");

(req) => {
  console.log(req);
};

const validatorProduct = [
  check("name")
    .exists()
    .custom((value, { req }) => {
      if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/.test(value))
        throw new Error("Invalid name caracters");
      if (value.length < 2) throw new Error("the name entered is too short");
      return true;
    }),

  check("price")
    .exists()
    .custom((value, { req }) => {
      value = Number(value);
      if (isNaN(value)) throw new Error("Price must be a number");
      if (value <= 0) throw new Error("Price must be a positive number");
      return true;
    }),
  check("quantity")
    .exists()
    .custom((value, { req }) => {
      value = Number(value);
      if (isNaN(value)) throw new Error("Price must be a number");
      if (value < 0) throw new Error("Price must be a positive number");
      return true;
    }),
  check("brand")
    .exists()
    .custom((value, { req }) => {
      if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/.test(value))
        throw new Error("Invalid brand caracters");
      if (value.length < 2) throw new Error("the brand entered is too short");
      return true;
    }),
  check("description")
    .exists()
    .custom((value, { req }) => {
      if (value.length === 0)
        throw new Error("The description cannot be empty");
      return true;
    }),
  check("calification")
    .exists()
    .custom((value, { req }) => {
      if (isNaN(value)) throw new Error("Price must be a number");
      if (value < 0) throw new Error("Price must be a positive number");
      if (value < 0 || value > 10)
        throw new Error("Price must be a number between 0 to 10");
      return true;
    }),
  check("category")
    .exists()
    .custom((value, { req }) => {
      if (value.length === 0) throw new Error("The category cannot be empty");
      return true;
    }),
  check("image").exists(),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validatorProduct };
