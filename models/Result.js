module.exports = function(sequelize, DataTypes) {
    var Result = sequelize.define("Result", {
        0: DataTypes.STRING,
        1: DataTypes.STRING,
        2: DataTypes.STRING,
        3: DataTypes.STRING,
        4: DataTypes.STRING,
        5: DataTypes.STRING,
        6: DataTypes.STRING,
        7: DataTypes.STRING,
        8: DataTypes.STRING,        
        9: DataTypes.STRING,        
        10: DataTypes.STRING,        
        11: DataTypes.STRING   
    });
    Result.associate = function(models) {
        Result.belongsTo(models.User, {  
            foreignKey: {
            allowNull: false
          }
        });
      };
      return Result;

  };
  