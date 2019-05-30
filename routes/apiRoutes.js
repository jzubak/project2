var db = require("../models");
var reset = "\x1b[0m"
var cyan = "\x1b[36m"

  
module.exports = function(app) {
  // Get all examples
  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
  app.get("/api/result", function(req, res) {
    db.User.findAll({}).then(function(dbResults) {
      res.json(dbResults);
    });
  });

  app.get("/api/quiz", function(req, res) {
    db.Quiz.findAll({}).then(function(dbQuizzes) {
      res.json(dbQuizzes);
    });
  });

  app.get("/api/answer", function(req, res) {
    db.Answer.findAll({}).then(function(dbAnswers) {
      res.json(dbAnswers);
    });
  });

  // Create a new user
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUsers) {
      console.log(`${cyan}==> Created A New User - ${req.body.Username}${reset}`)
      res.json(dbUsers);
    });
  });
  // Selet the quiz you're taking 
  app.post("/api/quiz", function(req, res) {
    db.Quiz.create(req.body).then(function(dbQuizzes) {
      res.json(dbQuizzes);
      console.log(`${cyan}==> Created A New ${req.body.Quizname} Quiz${reset}`)
    });
  });
  // Take a new quiz
  app.post("/api/answer", function(req, res) {
    db.Answer.create(req.body).then(function(dbAnswers) {
      console.log(`${cyan}==> Saved Quiz Results${reset}`)
      res.json(dbAnswers);
    });
  });

  app.post("/api/result", function(req, res) {
    db.Result.create(req.body).then(function(dbResults) {
      console.log(`${cyan}==> New Results Saved ${reset}`)
      res.json(dbResults);
    });
  });



};
