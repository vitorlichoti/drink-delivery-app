module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProducts', {
    saleId: { type: DataTypes.INTEGER, primaryKey: true},
    productId: { type: DataTypes.INTEGER, primaryKey: true},
    quantity: DataTypes.STRING ,
  }, 

    {
      tableName: 'sales_products',
      underscored: true,
    });
    
    SalesProduct.associate = (models) => {
      models.Sales.belongsToMany(models.Sales,{
        as: 'sale',
        through: SalesProduct,
        foreignKey: 'saleId',
        otherKey: 'productId',  
      });

      Product.belongsToMany(models.Product,{
        as: 'product',
        through: SalesProduct,
        foreignKey: 'productId',
        otherKey: 'saleId',  
      });
    
  };

  return SalesProduct;
};