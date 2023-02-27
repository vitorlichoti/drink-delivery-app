module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Products', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    urlImage: DataTypes.STRING,
  },
    {
      tableName: 'products',
      underscored: true,
    });

    Product.associate = (models) => {
      Product.hasOne(models.SalesProduct,
      { foreignKey: 'product_id', as: 'product' });
  };

  return Product;
};