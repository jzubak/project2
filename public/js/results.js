//this needs to be broken down into a client side and a server side version, keeping the api call on the server and just referencing it on the client

var terms = "";
function terms(){
    //ranges mid century = 8-14; bohemian = 15-21; vicotrian = 22-28; farmhouse = 29-32
    var i = db.Answers.QA;
    if (i >= 8 || i <=14){
        return "mid century"
    }else if (i >= 15 || i <=21){
        return "bohemian"
    }else if (i >= 22 || i <=28){
        return "victorian"
    }else return "farmhouse"
}



function displayRes() {

    $('#answerDisplay').bind('submit', function () {
        //add api key to git-ignore or create a new get route to hide this on the server side
        api_key = "oqtjkj73z380crm3r8ia8jbd";
        terms = terms;
        etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords=" +
            terms + "&category=furniture&limit=12&includes=Images:1&api_key=" + api_key;

        $('#resultImages').empty();
        $('<p></p>').text('Searching for ' + terms).appendTo('#resultImages');
        console.log("searching for " + terms)
        console.log(etsyURL);

        $.ajax({
            url: etsyURL,
            dataType: 'jsonp',
            success: function (data) {
                if (data.ok) {
                    $('#resultImages').empty();
                    if (data.count > 0) {
                        $.each(data.results, function (i, item) {
                            $("<img/>").attr("src", item.Images[0].url_150x150).appendTo("#resultImages").wrap(
                                "<a href='" + item.url + "'></a>"
                            );
                            if (i % 4 == 3) {
                                $('<br/>').appendTo('#resultImages');
                            }
                        });
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
    })
};
(displayRes);


module.exports = displayRes;