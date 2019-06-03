var social_close_open = document.querySelector('.social_close_open');
if(social_close_open) {
	social_close_open.addEventListener('mouseenter', function() {
	    console.log(this.className);
	    if(this.className === 'social_close_open') {
		document.querySelector('.social_btns').style.display = 'block';
		//console.log('yes');z
		this.classList.add('active_social_toggle');
		}
		// else if(this.className === 'social_close_open active_social_toggle') {
		// 	document.querySelector('.social_btns').style.display = 'none';
		// 	//console.log('No');
		// 	allSocialHide();
		// 	this.classList.remove('active_social_toggle');
		// 	document.querySelector('.social_all_close').style.display = 'none';
		// 	}
	});
	// social_close_open.addEventListener('mouseleave', function() {
	//     // console.log(this.className);
	//     // if(this.className === 'social_close_open') {
	// 	// document.querySelector('.social_btns').style.display = 'block';
	// 	// //console.log('yes');z
	// 	// this.classList.add('active_social_toggle');
	// 	// }
	//     if(this.className === 'social_close_open active_social_toggle') {
	// 		document.querySelector('.social_btns').style.display = 'none';
	// 		//console.log('No');
	// 		allSocialHide();
	// 		this.classList.remove('active_social_toggle');
	// 		document.querySelector('.social_all_close').style.display = 'none';
	// 	}
	// });
}
var icons = document.querySelectorAll('.s_icon');
var socialFeed = document.querySelectorAll('.socialFeed');
if(icons) {
	icons.forEach(function(icon) {
	    icon.addEventListener('mouseenter', function() {
		document.querySelector('.social_all_close').style.display = 'block';
		var that = this;
		//console.log(that);
		socialFeed.forEach(function(ele) {
		    if(that.getAttribute('data-id') === ele.getAttribute('data-id')) {
		        ele.style.display = 'block';
		    }else {
		        ele.style.display = ' none';
		    }
		});
	    });
	});
};

var social_all_close = document.querySelector('.social_all_close');
if(social_all_close) {
	social_all_close.addEventListener('mouseenter', function() {
	    allSocialHide();
	    document.querySelector('.social_all_close').style.display = 'none';
	});
}

function allSocialHide() {
    socialFeed.forEach(function(ele) {
        ele.style.display = ' none';
        document.querySelector('.social_btns').style.display = 'none';
    });
}

