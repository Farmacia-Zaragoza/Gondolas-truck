/*
    File Name: cookies.js
    version: V_0_0_2
    Date: 10-07-2018
    updated on : 9-26-18
*/


// set cookie
function setCookie(cname, cvalue) {
	var date = new Date();
	date.setFullYear(date.getFullYear()+1);
	var expireDate = 'expires='+date.toUTCString();
	document.cookie = cname+'='+cvalue+';'+expireDate+';'+'path=/';
}

// get cookie
function getCookie(cname) {
	var name = cname + '=';
	var decodedCookie = decodeURIComponent(document.cookie);
	var cookieArr = decodedCookie.split(';');
	//console.log(cookieArr);
	for (var i=0; i<cookieArr.length; i++) {
		var c = cookieArr[i];
		//console.log(c);
		while(c.charAt(0)===' ') {
			c = c.substring(1);
		}
		//console.log(c);
		if(c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}

// check cookie
// function checkCookie() {
//     var visited = getCookie("ever_visited_gondolas");
//     if (visited === "YES") {
//         //alert("Welcome again " + visited);
//         // make a popup
//         document.querySelector('.cookies').style.display = 'none';
//         //showPopup();
//     }else {
//     	document.querySelector('.cookies').classList.add('fadein');
//     }
// }
// checkCookie();
// setCookieByBanner
// function setCookieByBanner() {
// 	var cookie_yes = document.querySelector('.cookie_yes');
// 	cookie_yes.addEventListener('click', setCookieYes);
// }
var cookie_yes = document.querySelector('.cookie_yes');
if(cookie_yes) {
	cookie_yes.addEventListener('click', setCookieYes);
}
function setCookieYes() {
	setCookie("ever_visited_gondolas", 'YES');
}

setTimeout(function() {
	setCookieYes();
}, 5000);
//showPopup
// function showPopup() {
// 	var div = document.createElement('div');
// 		div.className = 'cookie_popup';
// 		div.innerHTML = '<h2>Thank you for visiting again :)</h2>';
// 		var body = document.body;
// 		var cookies = document.querySelector('.cookies');
// 		body.insertBefore(div, cookies);
// }
// showPopup();
// window.addEventListener('load', function() {
// 	    setTimeout(function(){
// 			document.querySelector('.cookie_popup').classList.add('fadeout');
// 		}, 1000);
// });

// cookies fadeout
window.addEventListener('mousemove', function() {
	setTimeout(function(){
		document.querySelector('.cookies').classList.add('fadeout');
		document.querySelector('.cookies').classList.remove('fadein');
	}, 1000);
});