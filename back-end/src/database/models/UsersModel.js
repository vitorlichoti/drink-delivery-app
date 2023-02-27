module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
    {
      tableName: 'users',
      underscored: true,
    });

    User.associate = (models) => {
      User.hasMany(models.Sales,
      { foreignKey: 'user_id', as: 'user' },
      { foreignKey: 'seller_id', as: 'seller' });
  };

  return User;
};