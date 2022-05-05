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
const postCategory = require("./Categories/postCategory");
const deleteCategory = require("./Categories/deleteCategory");
// end categories / start filtros
const getProductBrand = require("../Filters/getProductBrand");
const productCategory = require("../Filters/getProductCategory.js");
// end filtros / start validaciones
/* const { validatorProduct } = require("../Validators/ValidatorProduct");
const { validatorUser } = require("../Validators/ValidatorUser");
const { validatorCategory } = require("../Validators/ValidatorCategory"); */
// end validaciones / start shops
const postShop = require("./Shops/postShop");
const getShops = require("./Shops/getShops");
const getShopByUserId = require("./Shops/getShopByUserId");
const updateShop = require("./Shops/updateShop")
// end shops / start carrusel
const postCarrusel = require("./Carrusel/postCarrusel");


// start products
router.use("/products", getProduct);
router.use("/postProduct", /*validatorProduct, */ postProduct);
router.use("/updateProduct", updateProduct);
router.use("/deleteProduct", deleteProduct);
// end products / start Users
router.use("/users", getUsers, getUserById);
router.use("/postUser", /* validatorUser, */ postUser);
router.use("/updateUser", updateUser);
router.use("/deleteUser", deleteUser);
// end users / start categories
router.use("/categories", Categories);
router.use("/postCategory", /* validatorCategory, */ postCategory);
router.use("/deleteCategory", deleteCategory);
// end categories / start filtros
router.use("/productBrand", getProductBrand);
router.use("/productCategory", productCategory);
// end filtros / start shop
router.use("/postShop", postShop);
router.use("/getShops", getShops, getShopByUserId);
router.use("/updateShop", updateShop);
// end shops / start carrusel
router.use("/postImgCarrusel", postCarrusel);
// end carrusel / ....
module.exports = router;