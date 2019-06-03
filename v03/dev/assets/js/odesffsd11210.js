/*
    File Name: captcha.js
    version: V_0_0_3
    Date: 8-28-18
    updated on : 8-29-18
*/
	var d22d66gcc_data = document.getElementById('d22d66gcc_data').getAttribute('data');
	var possibleCharacter;
	if(d22d66gcc_data) {
		possibleCharacter = d22d66gcc_data;
	}

	var defaults = {
		selector: '#captcha',
		text: null,
		randomText: true,
		randomColors: true,
		width: 244,
		height: 163,
		color1: null,
		color2: null,
		font: 'normal 40px "Comic Sans MS", cursive, sans-serif',
		onSuccess: function() {
			redirectPage();
		},
		onFailure: function() {
			alert('wrong!');
		}
	};

	createCaptha();
	captcha();
	function createCaptha() {
		// create canvas 
		var canvas = document.createElement('canvas');
			canvas.setAttribute('width', 244);
			canvas.setAttribute('height', 163);
			canvas.id = 'canvas_id';
		var capchaEle = document.getElementById('captcha').children[0];
		//capchaEle.insertAdjacentHTML('afterbegin','<div>'+canvas+'</div>' );
		capchaEle.appendChild(canvas);
		//console.log(capchaEle);
	}
	function captcha() {
		//generate random text, color, curve
		if(defaults.text === null || defaults.text === '') {
			defaults.randomText = true;
		}
		if(defaults.randomText) {
			generateRandomText();
		}
		if(defaults.randomColors) {
			defaults.color1 = generateRandomColor();
			defaults.color2 = generateRandomColor();
		}

		var canvas_id = document.getElementById('canvas_id');
		//console.log(canvas_id);
		var context = canvas_id.getContext('2d');
		//console.log(context);
		var gradient1 = context.createLinearGradient(0, 0, defaults.width, 0);
		//console.log(gradient1);
		gradient1.addColorStop(0, defaults.color1);
		gradient1.addColorStop(1, defaults.color2);

		context.fillStyle = gradient1;
		context.fillRect(0, 0, defaults.width, defaults.height);

		context.fillStyle = "rgba(255,255,255,0.65)";
        context.fillRect(0, 0, defaults.width, defaults.height);

        var gradient2 = context.createLinearGradient(0, 0, defaults.width, 0);
		gradient2.addColorStop(0, defaults.color1);
		gradient2.addColorStop(1, defaults.color2);

		context.font = defaults.font;
		context.fillStyle = gradient2;

		context.setTransform((Math.random()/10)+0.9,
			0.1 - (Math.random()/5),
			0.1 - (Math.random()/5),
			(Math.random()/10)+0.9,
			(Math.random()*20)+10,
			100);
		context.fillText(defaults.text, 0, 0);
		context.setTransform(1, 0, 0, 1, 0, 0);
		var numRandomCurves = Math.floor((Math.random() * 3) + 5);
		for (var i = 0; i < numRandomCurves; i++) {
                drawRandomCurve();
        	}

	}

// validate input
var chatForm = document.getElementById('chatForm');
	chatForm.addEventListener('submit', validate);
function validate(e) {
	e.preventDefault();
	var userText = document.getElementById('chatInput').value;
	if(userText!=='') {
		if(userText.toUpperCase() === defaults.text.toUpperCase()){
			
			document.getElementById('chatInput').value='';
			document.querySelector('.captcha_loading').style.display = 'block';
			document.querySelector('.captcha_container').classList.add('hight');
			setTimeout(function() {
				document.querySelector('.captcha_loading').style.display = 'none';
				document.querySelector('.redirecting').style.display = 'block';
				userText=' ';
				setTimeout(function(){
					redirectPage();
				}, 1000);
			},1000);
		}else {
			document.querySelector('.wrong').style.display = 'block';
			document.getElementById('chatInput').value='';
			document.querySelector('.captcha_container').classList.add('hight');
			setTimeout(function() {
				document.querySelector('.wrong').style.display = 'none';
				document.querySelector('.captcha_container').classList.remove('hight');
			},1000);
		}
	}
}
//refresh
var refresh = document.querySelector('.refresh');
	refresh.addEventListener('click', function(e) {
		e.preventDefault();
		captcha();
		document.getElementById('chatInput').value='';
	});
//generateRandomText
function generateRandomText() {
	defaults.text = '';
	var length = 5; // Math.floor((Math.random()*3)+6)
	for(var i=0; i<length; i++) {
		var num = Math.random()*possibleCharacter.length;
		defaults.text += possibleCharacter.charAt(num);
	}
	//console.log(defaults.text);
}
//generateRandomColor
function generateRandomColor() {
	var rgbNum = Math.floor((Math.random()*255));
	var rgbaColor = 'rgb('+rgbNum+','+rgbNum+','+rgbNum+')';
	return rgbaColor;
}

//drawRandomCurve
function drawRandomCurve() {
	var canvas_id = document.getElementById('canvas_id');
	var ctx = canvas_id.getContext('2d');	
	var gradient1 = ctx.createLinearGradient(0, 0, defaults.width, 0);
    gradient1.addColorStop(0, Math.random() < 0.5 ? defaults.color1 : defaults.color2);
    gradient1.addColorStop(1, Math.random() < 0.5 ? defaults.color1 : defaults.color2);
    ctx.lineWidth = Math.floor((Math.random() * 4) + 2);
    ctx.strokeStyle = gradient1;
    ctx.beginPath();
    ctx.moveTo(Math.floor((Math.random() * defaults.width)), Math.floor((Math.random() * defaults.height)));
    ctx.bezierCurveTo(Math.floor((Math.random() * defaults.width)), Math.floor((Math.random() * defaults.height)),
        Math.floor((Math.random() * defaults.width)), Math.floor((Math.random() * defaults.height)),
        Math.floor((Math.random() * defaults.width)), Math.floor((Math.random() * defaults.height)));
    ctx.stroke();
}

// show and hidden event
var chat_icon = document.querySelector('.chat_icon');
chat_icon.addEventListener('mouseenter', toggleChatBox);

function toggleChatBox() {
	var siteProtocol = location.protocol;
	var sitedomain = location.hostname;
	var finalSite = siteProtocol+'//'+sitedomain;
	var imgFolderName = document.getElementById('truck_folder_name').textContent;
	var dev_string = document.getElementById('dev_string').textContent;
	var transparent_div_style = document.querySelector('.transparent_div_style');
	if(dev_string) {
		finalSite = siteProtocol+'//'+sitedomain+'/'+dev_string+'/'+imgFolderName;
	}else {
		finalSite = siteProtocol+'//'+sitedomain+'/'+imgFolderName;
	}
	var captcha_container = document.querySelector('.captcha_container');
	if(captcha_container.className==='captcha_container active') {
		chat_icon.children[0].src=finalSite+'/symbols/message_icon.svg';
		captcha_container.classList.remove('active');
		if(transparent_div_style) {
			transparent_div_style.style.display = 'none';
		}
	}else {
		chat_icon.children[0].src=finalSite+'/symbols/cross_icon.svg';
		captcha_container.classList.add('active');
		if(transparent_div_style) {
			transparent_div_style.style.display = 'block';
		}
	}
}

//redirectPage
function redirectPage() {
	var proTocol = location.protocol;
	var hostName = location.hostname;
	var pathName = location.pathname;
	//console.log(baseUrl);
	if(proTocol==='http:') {
		proTocol='https:';
	}

	var baseUrl = proTocol+'//'+hostName+pathName;
	console.log(baseUrl);
	window.location.replace(baseUrl);
}
 // redirectPage();
// http://gondolas03.vbrqx.com/dev/index.html
//https://node.vbrqx.com/fr
// var siteProtocol = location.protocol;
// var sitedomain = location.hostname;
// var finalSite = siteProtocol+'//'+sitedomain
// console.log(finalSite);

// scripts for transparent whole background when chat box is open
