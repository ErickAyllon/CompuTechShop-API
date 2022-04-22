const router = require('express').Router();
const { allCategories } = require('../Controllers/AllCategories');
const postProduct = require("./postProduct.js");
const updateProduct = require('./updateProduct.js');
const deleteProduct = require('./deleteProduct');
const getProduct = require('./getProduct');
// const Categories = require("./Categories.js");




// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


router.use("/postProduct", postProduct);
router.use('/update', updateProduct);
router.use('/delete', deleteProduct);
router.use('/products', getProduct)
// router.use('/categories', Categories)



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);






module.exports = router;
