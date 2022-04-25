const router = require("express").Router();
const postProduct = require("./Products/postProduct");
const updateProduct = require("./Products/updateProduct.js");
const deleteProduct = require("./Products/deleteProduct");
const getProduct = require("./Products/getProduct");
const postUser = require("./Users/postUser.js");
const deleteUser = require("./Users/deleteUser.js");
const updateUser = require("./Users/updateUser.js");
const getUsers = require("./Users/getUsers.js");
// const Categories = require("./Categories.js");
const { validatorProduct } = require("../Validators/ValidatorProduct");
const { validatorUser } = require("../Validators/ValidatorUser");

router.use("/products", getProduct);
router.use("/postProduct", validatorProduct, postProduct);
router.use("/updateProduct", updateProduct);
router.use("/deleteProduct", deleteProduct);
router.use("/users", getUsers);
router.use("/postUser", validatorUser, postUser);
router.use("/updateUser", updateUser);
router.use("/deleteUser", deleteUser);
// router.use('/categories', Categories)

module.exports = router;
