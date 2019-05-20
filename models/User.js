module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  
  User.associate = function(models) {
  
    User.hasMany(models.Quiz, {
      onDelete: "cascade"
    });
  };
    return User;

};


