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
// end validaciones / start Payments


const getPayments = require("./Payments/getPayment");
const getPaymentByUserEmail = require("./Payments/getPaymentByUserEmail");
const updatePayment = require("./Payments/updatePayment");
// end Payments / start carrusel
const postCarrusel = require("./Carrusel/postCarrusel");
//end Carrusel / start MercadoPago
const success = require("./MercadoPago/Success");
const checkout = require("./MercadoPago/Checkout")
// end MercadoPago / ...

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
// end filtros / start Payment

router.use("/getPayments", getPayments, getPaymentByUserEmail);
router.use("/updatePayment", updatePayment);
// end Payments / start carrusel
router.use("/postImgCarrusel", postCarrusel);
// end carrusel / Start MercadoPago
router.use("/checkout", checkout);
router.use("/success", success);
module.exports = router;
