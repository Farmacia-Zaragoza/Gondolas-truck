/*
    File Name: main.js
    version: V_0_0_2
    Date: 10-07-2018
    updated on : 10-23-18
*/

//touch device detect
function is_touch_device() {
 return (('ontouchstart' in window)
      || (navigator.MaxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0));
}

// events change
var hoverEvent = '', touch;
// script for flex_caption visible when hover on slider area
if (!is_touch_device()) {
	hoverEvent = 'mouseenter';
	touch = false;
	var whole_caption_area = document.querySelector('.whole_caption_area');
	var flex_caption = document.querySelector('.flex_caption');
	var slider = document.getElementById('slider');
	var touch_finger = document.querySelector('.touch_finger');

	whole_caption_area.style.display = 'none';
	flex_caption.style.display = 'none';
	if(touch_finger) {
		touch_finger.style.display = 'none';
	}
	slider.addEventListener('mouseover', function() {
		whole_caption_area.style.display = 'block';
		flex_caption.style.display = 'block';	
	});
	slider.addEventListener('mouseleave', function() {
		whole_caption_area.style.display = 'none';
		flex_caption.style.display = 'none';	
	});
 	console.log("your device is not a touch screen device.");
}else {
	hoverEvent = 'click';
	touch = true;
	var whole_caption_area = document.querySelector('.whole_caption_area');
	var flex_caption = document.querySelector('.flex_caption');
	var slider = document.getElementById('slider');
	var touch_finger = document.querySelector('.touch_finger');

	whole_caption_area.style.display = 'none';
	flex_caption.style.display = 'none';
	touch_finger.style.display = 'block';
	touch_finger.addEventListener('click', function(e) {
		if(e.target.parentElement.className === 'touch_finger touch_active') {
			whole_caption_area.style.display = 'block';
			flex_caption.style.display = 'block';
			touch_finger.classList.remove('touch_active');
		}else {
			whole_caption_area.style.display = 'none';
			flex_caption.style.display = 'none';	
			touch_finger.classList.add('touch_active');
		}
	});
	// touch_finger.addEventListener('mouseleave', function() {
	// 	whole_caption_area.style.display = 'none';
	// 	flex_caption.style.display = 'none';	
	// });
	console.log("your device is a touch screen device.");
}
// event for add active class into link_description
var left_link = document.querySelector('.left_link'),
	right_link = document.querySelector('.right_link');

	if(left_link) {
		left_link.addEventListener('mouseover', showLinkDescription);
		left_link.addEventListener('mouseout', hideLinkDescription);
	}
	if(right_link) {
		right_link.addEventListener('mouseover', showLinkDescription);
		right_link.addEventListener('mouseout', hideLinkDescription);
	}


function showLinkDescription(e) {
	//console.log(e.target.parentElement.children[0].className);
	if(e.target.parentElement.children[0].className === 'link_description') {
		e.target.parentElement.children[0].classList.add('active');
	}
}
// event for remove active class from link_description

function hideLinkDescription(e) {
	//console.log(e.target.parentElement.children[0].className);
	if(e.target.parentElement.children[0].className === 'link_description active') {
		e.target.parentElement.children[0].classList.remove('active');
	}
}

//event for window resize
// window.addEventListener('resize', function() {
// 	window_reload();
// });
// function window_reload() {
// 	var windowWidth = window.innerWidth;
// 	if(windowWidth != window.innerWidth) {
// 		window.location.reload();
// 		return;
// 	}
// }

// remove first contact_link section from DOM
	if(window.innerWidth < 768) {
		remove_contact_link();
	}
	function remove_contact_link() {
		var contact_link = document.querySelector('.contact_link');
		if(contact_link.parentElement.children[3].className === 'contact_link mobile_invisible') {
			//console.log(contact_link.parentElement.children[3]);
			contact_link.parentElement.children[3].remove();
		}	
	}

// sidebar show normal images on hover
var sidebar_wrapper_left=document.querySelector('.left_sidebar');
var sidebar_wrapper_right=document.querySelector('.right_sidebar');
sidebar_wrapper_left.addEventListener('mouseover', showNormalImage);
sidebar_wrapper_left.addEventListener('mouseout', showLightImage);
sidebar_wrapper_right.addEventListener('mouseover', showNormalImage);
sidebar_wrapper_right.addEventListener('mouseout', showLightImage);

var trucks_foldername = document.getElementById('trucks_foldername').textContent; //trucks
var trucks_light_foldername = document.getElementById('trucks_light_foldername').textContent; //trucks_light

var regex_trucks = new RegExp(trucks_foldername, "gi");
var regex_trucks_light = new RegExp(trucks_light_foldername, "gi");

function showNormalImage(e) {
	e.preventDefault();
		if(e.target.hasAttribute('index')===true) {
			
			var targetImg = e.target.src;
			//console.log(targetImg);
			var replaceByNormalImg = targetImg.replace(regex_trucks_light, trucks_foldername);
			//console.log(replaceByNormalImg);
		    e.target.src=replaceByNormalImg;
		    // var valueIndex, removeStr, newStr;
			// var str=e.target.src;
			// console.log(str);
			// var trucks_light_foldername = document.getElementById('trucks_light_foldername').textContent;
			// console.log(trucks_light_foldername);
			// var trucks_foldername = document.getElementById('trucks_foldername').textContent;
			// valueIndex=str.indexOf(trucks_foldername);
			// console.log(valueIndex);
			// removeStr = str.slice(valueIndex, valueIndex+trucks_light_foldername.length);
			// newStr=str.replace(removeStr, trucks_foldername);
			// e.target.src=newStr;
			 //console.log(replaceByNormalImg);
		}
}

//var res = str.replace(/blue/g, "red");


function showLightImage(e) {
	e.preventDefault();
		if(e.target.hasAttribute('index')===true) {
			var targetImg = e.target.src;
			//console.log(targetImg);
			var replaceByNormalImg = targetImg.replace(regex_trucks, trucks_light_foldername);
			//console.log(replaceByNormalImg);
		    e.target.src=replaceByNormalImg;
		    // var valueIndex, removeStr, newStr;
			// var str=e.target.src;
			// var trucks_light_foldername = document.getElementById('trucks_light_foldername').textContent;
			// var trucks_foldername = document.getElementById('trucks_foldername').textContent;
			// valueIndex=str.indexOf(trucks_foldername);
			// removeStr = str.slice(valueIndex, valueIndex+trucks_foldername.length);
			// newStr=str.replace(removeStr, trucks_light_foldername);
			// e.target.src=newStr;
			// console.log(newStr);
		}
}


// loader setup
var loader_wrapper = document.querySelector('.loader_wrapper');
window.addEventListener('load', function() {
	loader_wrapper.style.display = 'none';
});

//mobile language section
	var mobile_language_area = document.querySelector('.mobile_language_area');
	var langDropWown = document.querySelector('#lang_select');
	var mobile_lang_active = document.querySelector('.mobile_lang_active');
// show only small device
window.addEventListener('load', function() {
	document.querySelector('.m_drop_lang').style.display='none';
	if(window.innerWidth > 570) {
		//mobile_language_area.children[0].remove();
		mobile_language_area.style.display='none';
		var right_logo = document.querySelector('.right_logo');
		if(right_logo) {
			right_logo.style.display = 'block';
		}
	}
	if(window.innerWidth <= 570) {
		langDropWown.classList.add('lang_select');
		document.querySelector('.m_drop_lang').style.display='block';
		document.querySelector('.right_logo').style.display = 'none';
	}
	// add click event for showing lang
	langDropWown.addEventListener('click', showMobileLang);
	// add click event for hiding lang
	mobile_lang_active.addEventListener('click', hideMobileLang);
});

function showMobileLang(e) {
	if(e.target.className==='lang_select') {
		mobile_language_area.style.display='block';
	}
}
function hideMobileLang() {
	mobile_language_area.style.display='none';
}


// cookies fadeout
var cookies_policy_show_hide_btn = document.querySelector('.cookies_policy_show_hide_btn');
window.addEventListener('mousemove', function() {
	setTimeout(function(){
		document.querySelector('.cookies').classList.add('fadeout');
		cookies_policy_show_hide_btn.style.transform = 'translateX(0%)'
	}, 1000);
});
if(window.innerWidth <= 570) {
	cookies_policy_show_hide_btn.querySelector('a').innerHTML = '<i class="fab fa-cuttlefish"></i>';
}
// cursor change
function setCursorImg() {
	var cursorImg = document.querySelector('.cursorImage').children[0].src;
	//var nodeArr = ['.left_sidebar', '.right_sidebar'];
	//document.querySelector('.left_sidebar').style.cursor = 'auto';
	document.querySelector('.left_sidebar').style.cursor = 'url('+cursorImg+') 50 50, auto';
	document.querySelector('.right_sidebar').style.cursor = 'url('+cursorImg+') 50 50, auto';

	var left_sidebar_a_tags = document.querySelectorAll('.left_sidebar a');
	var right_sidebar_a_tags = document.querySelectorAll('.right_sidebar a');
	//http://gondolas02.vbrqx.com/dev/img/icons/brqx_mouse_icon_truck_left_100_100.png


	left_sidebar_a_tags.forEach(function(nodeEle) {
		//document.querySelector(nodeEle).style.cursor = 'auto';
		nodeEle.style.cursor = 'url('+cursorImg+') 50 50, auto';
	});	
	right_sidebar_a_tags.forEach(function(nodeEle) {
		//document.querySelector(nodeEle).style.cursor = 'auto';
		nodeEle.style.cursor = 'url('+cursorImg+') 50 50, auto';
	});	
}
setCursorImg();

// scripts for contact hover popup
// console.log(document.querySelector('.flex_caption').children);
// if(window.innerWidth <768) {
// 	console.log(document.querySelector('.flex_caption').children);
// };
	var contac_handler_left = document.querySelector('.contac_handler_left');
	var contac_handler_right = document.querySelector('.contac_handler_right');
	document.querySelector('.show_link_popup_email').style.display = 'none';
	document.querySelector('.show_link_popup_phone').style.display = 'none';
	if(contac_handler_left) {
		document.querySelector('.contac_handler_left').addEventListener('mouseenter', function() {
			document.querySelector('.show_link_popup_email').style.display = 'block';
		});
		document.querySelector('.contac_handler_left').addEventListener('mouseleave', function() {
			document.querySelector('.show_link_popup_email').style.display = 'none';
		});
	};
	if(contac_handler_right) {
		document.querySelector('.contac_handler_right').addEventListener('mouseenter', function() {
			document.querySelector('.show_link_popup_phone').style.display = 'block';
		});
		document.querySelector('.contac_handler_right').addEventListener('mouseleave', function() {
			document.querySelector('.show_link_popup_phone').style.display = 'none';
		});
	}
function transparent_whole_bg() {
	var transparent_div = document.createElement('div');
	transparent_div.className = 'transparent_div_style';
	var loader_wrapper = document.querySelector('.loader_wrapper');
	if(loader_wrapper) {
		loader_wrapper.insertAdjacentElement('beforebegin', transparent_div);
	}
}
transparent_whole_bg();

//show info details and hide
var info_details = document.querySelector('.info_details');
var page_info_icon = document.querySelector('.page_info_icon');
var page_layer_info = document.querySelector('.page_layer_info');
var cookies_policy_show_hide_btn  = document.querySelector('.cookies_policy_show_hide_btn');
var cookies_policy_layer_info  = document.querySelector('.cookies_policy_layer_info');
	if(!touch) {
		page_info_icon.addEventListener('mouseenter', function() {
			page_layer_info.style.display = 'block';
		});
		page_info_icon.addEventListener('mouseleave', function() {
			page_layer_info.style.display = 'none';
		});
	}
	if(!touch) {
		cookies_policy_show_hide_btn.addEventListener('mouseenter', function() {
			cookies_policy_layer_info.style.display = 'block';
		});
		cookies_policy_show_hide_btn.addEventListener('mouseleave', function() {
			cookies_policy_layer_info.style.display = 'none';
		});
	}
	page_info_icon.addEventListener('click', function() {
		info_details.style.display = 'block';
		this.style.display = 'none';
		hide_info_details();
		show_transparent_bg('block');
	});
	function hide_info_details() {
		info_details.addEventListener('mouseleave', function() {
			info_details.style.display = 'none';
			page_info_icon.style.display = 'block';
			show_transparent_bg('none');
		});
		// setTimeout(function() {
		// 	info_details.style.display = 'none';
		// 	page_info_icon.style.display = 'block';
		// 	show_transparent_bg('none');
		// }, 10000);
	}
	function show_transparent_bg(show_or_hide) {
		if(window.innerWidth < 768) {
			document.querySelector('.transparent_div_style').style.display = show_or_hide;
		};
	};
/*
0092x0123 0114x0152 0184x0245 0228x0296 0250x0200 0300x0250 
0317x0423 0512x0682 0634x0846 1024x1366 1600x1200 2048x1536 2560x1440 3840x2160

1949-Peterbilt-350-Green-Custom-Big-Sleeper-Berth-Truck-400-Cummins-4X4_3840x2160.jpg
big_tryck_red_erb-1_3840x2160.jpg
blue_big_truck_vnx-hor_3840x2160.jpg
ib_big_truck_orange_IMG_3531_3840x2160.jpg
Kenworth-Custom-Sleeper-Berth-Truck-Red_3840x2160.jpg
Kenwowrth-Roayl-Blue-W900-Custom-Big-Sleeper-Berth-Truck_3840x2160.jpg
*/
