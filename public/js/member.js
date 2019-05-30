$(document).ready(function() {

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    var userId = parseInt(getUrlParameter('userId'))
    console.log("user ID = " + userId)

    var userName = getUrlParameter('userName');
    // console.log("user name = " + userName)

    $("#account").text("Take Another Quiz");
    $(".link").attr("href", `/quiz1/?userId=${userId}`)

    $.get("/api/user", function(req, res){
        for (var i = 0; i < req.length; i ++) {

            if(parseInt(userId) === req[i].id) {
                console.log("ITS A MATCH BABY!")
                var firstname = req[i].firstname
                var lastname = req[i].lastname

                var message = $("<p>")
                    message
                    .addClass("greeting")
                    .text(`${firstname} ${lastname}, welcome to the member's section`)
                        $("#greetings").append(message)

            }
        }
    })

    var newDiv = $("<div>")
        newDiv
            .text("please select one of the quizzes you've previously taken")
            .attr("id", "dropdown")
            .append("<br>")
        $(".start").append(newDiv)

    $.get("/api/urlresults", function(req, res){
        var quizNumbArr = []
        var counter = 0
        for (var i = 0; i < req.length; i ++) {

            if(parseInt(userId) === req[i].UserId) {
                counter ++
                quizNumbArr.push(counter)
                // console.log("you're really appending shit now!")
                        console.log("answerId = " + req[i].AnswerId)
                        var createdAt = req[i].createdAt
                        var created = createdAt.split("T")
                        
                var answerId = $("<button class='m-1 bordergraythin regularfont backgroundyellow pinkhoverbutton'>");
                    answerId.addClass("quizButton");
                        // .text("Quiz from " + created[0])
                    for (var j = 0; j < quizNumbArr.length; j++) {
                        answerId.text("Quiz " + quizNumbArr[j])
                    }
                        answerId.attr("data-value", req[i].AnswerId)
                $("#dropdown").append(answerId)
                        }
            }
            
        })
    // }) 

    $(document).on("click", ".quizButton", function () {
        var buttonValue = ($(this).attr("data-value"));
            buttonValue = parseInt(buttonValue)


            $.get("/api/imgresults", function(req, res){
                $.get("/api/urlresults", function(data, res){

                for(var i = 0; i < req.length; i++) {
                    if (buttonValue === req[i].AnswerId && userId === req[i].UserId && buttonValue === data[i].AnswerId && userId === data[i].UserId) {
                        
                        $('.c').empty();

                        $("<img/>").attr("src", req[i][0]).addClass("0").appendTo("#results1").wrap(
                            "<a href='" + data[i][0] + "'></a>"
                        );
                        $("<img/>").attr("src", req[i][1]).addClass("1").appendTo("#results2").wrap(
                            "<a href='" + data[i][1] + "'></a>"
                        );
                        $("<img/>").attr("src", req[i][2]).addClass("2").appendTo("#results3").wrap(
                            "<a href='" + data[i][2] + "'></a>"
                        );
                        $("<img/>").attr("src", req[i][3]).addClass("3").appendTo("#results4").wrap(
                            "<a href='" + data[i][3] + "'></a>"
                        );
                        $("<img/>").attr("src", req[i][4]).addClass("4").appendTo("#results5").wrap(
                            "<a href='" + data[i][4] + "'></a>"
                        );
                        $("<img/>").attr("src", req[i][5]).addClass("5").appendTo("#results6").wrap(
                            "<a href='" + data[i][5] + "'></a>"
                        );
                        $("<img/>").attr("src", req[i][6]).addClass("6").appendTo("#results7").wrap(
                            "<a href='" + data[i][6] + "'></a>"
                        );
                        $("<img/>").attr("src", req[i][7]).addClass("7").appendTo("#results8").wrap(
                            "<a href='" + data[i][7] + "'></a>"
                        );
    
                        $("<img/>").attr("src", req[i][8]).addClass("8").appendTo("#results9").wrap(
                            "<a href='" + data[i][8] + "'></a>"
                        );
                        $("<img/>").attr("src", req[i][9]).addClass("9").appendTo("#results10").wrap(
                            "<a href='" + data[i][9] + "'></a>"
                        );
                        $("<img/>").attr("src", req[i][10]).addClass("10").appendTo("#results11").wrap(
                            "<a href='" + data[i][10] + "'></a>"
                        );
                        $("<img/>").attr("src", req[i][11]).addClass("11").appendTo("#results12").wrap(
                            "<a href='" + data[i][11] + "'></a>"
                        );
                    }
                }
            });
        })                               
    });
});

// $(".linkquiz").attr("href", `/quiz/?userId=${userId}`)