module.exports = function(sequelize, DataTypes) {
    var IMGresult = sequelize.define("IMGresult", {
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
    IMGresult.associate = function(models) {
        IMGresult.belongsTo(models.Answer, {  
            foreignKey: {
            allowNull: false
          }
        });
        IMGresult.belongsTo(models.User, {
            foreignKey: {
            allowNull: false
          }
        })
      };
      return IMGresult;

  };
  