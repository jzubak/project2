$(document).ready(function() {

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
    var userId = getUrlParameter('userId');
    var userName = getUrlParameter('userName');
    console.log("user ID = " + userId)
    console.log("user name = " + userName)

var livingRoom = [
    question1 = {
        Question: "Pick your favorite 1?",
        Answers: [
            Answer1 = { Answer: "/assets/images/livingroomquiz/testchair1.jpg", Value: 1 },
            Answer2 = { Answer: "/assets/images/livingroomquiz/testchair2.jpg", Value: 2 },
            Answer3 = { Answer: "/assets/images/livingroomquiz/testchair3.jpg", Value: 3 },
            Answer4 = { Answer: "/assets/images/livingroomquiz/testchair4.jpg", Value: 4 }
        ],
    },
    question2 = {
        Question: "Pick your favorite 2?",
        Answers: [
            Answer1 = { Answer: "/assets/images/livingroomquiz/testred1.jpg", Value: 1 },
            Answer2 = { Answer: "/assets/images/livingroomquiz/testred2.jpg", Value: 2 },
            Answer3 = { Answer: "/assets/images/livingroomquiz/testred3.jpg", Value: 3 },
            Answer4 = { Answer: "/assets/images/livingroomquiz/testred4.jpg", Value: 4 }
        ]
    },
    question3 = {
        Question: "Pick your favorite 3?",
        Answers: [
            Answer1 = { Answer: "/assets/images/livingroomquiz/testgreen1.jpg", Value: 1 },
            Answer2 = { Answer: "/assets/images/livingroomquiz/testgreen2.jpg", Value: 2 },
            Answer3 = { Answer: "/assets/images/livingroomquiz/testgreen3.jpg", Value: 3 },
            Answer4 = { Answer: "/assets/images/livingroomquiz/testgreen4.jpg", Value: 4 },
        ],
    },
    question4 = {
        Question: "Pick your favorite 4?",
        Answers: [
            Answer1 = { Answer: "/assets/images/livingroomquiz/testorange1.jpg", Value: 1 },
            Answer2 = { Answer: "/assets/images/livingroomquiz/testorange2.jpg", Value: 2 },
            Answer3 = { Answer: "/assets/images/livingroomquiz/testorange3.jpg", Value: 3 },
            Answer4 = { Answer: "/assets/images/livingroomquiz/testorange4.jpg", Value: 4 }
        ]
    },
    question5 = {
        Question: "Pick your favorite 5?",
        Answers: [
            Answer1 = { Answer: "Option1", Value: 1},
            Answer2 = { Answer: "Option2", Value: 2},
            Answer3 = { Answer: "Option3", Value: 3},
            Answer4 = { Answer: "Option4", Value: 4}
        ],
    },
    question6 = {
        Question: "Pick your favorite 6?",
        Answers: [
            Answer1 = { Answer: "Option1", Value: 1},
            Answer2 = { Answer: "Option2", Value: 2},
            Answer3 = { Answer: "Option3", Value: 3},
            Answer4 = { Answer: "Option4", Value: 4}
        ],
    },
    question7 = {
        Question: "Pick your favorite 7?",
        Answers: [
            Answer1 = { Answer: "Option1", Value: 1},
            Answer2 = { Answer: "Option2", Value: 2},
            Answer3 = { Answer: "Option3", Value: 3},
            Answer4 = { Answer: "Option4", Value: 4}
        ],
    },
    question8 = {
        Question: "Pick your favorite 8?",
        Answers: [
            Answer1 = { Answer: "Option1", Value: 1},
            Answer2 = { Answer: "Option2", Value: 2},
            Answer3 = { Answer: "Option3", Value: 3},
            Answer4 = { Answer: "Option4", Value: 4}
        ],
    }
]


var userAnswers = []
var total = 0
var clicked = true
var thisQuiz = 1

var quiz = {
    Quizname: "livingRoom",
    UserId: userId //the userID from above
  }

// variable to count the question //
var x = 0
// On start button //
$("#start").on("click", function () {
    if (x === 8 && clicked){
            //answer object that gets pushed to the SQL DB

        pushQuiz(quiz)
        console.log(answers)
        window.location.replace("results")

    }
    if (clicked){
        shuffle(livingRoom[x].Answers)
        
        // Subtitute description with Questions//
        printquestion()
        $("#question").removeClass("text-center")

        //Eliminate the Start add Next//
        $("#start").html("NEXT")
        $("#start").addClass("mt-4")

        //Add images//
        printimages()

        //Remove Pink Border
        $(".choice").removeClass("pinkborder")

        //Clicked to False
        clicked = false

        //Increase the value of x//
        x++
        console.log(x)
    }
    else {
        alert("please choose an option")
    }
});

//Click on Choice//
$(".choice").on("click", function () {
    console.log("clicked: " + clicked)
    //If you don't have an option selected//
    if (!clicked) {
        //Change the border to pink//
        $(this).addClass("pinkborder")

        //Push to array
        latestanswer = $(this).attr("value")
        console.log("latestanswer: " + latestanswer)
        userAnswers.push(latestanswer)
        console.log("userAnswers: " + userAnswers)
        total += Number (latestanswer)
        console.log("total: " + total)

        //Change Clicked to true
        clicked = true
    }
    //If it is already clicked
    else {
        //Remove pink 
        $(".choice").removeClass("pinkborder")
        $(this).addClass("pinkborder")

        //Push to array
        userAnswers.pop()
        total = Number(total) - Number(latestanswer)
        latestanswer = $(this).attr("value")
        console.log("latestanswer: " + latestanswer)
        userAnswers.push(latestanswer)
        console.log("userAnswers: " + userAnswers)
        total += Number (latestanswer)
        console.log("total: " + total)
    }
    
});

function printimages() {
    $("#option1").attr("src", livingRoom[x].Answers[0].Answer)
    $("#option1").attr("value", livingRoom[x].Answers[0].Value)
    $("#option2").attr("src", livingRoom[x].Answers[1].Answer)
    $("#option2").attr("value", livingRoom[x].Answers[1].Value)
    $("#option3").attr("src", livingRoom[x].Answers[2].Answer)
    $("#option3").attr("value", livingRoom[x].Answers[2].Value)
    $("#option4").attr("src", livingRoom[x].Answers[3].Answer)
    $("#option4").attr("value", livingRoom[x].Answers[3].Value)
}

function printquestion() {
    $("#question").empty()
    $("#question").html(livingRoom[x].Question)
}

//Shuffle Function//
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
    return array;
}
function pushQuiz(quiz) {
    $.post("/api/quiz", quiz,  function(data) {
        pushAnswers(data.id)
    })

}
function pushAnswers(str) {
    var answers = {
        Q1: userAnswers[0],
        Q2: userAnswers[1],
        Q3: userAnswers[2],
        Q4: userAnswers[3],
        Q5: userAnswers[4],
        Q6: userAnswers[5],
        Q7: userAnswers[6],
        Q8: userAnswers[7],
        Total: total,
        QuizId: str
} 
    $.post("/api/answer", answers, function(data) {

    });

}
});
