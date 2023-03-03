module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  },
    {
      tableName: 'sales',
      timestamps: false,
      underscored: true,
    });

    Sales.associate = (models) => {
      Sales.hasMany(models.SalesProduct,
      { foreignKey: 'saleId', as: 'sale' })
    }

    Sales.associate = (models) => {
      models.Sales.belongsTo(models.Users,{
        as: 'user',
        foreignKey: 'userId',
      });

      models.Sales.belongsTo(models.Users,{
        as: 'seller',
        foreignKey: 'sellerId',
      });
    };

  return Sales;
};