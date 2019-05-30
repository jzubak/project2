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
    
        $("#account").html(userName)
    
    var livingRoom = [
        question1 = {
            Question: "Pick the chair speaks to you the most:",
            Answers: [
                Answer1 = { Answer: "/assets/images/livingroomquiz/midCentury_chair.jpg", Value: 1 },
                Answer2 = { Answer: "/assets/images/livingroomquiz/bohemian_chair.jpg", Value: 2 },
                Answer3 = { Answer: "/assets/images/livingroomquiz/victorian_chair.jpg", Value: 3 },
                Answer4 = { Answer: "/assets/images/livingroomquiz/country_chair.jpg", Value: 4 }
            ],
        },
        question2 = {
            Question: "Which shade describes you best?",
            Answers: [
                Answer1 = { Answer: "/assets/images/livingroomquiz/midCentury_red.jpg", Value: 1 },
                Answer2 = { Answer: "/assets/images/livingroomquiz/bohemian_red.jpg", Value: 2 },
                Answer3 = { Answer: "/assets/images/livingroomquiz/victorian_red.jpg", Value: 3 },
                Answer4 = { Answer: "/assets/images/livingroomquiz/country_red.jpg", Value: 4 }
            ]
        },
        question3 = {
            Question: "Pick the color that brings you the most joy:",
            Answers: [
                Answer1 = { Answer: "/assets/images/livingroomquiz/midCentury_green.jpg", Value: 1 },
                Answer2 = { Answer: "/assets/images/livingroomquiz/bohemian_green.jpg", Value: 2 },
                Answer3 = { Answer: "/assets/images/livingroomquiz/victorian_green.jpg", Value: 3 },
                Answer4 = { Answer: "/assets/images/livingroomquiz/country_green.jpg", Value: 4 },
            ],
        },
        question4 = {
            Question: "Which orange is your sunshine on a cloudy day?",
            Answers: [
                Answer1 = { Answer: "/assets/images/livingroomquiz/midCentury_orange.jpg", Value: 1 },
                Answer2 = { Answer: "/assets/images/livingroomquiz/bohemian_orange.jpg", Value: 2 },
                Answer3 = { Answer: "/assets/images/livingroomquiz/victorian_orange.jpg", Value: 3 },
                Answer4 = { Answer: "/assets/images/livingroomquiz/country_orange.jpg", Value: 4 }
            ]
        },
        question5 = {
            Question: "Pick a room to relax in.",
            Answers: [
                Answer1 = { Answer: "/assets/images/livingroomquiz/midCentury_room.jpg", Value: 1},
                Answer2 = { Answer: "/assets/images/livingroomquiz/bohemian_room.jpg", Value: 2},
                Answer3 = { Answer: "/assets/images/livingroomquiz/victorian_room.jpg", Value: 3},
                Answer4 = { Answer: "/assets/images/livingroomquiz/country_room.jpg", Value: 4}
            ],
        },
        question6 = {
            Question: "Which lamp do you want to light up your life?",
            Answers: [
                Answer1 = { Answer: "/assets/images/livingroomquiz/midCentury_lamp.jpg", Value: 1},
                Answer2 = { Answer: "/assets/images/livingroomquiz/bohemian_lamp.jpg", Value: 2},
                Answer3 = { Answer: "/assets/images/livingroomquiz/victorian_lamp.jpg", Value: 3},
                Answer4 = { Answer: "/assets/images/livingroomquiz/country_lamp.jpg", Value: 4}
            ],
        },
        question7 = {
            Question: "Pick a rug to dig your toes into",
            Answers: [
                Answer1 = { Answer: "/assets/images/livingroomquiz/midCentury_rug.jpg", Value: 1},
                Answer2 = { Answer: "/assets/images/livingroomquiz/bohemian_rug.jpg", Value: 2},
                Answer3 = { Answer: "/assets/images/livingroomquiz/victorian_rug.jpg", Value: 3},
                Answer4 = { Answer: "/assets/images/livingroomquiz/country_rug.jpg", Value: 4}
            ],
        },
        question8 = {
            Question: "Which table do you want to eat at?",
            Answers: [
                Answer1 = { Answer: "/assets/images/livingroomquiz/midCentury_table.jpg", Value: 1},
                Answer2 = { Answer: "/assets/images/livingroomquiz/bohemian_table.jpg", Value: 2},
                Answer3 = { Answer: "/assets/images/livingroomquiz/victorian_table.jpg", Value: 3},
                Answer4 = { Answer: "/assets/images/livingroomquiz/country_table.jpg", Value: 4}
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
    
            pushQuiz(quiz, userId)
            console.log(answers)
            
    
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
    function pushQuiz(quiz, userId) {
        $.post("/api/quiz", quiz, function(data) {
         pushAnswers(data.id, userId)
        })
    
    }
    function pushAnswers(str, userId) {
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
             locationReplace(data, userId)
        });
        
    
    }
    });
    
    function locationReplace (data, userId) {
        // console.log(data.id)
        window.location.replace("/results?userId=" + userId + "&quizId=" + data.QuizId + "&answerSetId=" + data.id )
    }