module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    });

    users.associate = (models) => {
      users.hasMany(models.Sales,
      { foreignKey: 'user_id', as: 'user' },
      { foreignKey: 'seller_id', as: 'seller' });
  };

  return users;
};