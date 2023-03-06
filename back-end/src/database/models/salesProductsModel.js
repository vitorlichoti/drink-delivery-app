module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
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
    
    SalesProduct.associate = (models) => {
      models.Products.belongsToMany(models.Sales,{
        as: 'sales',
        through: SalesProduct,
        foreignKey: 'productId',
        otherKey: 'saleId',  
      });
      models.Sales.belongsToMany(models.Products,{
        as: 'products',
        through: SalesProduct,
        foreignKey: 'saleId',
        otherKey: 'productId',  
      });
    
  };

  return SalesProduct;
};