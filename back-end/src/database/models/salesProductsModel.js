module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('SalesProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: { model: 'Sales', key: 'id' }
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: { model: 'Products', key: 'id' }
    },
    quantity: DataTypes.STRING ,
  }, 

    {
      tableName: 'sales_products',
      timestamps: false,
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