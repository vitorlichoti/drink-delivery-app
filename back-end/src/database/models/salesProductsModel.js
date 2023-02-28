module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('SalesProduct', {
    saleId: { type: DataTypes.INTEGER, primaryKey: true},
    productId: { type: DataTypes.INTEGER, primaryKey: true},
    quantity: DataTypes.STRING ,
  }, 

    {
      tableName: 'sales_products',
      underscored: true,
    });
    
    salesProduct.associate = (models) => {
      models.Products.belongsToMany(models.Sales,{
        as: 'sales',
        through: salesProduct,
        foreignKey: 'productId',
        otherKey: 'saleId',  
      });
      models.Sales.belongsToMany(models.Products,{
        as: 'products',
        through: salesProduct,
        foreignKey: 'saleId',
        otherKey: 'productId',  
      });
    
  };

  return salesProduct;
};