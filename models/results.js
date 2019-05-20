//api key https://openapi.etsy.com/v2/categories/furniture/`{subSubCategory}`?api_key=oqtjkj73z380crm3r8ia8jbd

//this will get types of furniture
// function results(){
//     var furnitureURL = "https://openapi.etsy.com/v2/categories/furniture/?";
// }

//this is get design styles
// var styleURL = "https://openapi.etsy.com/v2/taxonomy/styles/?api_key=oqtjkj73z380crm3r8ia8jbd"

//this will get specific items, this is the only place wher tax/category and style overlaps from what i can see. I am getting the return everything in a style group to work first them im going to work on the return furniture only 

function(results){

    $(document).ready(function(){
        $('#etsy-search').bind('submit', function() {
            api_key = "oqtjkj73z380crm3r8ia8jbd";
            terms = $('#etsy-terms').val();
            etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords="+
                terms+"&limit=12&includes=Images:1&api_key="+api_key;

            $('#etsy-images').empty();
            $('<p></p>').text('Searching for '+terms).appendTo('#etsy-images');

            $.ajax({
                url: etsyURL,
                dataType: 'jsonp',
                success: function(data) {
                    if (data.ok) {
                        $('#etsy-images').empty();
                        if (data.count > 0) {
                            $.each(data.results, function(i,item) {
                                $("<img/>").attr("src", item.Images[0].url_75x75).appendTo("#etsy-images").wrap(
                                    "<a href='" + item.url + "'></a>"
                                );
                                if (i%4 == 3) {
                                    $('<br/>').appendTo('#etsy-images');
                                }
                            });
                        } else {
                            $('<p>No results.</p>').appendTo('#etsy-images');
                        }
                    } else {
                        $('#etsy-images').empty();
                        alert(data.error);
                    }
                }
            });

            return false;
        })
    });

}
(results);