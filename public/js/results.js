$(document).ready(function() {

//this needs to be broken down into a client side and a server side version, keeping the api call on the server and just referencing it on the client
// var db = require('../models');
// var terms = "";

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
var userId = getUrlParameter('userId')
console.log("user ID = " + userId)
var quizId = getUrlParameter('quizId')
console.log("quiz ID = " + quizId)
var answerId = getUrlParameter('answerSetId')
console.log("answer ID = " + answerId)
var userName = getUrlParameter('userName')
console.log("user Name = " + userName)

$("#account").html(userName);
$(".link").attr("href", `/member/?userId=${userId}`)


var URLresult = {
    UserId : userId,
    AnswerId : answerId
}
var IMGresult = {
    UserId : userId,
    AnswerId : answerId
}

function match (int) {
    $.get("/api/answer", function(req, res){
        // console.log(req[req.length - 1])
        // console.log("the number passed into this function is: " + int);

        for(var i = 0; i < req.length; i++) {
            // console.log("this is req " + [i] + "'s Quiz Id: " + req[i].QuizId)
            if (parseInt(int) === req[i].QuizId) {
                // console.log("these numbers match")
                // console.log(req[i].Total)
                var Total = req[i].Total

            }
        }terms(Total)
    });
    
} match(quizId)

function terms(total) {
    console.log("the total is " + total)
    var style;
    //ranges mid century = 8-14; bohemian = 15-21; vicotrian = 22-28; farmhouse = 29-32
    if (total <= 14) {
        style = "mid century"
    } else if (total > 14 && total <= 21) {
        style = "bohemian"
    } else if (total > 21 && total <= 28) {
        style = "victorian"
    } else
        style = "farmhouse"
        displayRes(style);
}
function displayRes(terms) {
        console.log("making the API call")
        console.log("our search terms are " + terms)
        // $('#answerDisplay').bind('finish', function () {
            //add api key to git-ignore or create a new get route to hide this on the server side
            api_key = "oqtjkj73z380crm3r8ia8jbd";
            terms = terms;
            etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords=" +
                terms + "&category=furniture&limit=12&includes=Images:1&api_key=" + api_key;

            $('#resultImages').empty();
            // $('<p></p>').text('Searching for ' + terms).appendTo('#resultImages');
            console.log("searching for " + terms)
            console.log(etsyURL);

            $("#container").append("<div class='row regularfont twentypixelfont textgray'> <div class='col-12'> Hey " + userName + "</div> </div> <div class='row regularfont textgray sixteenpixelfont'><div class='col-12'> You love the " + terms + " style. We have handpicked twelve items that will fit right into your living room. Click on the photo to snap them up! </div></div>" )

            $.ajax({
                url: etsyURL,
                dataType: 'jsonp',
                success: function (data) {
                    if (data.ok) {
                        console.log("data is ok")
                        console.log(data)
                        // console.log(data.count)
                        // $('#resultImages').empty();
                        if (data.count > 0) {
                            console.log("right above for loop")
                            for (var i = 0; i < data.results.length; i ++) {
                                var item = data.results[i]
                                console.log("in the for loop")
                                var itemImage = item.Images[0].url_170x135
                                var col = $("<div class='col-6 col-sm-4 col-md-3 mt-4'>")
                                var col2 = $("<div class='boxpos'>")
                                col2.append("<div class='row'><a href='" + item.url + "'target='_blank'><img class='pinkhoverborder' src='" + itemImage +"'/></a></div>")
                                $(col2).append("<div class='row pr-5'><div class='regularfont textgray title'>" + item.title + "</div></div>")
                                var materials = item.materials.join(", ") 
                                console.log(materials)
                                $(col2).append("<div class='row pr-5'><div class='regularfont textgray title'>" + materials + "</div></div>")
                                col2.append("<div class='row'><div class='regularfont textgray'>" + item.price + item.currency_code + "</div></div>")
                                col.append(col2)
                                $("#resultImages").append(col)
                                IMGresult[i] = itemImage
                                URLresult[i] = item.url
                                // if (i % 4 == 3) {
                                //     $('<br/>').appendTo('#resultImages');
                                // }
                                if (i === 11) {
                                    postResults(URLresult, IMGresult)
                                }
                            }
                        } else {
                            $('<p>No results.</p>').appendTo('#resultImages');
                        }
                    } else {
                        $('#resultImages').empty();
                        alert(data.error);
                    }
                }
            });

            return false;
        // })
    };

});

function postResults (url, img) {
    $.post("/api/urlresults", url, function(data) {

    });
    $.post("/api/imgresults", img, function(data) {

    });

}

    