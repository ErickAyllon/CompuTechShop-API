// const {Categories } = require("../db");



// const allCategories = async () => {
//     try {
//       const categoriesDB = await Categories.findAll();
//       if (!categoriesDB.length ) {                  //todo: Verificacion en caso de querer agregar mas categorias. ej.:Celulares.
//         const cat = ['Monitor', 'TV', 'TV-monitor']
//         cat.map(
//           async (e) =>
//             await Categories.findOrCreate({
//               where: {
//                 name: e,
//               },
//             })
//         );
//         return cat;
//       } else {
//         return categoriesDB
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   module.exports = { allCategories };