///Disable mobile smooth scroll om mobile
if ($("body").width() >= 800) {
    var options = {
        offset: 200
    }
    $("a").mPageScroll2id();
}
///Change data-wow-offset on mobile
if ($("body").width() <= 800) {
    console.log("wow-mobile");
    $(".wow").attr("data-wow-offset", "200");
}

$(".chart").addClass("fadeIn");
$(".chart").attr("data-wow-offset", "150");
///Drop Down Team
$(".drop-down").click(function () {
    $("#team").fadeToggle();
    $(this).toggleClass("close");
    $("#about").toggleClass('.wrap');
    if (s.isMobile() == true) {

        console.log("is mobile");
        s.destroy();
    }
})
/////////////////MENU mobile
jQuery(document).ready(function ($) {
    var overlayNav = $('.cd-overlay-nav'),
        overlayContent = $('.cd-overlay-content'),
        navigation = $('.cd-primary-nav'),
        toggleNav = $('.cd-nav-trigger');

    function Close() {
        toggleNav.removeClass('close-nav');
        $("body").css("overflow", "auto");
        overlayContent.children('span').velocity({
            translateZ: 0,
            scaleX: 1,
            scaleY: 1,
        }, 500, 'easeInCubic', function () {
            navigation.removeClass('fade-in');

            overlayNav.children('span').velocity({
                translateZ: 0,
                scaleX: 0,
                scaleY: 0,
            }, 0);

            overlayContent.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                overlayContent.children('span').velocity({
                    translateZ: 0,
                    scaleX: 0,
                    scaleY: 0,
                }, 0, function () {
                    overlayContent.removeClass('is-hidden')
                });
            });
            if ($('html').hasClass('no-csstransitions')) {
                overlayContent.children('span').velocity({
                    translateZ: 0,
                    scaleX: 0,
                    scaleY: 0,
                }, 0, function () {
                    overlayContent.removeClass('is-hidden')
                });
            }
        });
    }

    function Open() {
        toggleNav.addClass('close-nav');
        $("body").css("overflow", "hidden");
        overlayNav.children('span').velocity({
            translateZ: 0,
            scaleX: 1,
            scaleY: 1,
        }, 500, 'easeInCubic', function () {
            navigation.addClass('fade-in');
        });
    }

    //inizialize navigation and content layers
    layerInit();
    $(window).on('resize', function () {
        window.requestAnimationFrame(layerInit);
    });

    //open/close the menu and cover layers
    toggleNav.on('click', function () {
        if (!toggleNav.hasClass('close-nav')) {
            //it means navigation is not visible yet - open it and animate navigation layer
            Open();
        } else {
            //navigation is open - close it and remove navigation layer
            Close();
        }
    });

    function layerInit() {
        var diameterValue = (Math.sqrt(Math.pow($(window).height(), 2) + Math.pow($(window).width(), 2)) * 2);
        overlayNav.children('span').velocity({
            scaleX: 0,
            scaleY: 0,
            translateZ: 0,
        }, 50).velocity({
            height: diameterValue + 'px',
            width: diameterValue + 'px',
            top: -(diameterValue / 2) + 'px',
            left: -(diameterValue / 2) + 'px',
        }, 0);

        overlayContent.children('span').velocity({
            scaleX: 0,
            scaleY: 0,
            translateZ: 0,
        }, 50).velocity({
            height: diameterValue + 'px',
            width: diameterValue + 'px',
            top: -(diameterValue / 2) + 'px',
            left: -(diameterValue / 2) + 'px',
        }, 0);
    }

    $(".click-menu").click(function () {
        Close();
    })


    if ($("body").width() >= 850) {
        var header = new Headhesive('.menu', options);
    }
});

///SvgAnimation
var checkLory = true;
var checkCalendar = true;
var checkCloud = true;
$(window).ready(function () {
    $(".img").css("background-position", "center");
    console.log($("#loryBox").css("visibility"));

    $(window).on("scroll", function () {

        if ($("#loryBox").css("visibility") == "visible" && checkLory == true) {

            $("#per").css("transition", "height 1s")
            $("#per").delay(500);
            $("#per").velocity({
                height: 125
            });

            checkLory = false;
        }

        if ($("#calendarBox").css("visibility") == "visible" && checkCalendar == true) {

            $(".cln-6").css("transition", "1s ease 1s");

            $(".cln-6").each(function (i) {

                setTimeout(function () {

                    $(".cln-6").eq(i).velocity({
                        stroke: "#de4444"
                    }, 100 * i)
                })
            });

            checkCalendar = false;
        }

    })

});
/////PLay Video
//function Play() {
//    $('video').get(0).play();
//    //    alert("Play");
//}
//
//$("#play").on("click", function () {
//    Play();
//})
//Parallax
$("img.motion").attr("data-bottom-top", "transform:translate(0,-40px)");
$("img.motion").attr("data-top-bottom", "transform:translate(0,100px)");

var video = document.getElementById('video');
//var main = document.getElementById('main');
//main.addEventListener('click', function () {
//    video.play();
//}, false);
document.addEventListener("DOMContentLoaded", function(event) {
      video.play();
  });

//////Form 
//var inst = $('[data-remodal-id=form]').remodal();
//    $(document).ready(function () {
//        //E-mail Ajax Send
//        $("form").submit(function () { //Change
//            var th = $(this);
//            $.ajax({
//                type: "POST",
//                url: "../mail.php", //Change
//                data: th.serialize()
//            }).done(function () {
//                
//                inst.close();
//                
//                setTimeout(function () {
//                    th.trigger("reset");
//                }, 1000);
//            });
//            return false;
//        });
//
//    });
