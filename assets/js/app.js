jQuery(document).ready(function() {
    var windowHeight = $(window).height();
    $("#hero, #work, #networks").height(windowHeight);

    $(window).resize(function() {
        $("#hero").height($(window).height());
        $("#hero").css("min-height", "600px")
    });
    $(window).resize(function() {
        $("#work").minHeight($(window).height());
        $(".showcase-info").css("min-height", "360px")
    });
    $(window).resize(function() {
        $("#networks").height($(window).height());
        $("#networks").css("min-height", "600px")
    })
});
jQuery(document).ready(function(e) {
    e(".scroll").click(function(t) {
        t.preventDefault();
        e("html,body").animate({scrollTop: e(this.hash).offset().top}, 1e3)
    })
});
