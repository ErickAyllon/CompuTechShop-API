const router = require("express").Router();
const postProduct = require("./Products/postProduct");
const updateProduct = require("./Products/updateProduct.js");
const deleteProduct = require("./Products/deleteProduct");
const getProduct = require("./Products/getProduct");
const postUser = require("./Users/postUser.js");
const deleteUser = require("./Users/deleteUser.js");
const updateUser = require("./Users/updateUser.js");
const getUsers = require("./Users/getUsers.js");
const getUserById = require("./Users/getUserById");
const Categories = require("./Categories/Categories");
const postShop = require("./Shops/postShop");
const { validatorProduct } = require("../Validators/ValidatorProduct");
const productQuery = require("../Filters/getProductBrand.js");
const productPriceMin = require("../Filters/getProductPriceMin.js");
const productPriceMax = require("../Filters/getProductPriceMax.js");
const productCategory = require("../Filters/getProductCategory.js");

router.use("/products", getProduct);
router.use("/postProduct", validatorProduct, postProduct);
router.use("/updateProduct", updateProduct);
router.use("/deleteProduct", deleteProduct);
router.use("/users", getUsers, getUserById);
router.use("/postUser", postUser);
router.use("/updateUser", updateUser);
router.use("/deleteUser", deleteUser);
// router.use('/categories', Categories)
router.use("/productBrand", productQuery);
router.use("/productPriceMin", productPriceMin);
router.use("/productPriceMax", productPriceMax);
router.use("/productCategory", productCategory);
router.use("/categories", Categories);
router.use("/postShop", postShop);

module.exports = router;
