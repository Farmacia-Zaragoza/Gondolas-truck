/*
    File Name: slider.js
    version: V_0_0_3
    Date: 10-07-2018
    updated on : 8-28-18
*/


/*
http://gondolas02.vbrqx.com/photos/0512x0682/transportes_lucas_rivera_gondolas_transport_truck_madrid_spain_2017_-_0001_0512x0682.jpg
http://gondolas02.vbrqx.com/photos/1024x1366/transportes_lucas_rivera_gondolas_transport_truck_madrid_spain_2017_-_0001_1024x1366.jpg 
http://gondolas02.vbrqx.com/photos/0317x0423/transportes_lucas_rivera_gondolas_transport_truck_madrid_spain_2017_-_0001_0317x0423.jpg
http://gondolas02.vbrqx.com/photos/0634x0846/transportes_lucas_rivera_gondolas_transport_truck_madrid_spain_2017_-_0001_0634x0846.jpg
*/

/*
2100x2560->4k
*/

var html, imgResolution, imgName, thumbResolution, thumbHtml, baseUrl;
baseUrl = window.location.protocol+'//'+window.location.hostname;
//console.log(baseUrl);
imgName= 'transportes_lucas_rivera_gondolas_transport_truck_madrid_spain_2017';
if(window.innerWidth > 1920) {
	imgResolution = '1024x1366';
	thumbResolution='0228x0296';
}
if(window.innerWidth < 1921) {
	imgResolution = '1024x1366';
	thumbResolution='0228x0296';

} 
if (window.innerWidth < 1200) {
	imgResolution = '0634x0846';
	thumbResolution= '0184x0245';
}
if (window.innerWidth < 768) {
	imgResolution = '0512x0682';
	thumbResolution = '0114x0152';

}
if (window.innerWidth < 400) {
	imgResolution = '0317x0423';
	thumbResolution='0092x0123';
}
for (var i=1; i<=10; i++) {
	 html= '<li><img src="'+baseUrl+'/photos/'+imgResolution+'/'+imgName+'_-_00'+(i<10? ('0'+i): '10')+'_'+imgResolution+'.jpg"/></li>';
	 //console.log(html);
	 thumbHtml = '<li><img src="'+baseUrl+'/photos/'+thumbResolution+'/'+imgName+'_-_00'+(i<10? ('0'+i): '10')+'_'+thumbResolution+'.jpg"/></li>';
	 document.querySelector('#slider .slides').innerHTML+=html;
	 document.querySelector('#carousel .slides').innerHTML+=thumbHtml;
}
