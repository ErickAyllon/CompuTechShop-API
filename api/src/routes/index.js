const router = require("express").Router();
// start products
const postProduct = require("./Products/postProduct");
const updateProduct = require("./Products/updateProduct.js");
const deleteProduct = require("./Products/deleteProduct");
const getProduct = require("./Products/getProduct");
// end products / start Users
const postUser = require("./Users/postUser.js");
const deleteUser = require("./Users/deleteUser.js");
const updateUser = require("./Users/updateUser.js");
const getUsers = require("./Users/getUsers.js");
const getUserById = require("./Users/getUserById");
// end users / start categories
const Categories = require("./Categories/Categories");
// end categories / start filtros
const getProductBrand = require("../Filters/getProductBrand");
const productPriceMin = require("../Filters/getProductPriceMin.js");
const productPriceMax = require("../Filters/getProductPriceMax.js");
const productCategory = require("../Filters/getProductCategory.js");
// end filtros / start validaciones
const { validatorProduct } = require("../Validators/ValidatorProduct");
const {validatorUser} = require("../Validators/ValidatorUser")
// end validaciones / start ...
const postShop = require("./Shops/postShop");


// start products
router.use("/products", getProduct);
router.use("/postProduct", validatorProduct, postProduct);
router.use("/updateProduct", updateProduct);
router.use("/deleteProduct", deleteProduct);
// end products / start Users
router.use("/users", getUsers, getUserById);
router.use("/postUser",validatorUser, postUser);
router.use("/updateUser", updateUser);
router.use("/deleteUser", deleteUser);
// end users / start categories
router.use("/categories", Categories);
// end categories / start filtros
router.use("/productBrand", getProductBrand);
router.use("/productPriceMin", productPriceMin);
router.use("/productPriceMax", productPriceMax);
router.use("/productCategory", productCategory);
// end filtros / start ...
router.use("/postShop", postShop);

module.exports = router;
