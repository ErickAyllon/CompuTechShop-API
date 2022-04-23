const router = require('express').Router();
const postProduct = require("./Products/postProduct");
const updateProduct = require('./Products/updateProduct.js');
const deleteProduct = require('./Products/deleteProduct');
const getProduct = require('./Products/getProduct');
const postUser = require('./Users/postUser.js');
const deleteUser = require('./Users/deleteUser.js');
const updateUser = require('./Users/updateUser.js');
const getUsers = require('./Users/getUsers.js');
// const Categories = require("./Categories.js");




// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


router.use("/postProduct", postProduct);
router.use('/updateProduct', updateProduct);
router.use('/deleteProduc', deleteProduct);
router.use('/products', getProduct);
router.use('/postUser', postUser);
router.use('/deleteUser', deleteUser);
router.use('/updateUser', updateUser);
router.use('/users', getUsers);
// router.use('/categories', Categories)



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);






module.exports = router;
