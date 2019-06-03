$(window).ready(function() {
    function infoUp(){
        var div = $('.info_details_ul');
       // console.log(div[0]);
        var remHeight = div[0].scrollHeight - $(this).height();
        var scrollableHeight = remHeight - div.scrollTop();
        var pos = div.scrollTop();
        var remainingTime = (scrollableHeight - pos) * 100 / 10; //here 100 is a speed
        $('.info_details_ul').animate({
            scrollTop:remHeight
        },{
            duration: remainingTime,
            easing: "linear",
        }); 
    }

    function infoDown(){
        var div = $('.info_details_ul');
        var remHeight = div[0].scrollHeight - $(this).height();
        var scrollableHeight = remHeight - div.scrollTop();
        var pos = div.scrollTop();
        var remainingTime = (pos * 100) / 10; //here 100 is a speed
        $('.info_details_ul').animate({
            scrollTop: 0
        },{
            duration: remainingTime,
            easing: "linear",
        });        
    }
    $('.up_info_direction').mouseenter(infoDown);
    $('.up_info_direction').mouseleave(function(){
        $('.info_details_ul').stop();
    });
    $('.down_info_direction').mouseenter(infoUp);  

    $('.down_info_direction').mouseleave(function(){
        $('.info_details_ul').stop();
    });

    //list item
    var info_details_li = document.querySelectorAll('.info_details_li');
    var info_left_span = document.querySelectorAll('.info_left_span');
    var info_right_span = document.querySelectorAll('.info_right_span');

    info_left_span.forEach(function(item, index) {
        var str = item.textContent;
        var actualStr = item.textContent;
        if(str.length<=1) {
            item.innerHTML='Unknown';
        }
        var actualStr = item.textContent;
        var status = false;
        if(str.length > 7) {
            var slice_str = str.slice(0, 7);
            str = str.replace(str, slice_str+'...');
            item.innerHTML=str;
            status=true;
        }
        showContent(item, status, index);
        
    });
    // info_right_span.forEach(function(item) {
    //     var str = item.textContent;
    //     if(str.length<=1) {
    //         item.innerHTML='Unknown';
    //     }
    //     if(str.length > 7) {
    //         var slice_str = str.slice(0, 5);
    //         str = str.replace(str, slice_str+'...');
    //         item.innerHTML=str;
    //     }
    // });

    //show full content with vertical slide
    function showContent(item, status, index) {
        var li = item.parentElement;
        if(status) {
            
            var span_left = document.createElement('span');
                span_left.className = 'left_arrow_li_info_'+index+' left_arrow_li_info';
                span_left.innerHTML = '<i class="fas fa-angle-left"></i>';
            var span_right = document.createElement('span');
                span_right.className = 'right_arrow_li_info_'+index+' right_arrow_li_info';
                span_right.innerHTML = '<i class="fas fa-angle-right"></i>';
            li.appendChild(span_left);
            li.appendChild(span_right);
        }
    }
    function createInfoFulContentSlide() {
        var info_details_div = document.querySelector('.info_details_ul');
        info_details_div.addEventListener('mouseover', function(e){
            var li = '';
            //console.log(e.target);
            //console.log(e.target.parentElement.children)
            if(e.target.className === 'info_left_span') {
                li = e.target.parentElement;
            }
            //console.log(li)
            if(li.className === 'info_details_li') {
                // var txt = '';
                // if(e.target.parentElement.children[3]) {
                //     txt = e.target.parentElement.children[3].innerHTML;
                // }
                
                if(li.children.length > 4) {
                    //console.log(li.children);
                    li.addEventListener('mouseenter', function() {
                        e.target.parentElement.children[5].style.display = 'block'; 
                        e.target.parentElement.children[4].style.display = 'block';
                        e.target.parentElement.children[3].style.display = 'block';
                        e.target.parentElement.children[2].style.display = 'none';
                        e.target.parentElement.children[1].style.display = 'none';
                        e.target.parentElement.children[0].style.display = 'none';
                        //console.log(e.target.parentElement.children[4].className.split(' ')[0])
                        //console.log(e.target.parentElement.children[5].className.split(' ')[0])

                        // var leftHandler = e.target.parentElement.children[4].className.split(' ')[0];
                        // var rightHandler = e.target.parentElement.children[5].className.split(' ')[0];

                        // $(rightHandler).mouseenter(function() {
                        //     infoLeftToRight();
                        //     console.log('clicked')
                        // });
                        // $(rightHandler).mouseleave(function(){
                        //     $('.totalInfoContent').stop();
                        // });
                        // $(leftHandler).mouseenter(infoRightToLeft);  
                        // $(leftHandler).mouseleave(function(){
                        //     $('.totalInfoContent').stop();
                        // }); 
                    });
                    li.addEventListener('mouseleave', function() {
                        e.target.parentElement.children[4].style.display = 'none';
                        e.target.parentElement.children[5].style.display = 'none';

                        e.target.parentElement.children[3].style.display = 'none';
                        //e.target.parentElement.children[3].style.opacity = '0';

                        e.target.parentElement.children[2].style.display = 'block';
                        e.target.parentElement.children[1].style.display = 'block';
                        e.target.parentElement.children[0].style.display = 'block';
                    });
                }
            }
        });
    }
    createInfoFulContentSlide();



    function infoLeftToRight(){
        var div = $('.totalInfoContent');
        var remWidth = div[0].scrollWidth - $(this).width();
        console.log('width',remWidth)
        var scrollableHeight = remWidth - div.scrollLeft();
        var pos = div.scrollLeft();
        var remainingTime = (scrollableHeight - pos) * 100 / 10; //here 100 is a speed
        $('.totalInfoContent').animate({
            scrollLeft:remWidth
        },{
            duration: remainingTime,
            easing: "linear",
        }); 
    }

    function infoRightToLeft(){
        var div = $('.totalInfoContent');
        var remWidth = div[0].scrollWidth - $(this).width();
        console.log('width',remWidth)
        var scrollableHeight = remWidth - div.scrollLeft();
        var pos = div.scrollLeft();
        var remainingTime = (pos * 100) / 10;
        $('.totalInfoContent').animate({
            scrollLeft: 0
        },{
            duration: remainingTime,
            easing: "linear",
        });        
    }
    $('.right_arrow_li_info').mouseenter(infoLeftToRight);
    $('.right_arrow_li_info').mouseleave(function(){
        $('.totalInfoContent').stop();
    });

    $('.left_arrow_li_info').mouseenter(infoRightToLeft);  
    $('.left_arrow_li_info').mouseleave(function(){
        $('.totalInfoContent').stop();
    }); 

});