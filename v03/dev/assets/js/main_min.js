function is_touch_device(){return"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0}var hoverEvent="",touch;if(!is_touch_device()){hoverEvent="mouseenter";touch=false;var whole_caption_area=document.querySelector(".whole_caption_area");var flex_caption=document.querySelector(".flex_caption");var slider=document.getElementById("slider");var touch_finger=document.querySelector(".touch_finger");whole_caption_area.style.display="none";flex_caption.style.display="none";if(touch_finger){touch_finger.style.display="none"}slider.addEventListener("mouseover",function(){whole_caption_area.style.display="block";flex_caption.style.display="block"});slider.addEventListener("mouseleave",function(){whole_caption_area.style.display="none";flex_caption.style.display="none"});console.log("your device is not a touch screen device.")}else{hoverEvent="click";touch=true;var whole_caption_area=document.querySelector(".whole_caption_area");var flex_caption=document.querySelector(".flex_caption");var slider=document.getElementById("slider");var touch_finger=document.querySelector(".touch_finger");whole_caption_area.style.display="none";flex_caption.style.display="none";touch_finger.style.display="block";touch_finger.addEventListener("click",function(e){if(e.target.parentElement.className==="touch_finger touch_active"){whole_caption_area.style.display="block";flex_caption.style.display="block";touch_finger.classList.remove("touch_active")}else{whole_caption_area.style.display="none";flex_caption.style.display="none";touch_finger.classList.add("touch_active")}});console.log("your device is a touch screen device.")}var left_link=document.querySelector(".left_link"),right_link=document.querySelector(".right_link");if(left_link){left_link.addEventListener("mouseover",showLinkDescription);left_link.addEventListener("mouseout",hideLinkDescription)}if(right_link){right_link.addEventListener("mouseover",showLinkDescription);right_link.addEventListener("mouseout",hideLinkDescription)}function showLinkDescription(e){if(e.target.parentElement.children[0].className==="link_description"){e.target.parentElement.children[0].classList.add("active")}}function hideLinkDescription(e){if(e.target.parentElement.children[0].className==="link_description active"){e.target.parentElement.children[0].classList.remove("active")}}if(window.innerWidth<768){remove_contact_link()}function remove_contact_link(){var contact_link=document.querySelector(".contact_link");if(contact_link.parentElement.children[3].className==="contact_link mobile_invisible"){contact_link.parentElement.children[3].remove()}}var sidebar_wrapper_left=document.querySelector(".left_sidebar");var sidebar_wrapper_right=document.querySelector(".right_sidebar");sidebar_wrapper_left.addEventListener("mouseover",showNormalImage);sidebar_wrapper_left.addEventListener("mouseout",showLightImage);sidebar_wrapper_right.addEventListener("mouseover",showNormalImage);sidebar_wrapper_right.addEventListener("mouseout",showLightImage);function showNormalImage(e){e.preventDefault();if(e.target.hasAttribute("index")===true){var valueIndex,removeStr,newStr;var str=e.target.src;var trucks_light_foldername=document.getElementById("trucks_light_foldername").textContent;var trucks_foldername=document.getElementById("trucks_foldername").textContent;valueIndex=str.indexOf(trucks_light_foldername);removeStr=str.slice(valueIndex,valueIndex+trucks_light_foldername.length);newStr=str.replace(removeStr,trucks_foldername);e.target.src=newStr}}function showLightImage(e){e.preventDefault();if(e.target.hasAttribute("index")===true){var valueIndex,removeStr,newStr;var str=e.target.src;var trucks_light_foldername=document.getElementById("trucks_light_foldername").textContent;var trucks_foldername=document.getElementById("trucks_foldername").textContent;valueIndex=str.indexOf(trucks_foldername);removeStr=str.slice(valueIndex,valueIndex+trucks_foldername.length);newStr=str.replace(removeStr,trucks_light_foldername);e.target.src=newStr}}var loader_wrapper=document.querySelector(".loader_wrapper");window.addEventListener("load",function(){loader_wrapper.style.display="none"});var mobile_language_area=document.querySelector(".mobile_language_area");var langDropWown=document.querySelector("#lang_select");var mobile_lang_active=document.querySelector(".mobile_lang_active");window.addEventListener("load",function(){document.querySelector(".m_drop_lang").style.display="none";if(window.innerWidth>570){mobile_language_area.children[0].remove();mobile_language_area.style.display="none";var right_logo=document.querySelector(".right_logo");if(right_logo){right_logo.style.display="block"}}if(window.innerWidth<=570){langDropWown.classList.add("lang_select");document.querySelector(".m_drop_lang").style.display="block";document.querySelector(".right_logo").style.display="none"}langDropWown.addEventListener("click",showMobileLang);mobile_lang_active.addEventListener("click",hideMobileLang)});function showMobileLang(e){if(e.target.className==="lang_select"){mobile_language_area.style.display="block"}}function hideMobileLang(){mobile_language_area.style.display="none"}var cookies_policy_show_hide_btn=document.querySelector(".cookies_policy_show_hide_btn");window.addEventListener("mousemove",function(){setTimeout(function(){document.querySelector(".cookies").classList.add("fadeout");cookies_policy_show_hide_btn.style.transform="translateX(0%)"},1e3)});if(window.innerWidth<=570){cookies_policy_show_hide_btn.querySelector("a").innerHTML='<i class="fab fa-cuttlefish"></i>'}function setCursorImg(){var cursorImg=document.querySelector(".cursorImage").children[0].src;document.querySelector(".left_sidebar").style.cursor="url("+cursorImg+") 50 50, auto";document.querySelector(".right_sidebar").style.cursor="url("+cursorImg+") 50 50, auto";var left_sidebar_a_tags=document.querySelectorAll(".left_sidebar a");var right_sidebar_a_tags=document.querySelectorAll(".right_sidebar a");left_sidebar_a_tags.forEach(function(nodeEle){nodeEle.style.cursor="url("+cursorImg+") 50 50, auto"});right_sidebar_a_tags.forEach(function(nodeEle){nodeEle.style.cursor="url("+cursorImg+") 50 50, auto"})}setCursorImg();var contac_handler_left=document.querySelector(".contac_handler_left");var contac_handler_right=document.querySelector(".contac_handler_right");document.querySelector(".show_link_popup_email").style.display="none";document.querySelector(".show_link_popup_phone").style.display="none";if(contac_handler_left){document.querySelector(".contac_handler_left").addEventListener("mouseenter",function(){document.querySelector(".show_link_popup_email").style.display="block"});document.querySelector(".contac_handler_left").addEventListener("mouseleave",function(){document.querySelector(".show_link_popup_email").style.display="none"})}if(contac_handler_right){document.querySelector(".contac_handler_right").addEventListener("mouseenter",function(){document.querySelector(".show_link_popup_phone").style.display="block"});document.querySelector(".contac_handler_right").addEventListener("mouseleave",function(){document.querySelector(".show_link_popup_phone").style.display="none"})}function transparent_whole_bg(){var transparent_div=document.createElement("div");transparent_div.className="transparent_div_style";var loader_wrapper=document.querySelector(".loader_wrapper");if(loader_wrapper){loader_wrapper.insertAdjacentElement("beforebegin",transparent_div)}}transparent_whole_bg();var info_details=document.querySelector(".info_details");var page_info_icon=document.querySelector(".page_info_icon");var page_layer_info=document.querySelector(".page_layer_info");var cookies_policy_show_hide_btn=document.querySelector(".cookies_policy_show_hide_btn");var cookies_policy_layer_info=document.querySelector(".cookies_policy_layer_info");if(!touch){page_info_icon.addEventListener("mouseenter",function(){page_layer_info.style.display="block"});page_info_icon.addEventListener("mouseleave",function(){page_layer_info.style.display="none"})}if(!touch){cookies_policy_show_hide_btn.addEventListener("mouseenter",function(){cookies_policy_layer_info.style.display="block"});cookies_policy_show_hide_btn.addEventListener("mouseleave",function(){cookies_policy_layer_info.style.display="none"})}page_info_icon.addEventListener("click",function(){info_details.style.display="block";this.style.display="none";hide_info_details();show_transparent_bg("block")});function hide_info_details(){setTimeout(function(){info_details.style.display="none";page_info_icon.style.display="block";show_transparent_bg("none")},1e4)}function show_transparent_bg(show_or_hide){if(window.innerWidth<768){document.querySelector(".transparent_div_style").style.display=show_or_hide}}