module.exports = function(sequelize, Sequelize) {
    
  var Quiz = sequelize.define("Quiz", {
      Quizname: {
        type: Sequelize.STRING,
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