module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sale', {
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
      createdAt: 'published',
      timestamps: true,
      underscored: true,
    });

    Sales.associate = (models) => {
      Sales.hasOne(models.SalesProduct,
      { foreignKey: 'saleId', as: 'sale' })
    }

    Sales.associate = (models) => {
      Sales.belongsTo(models.User,{
        as: 'user',
        foreignKey: 'userId',
        otherKey: 'sellerId', 
      });
    };

    Sales.associate = (models) => {
      Sales.belongsTo(models.User,{
        as: 'seller',
        foreignKey: 'sellerId',
        otherKey: 'userId', 
      });
    };

  return Sales;
};