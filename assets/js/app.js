jQuery(document).ready(function() {
    var windowHeight = $(window).height();
    $("#hero, #work, #networks").height(windowHeight);

    // card 
    if(windowHeight < $(window).width()){
        $('.hero-block').css('top', '0%')
    }

    $(window).resize(function() {
        $("#hero").height($(window).height());
        $("#hero").css("min-height", "480px")
    });
    $(window).resize(function() {
        $("#work").minHeight($(window).height());
        $(".showcase-info").css("min-height", "360px")
    });
    $(window).resize(function() {
        $("#networks").height($(window).height());
        $("#networks").css("min-height", "480px")
    })
});
jQuery(document).ready(function(e) {
    e(".scroll").click(function(t) {
        t.preventDefault();
        e("html,body").animate({scrollTop: e(this.hash).offset().top}, 1e3)
    })
});
