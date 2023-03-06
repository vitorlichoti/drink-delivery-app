module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    urlImage: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'products',
      underscored: true,
    });

    Products.associate = (models) => {
      Products.hasMany(models.SalesProduct,
      { foreignKey: 'product_id', as: 'product' });
    };

  return Products;
};