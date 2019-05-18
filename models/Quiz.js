module.exports = function(sequelize, DataTypes) {
    var Quiz = sequelize.define("Quiz", {
      Quizname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
    Quiz.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Quiz.hasMany(models.Answer, {
      });
      Quiz.belongsTo(models.User, {
      });
    };

      return Quiz;
  
  };
  
  
  