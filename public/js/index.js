
$(document).ready(function() {

  //Adding a user to the database 
  $("#userNameSubmit").on("click", function(event) {
    event.preventDefault()

    console.log('in the user name submit click event')

    var newUser = {
      Username: $("#userName").val().trim()
      };
    
    $.post("/api/user", newUser, function(data) {
          location.reload();
        
    });
  })

  $("#quizSubmit").on("click", function(event) {
    console.log('in the quiz submit click event')
    event.preventDefault()
    var quiz = {
      Quizname: $("#room").val(),
      UserId: $("#user").val()
    }

    $.post("/api/quiz", quiz,  function(data) {
        postAnswers(data.id)
    });  
  });

  function postAnswers (str) {
    console.log("in postAnswers")
    var answers = {
    Q1: $("#q1").val(),
    Q2: $("#q2").val(),
    Q3: $("#q3").val(),
    Q4: $("#q4").val(),
    Q5: $("#q5").val(),
    Q6: $("#q6").val(),
    Q7: $("#q7").val(),
    Q8: $("#q8").val(),
    QuizId: str
    };
  $.post("/api/answer", answers, function(data) {

  });
  }



});
