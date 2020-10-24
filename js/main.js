// document ready
(function ($) {

    $('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function(e){
        if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel"){
         $("html,body").stop();
        }
       })

    $('#nav').fadeIn('1000');

    if ($(window).width() < 768) {
        $('#carousel').css("padding-top",$('#navbar').height());
        console.log($('#navbar').height());
    }

    $("#scrollbtn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#nations").offset().top
        }, 2000);
        $([document.documentElement, document.body]).delay("2000").animate({
            scrollTop: $("#specials").offset().top
        }, 2000);
        $([document.documentElement, document.body]).delay("2000").animate({
            scrollTop: $("#company").offset().top
        }, 2000);
        $([document.documentElement, document.body]).delay("2000").animate({
            scrollTop: $("#work").offset().top
        }, 2000);
        $([document.documentElement, document.body]).delay("2000").animate({
            scrollTop: $("#recruit").offset().top
        }, 2000);
        $([document.documentElement, document.body]).delay("2000").animate({
            scrollTop: $("#footer").offset().top
        }, 2000);

        
    });
    
    $("#gotop").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#nav").offset().top
        }, 2000);
    });

    
})(jQuery);    s
