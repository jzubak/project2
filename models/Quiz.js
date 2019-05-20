module.exports = function(sequelize, DataTypes) {
    var Quiz = sequelize.define("Quiz", {
      Quizname: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
    Quiz.associate = function(models) {
      Quiz.hasMany(models.Answer, {
      });
      Quiz.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };

      return Quiz;
  
};