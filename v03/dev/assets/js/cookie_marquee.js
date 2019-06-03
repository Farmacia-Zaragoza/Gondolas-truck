$(window).ready(function(){

    /* script for flex_caption section starts */
    function cookieUpToDown(){
        var div = $('.cookie_content');
        var remHeight = div[0].scrollHeight - $(this).height();
        var scrollableHeight = remHeight - div.scrollTop();
        var pos = div.scrollTop();
        var remainingTime = (scrollableHeight - pos) * 100 / 10; //here 100 is a speed
        $('.cookie_content').animate({
            scrollTop:remHeight
        },{
            duration: remainingTime,
            easing: "linear",
        }); 
    }

    function cookieDownToUp(){
        var div = $('.cookie_content');
        var remHeight = div[0].scrollHeight - $(this).height();
        var scrollableHeight = remHeight - div.scrollTop();
        var pos = div.scrollTop();
        var remainingTime = (pos * 100) / 10; //here 100 is a speed
        $('.cookie_content').animate({
            scrollTop: 0
        },{
            duration: remainingTime,
            easing: "linear",
        });        
    }
    // function activeScroll() {
    //     if($('.policy_up').attr('class') === 'policy_up active_scroll') {
    //         console.log(true);
    //         activeScrollContent();
    //         $('.policy_up').removeClass('active_scroll');
    //         $('.green_auto_scroll_start').css('display', 'none');
    //         $('.red_auto_scroll_stop').css('display', 'block');
    //     }
    //     if($('.policy_up').attr('class') === 'policy_up') {
    //         console.log(false);
    //         $('.policy_up').addClass('active_scroll');
    //         $('.cookie_content').stop();
    //         $('.green_auto_scroll_start').css('display', 'block');
    //         $('.red_auto_scroll_stop').css('display', 'none');
    //     }
    // }

//     var status = true;

//    function defaultStatus() {
//         if(status === true) {
//             console.log('true');
//             slideTrue();
//         }
//     }

    $('.autoScrollParent img').click(function(e) {
        if($('.policy_up').attr('class') === 'policy_up active_scroll') {
            //console.log(true);
            //status = false;
            slideTrue();
            $('.red_auto_scroll_stop').css('display', 'none');
            $('.green_auto_scroll_start').css('display', 'block');
            $('.policy_up').removeClass('active_scroll');
        }
        else if($('.policy_up').attr('class') === 'policy_up') {
            //console.log(false);
            //status = true;
            slideFalse();
            $('.red_auto_scroll_stop').css('display', 'block');
            $('.green_auto_scroll_start').css('display', 'none');
            $('.policy_up').addClass('active_scroll');
        }
    });

    function slideTrue() {
        $('.policy_up').mouseenter(cookieDownToUp);
        $('.policy_up').mouseleave(function(){
            $('.cookie_content').stop();
        });
        $('.policy_down').mouseenter(cookieUpToDown);
    
        $('.policy_down').mouseleave(function(){
            $('.cookie_content').stop();
        });
    }
    function slideFalse() {
        $('.policy_up').mouseenter(function() {
            $('.cookie_content').stop();
        });
        $('.policy_up').mouseleave(function(){
            $('.cookie_content').stop();
        });
        $('.policy_down').mouseenter(function() {
            $('.cookie_content').stop();
        });

        $('.policy_down').mouseleave(function(){
            $('.cookie_content').stop();
        });
    }

    // keboard behaviour
    //var keyboardEvent = new KeyboardEvent('keypress', {bubbles:true}); 
    $(document).on('keyup', function(event) {
        event.preventDefault();
        console.log(event.keyCode);
        if(event.which == 38 || event.keyCode==38) {
            cookieUpToDown();
        }else if(event.which == 40 || event.keyCode == 40) {
            cookieDownToUp();
        }
        return false;
    });
    $(document).on("keydown", function(event) {
        event.preventDefault();
        if(event.which == 38 || event.keyCode==38) {
            $('.cookie_content').stop();
            console.log('38');
        }else if(event.which == 40 || event.keyCode == 40) {
            $('.cookie_content').stop();
            console.log('40');
        }
    });
    // $(document).on("keyup", function(event) {
    //     if(event.which == 38 || event.keyCode==38) {
    //         $('.cookie_content').stop();
    //     }
    // });
    // $(document).on("keydown", function(event) {
    //     if(event.which == 40 || event.keyCode == 40) {
    //         cookieUpToDown();
    //     }
    // });
    // $(document).on("keyup", function(event) {
    //     if(event.which == 40 || event.keyCode == 40) {
    //         $('.cookie_content').stop();
    //     }
    // });

    // $(document).on("keydown", function(event) {
    //     if(event.which === 40) {
    //         scookieUpToDown();
    //     }
    // });
    // $(document).on("keyup", function(event) {
    //     if(event.which === 40) {
    //         $('.cookie_content').stop();
    //     }
    // });


    // function activeScrollContent() {
    //     $('.policy_up').mouseenter(cookieDownToToUp);
    //     $('.policy_up').mouseleave(function(){
    //         $('.cookie_content').stop();
    //     });
    //     $('.policy_down').mouseenter(scookieUpToDown);
    
    //     $('.policy_down').mouseleave(function(){
    //         $('.cookie_content').stop();
    //     });
    // }
    // activeScrollContent();

    /* script for flex_caption section ends here */

    // font size adjust
    $('.fontIncreaseIcon img').click(function(e) {
       // $('.pocily_inner h1', '.pocily_inner h2', '.pocily_inner h3', '.pocily_inner p').css('font-size', '10px');
       fontSizeIncreaseBy5px();
       console.log('clicked');
    });
    $('.fontReduceIcon img').click(function(e) {
        // $('.pocily_inner h1', '.pocily_inner h2', '.pocily_inner h3', '.pocily_inner p').css('font-size', '10px');
        fontSizeDecreaseBy5px();
     });

     function fontSizeIncreaseBy5px() {
        var txt = $('.fontStyleClass');
        //var defaultStyle = window.getComputedStyle(txt, null).getPropertyValue('font-size');
        //var currentSize = parseFloat(defaultStyle);
        //console.log(currentSize);
        //txt.style.fontSize = (currentSize+5)+'px';
        //txt.css('font-size', '100px');
        txt.each(function(element, item) {
            var currentSize = $(this).css('font-size');
            var currentSizeInt = parseFloat(currentSize);
            console.log(currentSizeInt);
            currentSizeInt++;
            $(this).css('font-size', currentSizeInt);
        });
    };
    function fontSizeDecreaseBy5px() {
        var txt = $('.fontStyleClass');
        //var defaultStyle = window.getComputedStyle(txt, null).getPropertyValue('font-size');
        //var currentSize = parseFloat(defaultStyle);
        //console.log(currentSize);
        //txt.style.fontSize = (currentSize+5)+'px';
        //txt.css('font-size', '100px');
        txt.each(function(element, item) {
            var currentSize = $(this).css('font-size');
            var currentSizeInt = parseFloat(currentSize);
            console.log(currentSizeInt);
            currentSizeInt--;
            $(this).css('font-size', currentSizeInt);
        });
    };
});

// var fontStyleClassArr = document.querySelectorAll('.fontStyleClass');
// //console.log(fontStyleClassArr);

// function fontSizeIncreaseBy5px() {
//      fontStyleClassArr.forEach(function(ele) {
//         computedFontStyle(ele);
//      });
// }
// function computedFontStyle(styleEle) {
//     var txt = document.querySelector('.'+styleEle.className);
//     var defaultStyle = window.getComputedStyle(txt, null).getPropertyValue('font-size');
//     var currentSize = parseFloat(defaultStyle);
//     txt.style.fontSize = (currentSize+1)+'px';
// }

// function fontSizeDecreaseBy5px() {
//     var txt = document.querySelector('p');
//     var defaultStyle = window.getComputedStyle(txt, null).getPropertyValue('font-size');
//     var currentSize = parseFloat(defaultStyle);
//     //console.log(currentSize);
//     txt.style.fontSize = (currentSize-5)+'px';
// }

//fontSizeIncreaseBy5px();

// function increaseFontSizeBy1px() {
//     var fontClassName = document.querySelectorAll('.fontStyleClass');
//     fontClassName.forEach(function(item) {
//         console.log(item);
//         item.style.color = 'red';
//         var style = window.getComputedStyle(item, null).getPropertyValue('font-size');
//         console.log(style);
//         var currentSize = parseInt(style);
//         console.log(currentSize);
//         currentSize+50;
//         item.style.fontSize = currentSize+'px';
//         console.log(currentSize);
//     });
//     // var style = window.getComputedStyle(id, null).getPropertyValue('font-size');
//     // var currentSize = parseInt(style);
//     // currentSize++;
//     // document.getElementById('b').style.fontSize = currentSize.toString();
// }
// increaseFontSizeBy1px();

// detect keboard key number

// document.addEventListener("keydown", function(event) {
//     console.log(event.which);
// });