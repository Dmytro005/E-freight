var i = 1;
var options = {
    offset: 200
}
var size = 150;
if ($("body").width() <= 500) {
    var size = 130;
}
$(window).on('scroll', function () {

    var id = "#chart" + i;

    if ($(id).css('visibility') == "visible") {

        if (i & 1) { //check if our chrt id number is coupled
            $(id).easyPieChart({
                size: size,
                barColor: '#D92525',
                trackColor: '#E8E8E8',
                scaleColor: false,
                lineWidth: 5,
                trackWidth: 5,
                lineCap: 'round',
                animate: {
                    duration: 5000,
                    enabled: true
                },
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
            i += 1;
        } else {
            $(id).easyPieChart({
                size: size,
                barColor: '#55b13d',
                trackColor: '#E8E8E8',
                scaleColor: false,
                lineWidth: 5,
                trackWidth: 5,
                trackWidth: 5,
                lineCap: 'round',
                animate: {
                    duration: 5000,
                    enabled: true
                },
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
            i += 1;
        }
    }
});

$("a").mPageScroll2id();

$(".chart").addClass("fadeIn");
$(".chart").attr("data-wow-offset", "150");

$(".drop-down").click(function () {
    $("#team").fadeToggle("lineal");
    $(this).toggleClass("close");
    
    $("#about").toggleClass('.wrap');
})
/////////////////MENU
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
    
    $(".click-menu").click(function(){
        Close();
    })
    

if ($("body").width() >= 850) {
        var header = new Headhesive('.menu', options);
}
});

//if($(".cd-primary-nav.fade-in:visible")){
//    $(body)
//}
//if ($("body").width() <= 500 ) {
//        
//}
/////Menu

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