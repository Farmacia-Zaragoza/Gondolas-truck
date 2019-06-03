/*
    File Name: common.js
    version: V_0_0_2
    Date: 10-07-2018
    updated on : 8-19-18
*/


$(window).ready(function(){

    // script for show caption marquee content for different truck
        // $(document).on('click touchstart', function (e) {
        //     console.log(e.target);
        // });
        // function loadCaption() {
        //     var carousel_item = $('.carousel_item');
        //     console.log(carousel_item);
        //     var marquee_content = document.querySelectorAll('.marquee-content');
        //     //console.log(marquee_content);
        //     //for(var i=0; i<carousel_item.length; i++) {
        //         carousel_item.on('click touchstart', function(e) {
        //             //console.log(e.target.parentElement);
        //             //var self = this;
        //             marquee_content.forEach(function(item) {
        //                 if(e.target.parentElement.getAttribute('data') === item.getAttribute('data')) {
        //                     item.classList.add('active');
        //                 }else {
        //                     item.classList.remove('active');
        //                 }
        //             });
        //         });
        //     //}
        //  }
        //  loadCaption();
    
            //Relode On Resize / ZoomIn/Out
            var windowWidth = $(window).width();
            //var windowHeight = $(window).height();
    
            $(window).resize(function() {
                if(windowWidth != $(window).width()) {
                    location.reload();
                    return;
                }
            });
        /* script for language section starts */
        function scrollLeftToRight(){
            var div = $('.scrolling_wrapper');
            var remWidth = div[0].scrollWidth - $(this).width();
            var scrollableHeight = remWidth - div.scrollLeft();
            var pos = div.scrollLeft();
            var remainingTime = (scrollableHeight - pos) * 100 / 10; //here 100 is a speed
            $('.scrolling_wrapper').animate({
                scrollLeft:remWidth
            },{
                duration: remainingTime,
                easing: "linear",
            }); 
        }
    
        function scrollRightToLeft(){
            var div = $('.scrolling_wrapper');
            var remWidth = div[0].scrollWidth - $(this).width();
            var scrollableHeight = remWidth - div.scrollLeft();
            var pos = div.scrollLeft();
            var remainingTime = (pos * 100) / 10;
            $('.scrolling_wrapper').animate({
                scrollLeft: 0
            },{
                duration: remainingTime,
                easing: "linear",
            });        
        }
        $('.flags_forward').mouseenter(scrollRightToLeft);
        $('.flags_forward').mouseleave(function(){
            $('.scrolling_wrapper').stop();
        });
        $('.flags_backward').mouseenter(scrollLeftToRight);  
    
        $('.flags_backward').mouseleave(function(){
            $('.scrolling_wrapper').stop();
        }); 
        /* script for language section ends here */

        // Scipt for mobile view language section 
        function langUpToDown(){
            var div = $('.mobile_vertical_wrapper');
            var remHeight = div[0].scrollHeight - $(this).height();
            var scrollableHeight = remHeight - div.scrollTop();
            var pos = div.scrollTop();
            var remainingTime = (scrollableHeight - pos) * 100 / 10; //here 100 is a speed
            $('.mobile_vertical_wrapper').animate({
                scrollTop:remHeight
            },{
                duration: remainingTime,
                easing: "linear",
            }); 
        }
    
        function langDownToToUp(){
            var div = $('.mobile_vertical_wrapper');
            var remHeight = div[0].scrollHeight - $(this).height();
            var scrollableHeight = remHeight - div.scrollTop();
            var pos = div.scrollTop();
            var remainingTime = (pos * 100) / 10; //here 100 is a speed
            $('.mobile_vertical_wrapper').animate({
                scrollTop: 0
            },{
                duration: remainingTime,
                easing: "linear",
            });        
        }
        $('.mobile_language_down').mouseenter(langDownToToUp);
        $('.mobile_language_down').mouseleave(function(){
            $('.mobile_vertical_wrapper').stop();
        });
        $('.mobile_language_up').mouseenter(langUpToDown);  
    
        $('.mobile_language_up').mouseleave(function(){
            $('.mobile_vertical_wrapper').stop();
        });
    
                //Global blazy module starts
                var bLazy = new Blazy({
    
                    breakpoints: [
                        {
                            width: 400, //max-width
                            src: 'data-src-small'
                        },
                        {
                            width: 768,
                            src: 'data-src-medium'
                        },
                        {
                            width: 1920,
                            src: 'data-src'
                        },
                        {
                            width: 2560,
                            src: 'data-src-large'
                        },
                        {
                            width: 3841,
                            src: 'data-src-extra-large'
                        }
                    ],
    
                    success: function(ele) {
                        $(ele).closest('.image-wrapper').addClass('image-loaded');
                    },
                    error: function(ele, msg) {
    
                        var image = $(ele)[0];
                        if (msg === 'missing') {
                            console.warn("Custom ERROR: ", image, " data-src is missing\n");
                        } else if (msg === 'invalid') {
                            console.warn("Custom ERROR: ", image, " data-src is invalid\n");
                        }
                    }
                });
                //Global blazy module finishes
    });
    