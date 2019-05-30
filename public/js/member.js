$(document).ready(function() {

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    var userId = getUrlParameter('userId')
    console.log("user ID = " + userId)

        $.get("/api/result", function(req, res){
          
                if(req[req.length-1].UserId === parseInt(userId)) {
                    console.log(req[req.length-1].createdAt)
                    console.log(req[req.length-1])
                    
                    $("<li>").text("Searched For On: " +req[req.length-1].createdAt).appendTo("#list")
                    $("<li>").html("<a href='" + req[req.length-1] + "'></a>").appendTo("#list")
                    
                    
                      
                  
                }
                
                
            })
            
});



