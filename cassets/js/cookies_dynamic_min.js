function setCookie(e,o){var t=new Date;t.setFullYear(t.getFullYear()+1);var i="expires="+t.toUTCString();document.cookie=e+"="+o+";"+i+";path=/"}function getCookie(e){for(var o=e+"=",t=decodeURIComponent(document.cookie).split(";"),i=0;i<t.length;i++){for(var n=t[i];" "===n.charAt(0);)n=n.substring(1);if(0===n.indexOf(o))return n.substring(o.length,n.length)}return""}function checkCookie(){"YES"===getCookie("ever_visited_gondolas")?document.querySelector(".cookies").style.display="none":document.querySelector(".cookies").classList.add("fadein")}function setCookieByBanner(){document.querySelector(".cookie_yes").addEventListener("click",setCookieYes)}checkCookie();var cookie_yes=document.querySelector(".cookie_yes");function setCookieYes(){setCookie("ever_visited_gondolas","YES")}cookie_yes&&cookie_yes.addEventListener("click",setCookieYes),setTimeout(function(){setCookieYes()},5e3),window.addEventListener("mousemove",function(){setTimeout(function(){document.querySelector(".cookies").classList.add("fadeout"),document.querySelector(".cookies").classList.remove("fadein")},1e3)});