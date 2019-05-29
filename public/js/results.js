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


function match (int) {
    $.get("/api/answer", function(req, res){
        console.log("the number passed into this function is: " + int);

        for(var i = 0; i < req.length; i++) {
            console.log("this is req " + [i] + "'s Quiz Id: " + req[i].QuizId)
            if (int === req[i].QuizId) {
                console.log("these numbers match")

            }
        }
    });

} match(quizId)

// var style = getStyle();
// function getStyle(){
    // })
// }
// function getResults(userId){
//     quizId = userId;
//     if (quizId){
//       quizId = "/?quizId="+quizId;
//     }
//     $.get("/api/answers"+quizId, function(data){
//       console.log("answers", data);
//       $.ajax({
//           method: "GET",
//           url: "/api/answers",
//           data: data.Total
//     })
//     .then(function(){
//         window.location.href = "/results";
//         })
//     });
//   }

// $(function () {
//     $(".finish").on("click", function (event) {

//         $.ajax("/api/answer", {
//             type: "POST",
//             data: style
//         }).then(
//             function terms() {
//                 //ranges mid century = 8-14; bohemian = 15-21; vicotrian = 22-28; farmhouse = 29-32
//                 if (style >= 8 || style <= 14) {
//                     terms = "mid century"
//                 } else if (style >= 15 || style <= 21) {
//                     terms = "bohemian"
//                 } else if (style >= 22 || style <= 28) {
//                     terms = "victorian"
//                 } else
//                     terms = "farmhouse"
//             })
//             displayRes();
//     });


//     function displayRes() {

//         $('#answerDisplay').bind('finish', function () {
//             //add api key to git-ignore or create a new get route to hide this on the server side
//             api_key = "oqtjkj73z380crm3r8ia8jbd";
//             terms = terms;
//             etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords=" +
//                 terms + "&category=furniture&limit=12&includes=Images:1&api_key=" + api_key;

//             $('#resultImages').empty();
//             $('<p></p>').text('Searching for ' + terms).appendTo('#resultImages');
//             console.log("searching for " + terms)
//             console.log(etsyURL);

//             $.ajax({
//                 url: etsyURL,
//                 dataType: 'jsonp',
//                 success: function (data) {
//                     if (data.ok) {
//                         $('#resultImages').empty();
//                         if (data.count > 0) {
//                             $.each(data.results, function (i, item) {
//                                 $("<img/>").attr("src", item.Images[0].url_150x150).appendTo("#resultImages").wrap(
//                                     "<a href='" + item.url + "'></a>"
//                                 );
//                                 if (i % 4 == 3) {
//                                     $('<br/>').appendTo('#resultImages');
//                                 }
//                             });
//                         } else {
//                             $('<p>No results.</p>').appendTo('#resultImages');
//                         }
//                     } else {
//                         $('#resultImages').empty();
//                         alert(data.error);
//                     }
//                 }
//             });

//             return false;
//         })
//     };
    // displayRes();

// getResults();
    // module.exports = displayRes;
// });