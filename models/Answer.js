module.exports = function(sequelize, DataTypes) {
    var Answer = sequelize.define("Answer", {
        Q1: DataTypes.INTEGER,
        Q2: DataTypes.INTEGER,
        Q3: DataTypes.INTEGER,
        Q4: DataTypes.INTEGER,
        Q5: DataTypes.INTEGER,
        Q6: DataTypes.INTEGER,
        Q7: DataTypes.INTEGER,
        Q8: DataTypes.INTEGER,
    });
    Answer.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Answer.belongsTo(models.Quiz, {
        });
      };
      return Answer;

  };
  
  
  