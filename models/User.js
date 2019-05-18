module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]  
      }
    }
  });
  User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Quiz, {
      onDelete: "cascade"
    });
  };
    return User;

};


