$(window).scroll(function(){
    $("#navbar").toggleClass("backgroundyellowscroll" , $(this).scrollTop()> 10);
    // $(".dropdown").toggleClass("scroll" , $(this).scrollTop()>10);
    // // $("#navbar").removeClass("scroll" , $(this).scrollTop() = 0.5);
    // $(".logo").toggleClass("scrollImg" , $(this).scrollTop()> 10); 
    // $("#testdiv").toggleClass("test1", $(this).scrollTop()> 10);
})