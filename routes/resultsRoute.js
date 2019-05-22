var displayRes = require("../models");  
  
  //Pull results and feed into results api call
  app.get("/api/answer", function(req, res) {
    db.Answer.findOne({}).then(function(displayRes) {
      res.json(displayRes);
    });
  });


  for (var i = 0; i < 0; i++){
    //ranges mid century = 8-14; bohemian = 15-21; vicotrian = 22-28; farmhouse = 29-32