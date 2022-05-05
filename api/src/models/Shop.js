const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "shop",
    {
      // product: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      // user: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      amount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payment: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
      },
      // paid: {
      //   type: DataTypes.BOOLEAN,
      //   allowNull: false,
      // }
    },
    {
      timestamps: false /* le saca el createAt y Updateat*/,
      freezeTableName: true,
    }
  );
};
