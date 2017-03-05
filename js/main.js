$(document).ready(function () {
    $('.bxslider').bxSlider({
        auto: true
        , mode: 'fade'
        , infiniteLoop: true
        , responsive: true
        , pager: true
        , touchEnabled: true
    });
    const backgroundVideo = new BackgroundVideo('.bv-video', {
        src: [
          'video/video.mp4'
        , 'video/video.webm'
      ]
        , onReady: function () {
            // Use onReady() to prevent flickers or force loading state
            const vidParent = document.querySelector(`.${this.bvVideoWrapClass}`);
            vidParent.classList.add('bv-video-wrap--ready');
        }
    });
    if ($(window).width() >= 817) {
        var operar = false;
        var scroll;
        $(window).scroll(function () {
            scroll = $(window).scrollTop();
            if (scroll > 50) {
                if (!operar) {
                    $("#logo").css({
                        "margin-top": "-5px"
                        , "width": "60px"
                        , "height": "60px"
                    });
                    $("header").css({
                        "background-color": "#242424"
                    });
                    operar = true;
                }
            }
            else {
                if (operar) {
                    $("#logo").css({
                        "margin-top": "150px"
                        , "width": "250px"
                        , "height": "250px"
                    });
                    $("header").css({
                        "background-color": "transparent"
                    });
                    operar = false;
                }
            }
        });
    }
    else {
        $("#logo").css({
            "margin-top": "-5px"
            , "width": "60px"
            , "height": "60px"
        });
        $("header").css({
            "background-color": "#242424"
        });
    }
});