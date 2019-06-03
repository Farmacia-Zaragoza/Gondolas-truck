/*
  sidebar.js - common for all version
  Date: 08-07-2018
*/


 /* Sidebar Starts */
 ! function() {
  var viewPortWidth = window.innerWidth;
 if (viewPortWidth > 767) {
      var mini_trucks_links = document.getElementById('mini_trucks_links').getAttribute('data');
      var imgsArray =mini_trucks_links.split(',');
      var trucks_light_foldername = document.getElementById('trucks_light_foldername').textContent;

      var truck_folder_name = $("#truck_folder_name").html();
      var linksMainString = $('#truck_links').data('links');
      var linksArray = linksMainString.split(",");
      if(linksArray === undefined){
          console.log("Error: There is no link for the trucks");
          linksArray = [];
          for(var i=0; i<=imgsArray.length; i++ ){
              linksArray[i]="#";
          }
      }
      var dev_string = document.getElementById('dev_string').textContent;
      var baseURL;
      if(dev_string) {
         baseURL = location.protocol+'//'+location.hostname+'/'+dev_string+'/';
      }else {
         baseURL = location.protocol+'//'+location.hostname+'/';
      }
      // var baseURL = location.protocol+'//'+location.hostname+'/'+dev_string+'/'; //+'dev/'
      // var baseURL = location.href;
      //var baseURL = prot+'//'+hst+'/';
      //var baseURL = 'http://gondolas02.vbrqx.com/dev/';
      //console.log(baseURL);

      function generateRandomForArray() {
          var num = Math.floor(Math.random() * imgsArray.length);
          return num;
      }

      function getRandom(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
      }

      var leftWidth = $('.left_sidebar').width();
      var leftHeight = $('.left_sidebar').height();
      console.log(leftHeight);
     function setLeftImage(img_index){
          var imageName = imgsArray[img_index];
          $(".left_sidebar").append("<a href='"+linksArray[img_index]+"'><img index='"+img_index+"' src='"+baseURL+truck_folder_name+"/"+trucks_light_foldername+ "/"+ imageName + ".svg'></a>");
      }
      function setRightImage(img_index){
          var imageName = imgsArray[img_index];
          $(".right_sidebar").append("<a href='"+linksArray[img_index]+"'><img index='"+img_index+"' src='"+baseURL+truck_folder_name+"/"+trucks_light_foldername+ "/"+ imageName + ".svg'></a>");
      }

      var quarterWidth = Math.floor(leftWidth/6);
     // console.log(quarterWidth);
      var top=0, pos = 0;
       while( top < leftHeight){
           pos = getRandom(pos, quarterWidth);
           //console.log(pos);
           top+=30;
           //console.log(top);
          var img_index = generateRandomForArray();
          setLeftImage(img_index);

          img_index = generateRandomForArray();
          setRightImage(img_index);
       }
       function randomImgLeft() {
          var div = document.querySelector('.left_sidebar');
          var twoImgArr=[];
          twoImg = div.querySelectorAll('a');
          for(var i=0; i<twoImg.length; i++) {
            if(i%2===0) {
              twoImgArr.push([twoImg[i],twoImg[i+1]]);
            }
          }
          for(var i=0; i<twoImgArr.length; i++) {
            if(i%2===0) {
              //console.log(twoImgArr[i][0]);
              twoImgArr[i][0].style.marginLeft = '20%';
            }
          }
          //console.log(twoImgArr);
        }
        randomImgLeft();

        function randomImgRight() {
          var div = document.querySelector('.right_sidebar');
          var twoImgArr=[];
          twoImg = div.querySelectorAll('a');
          for(var i=0; i<twoImg.length; i++) {
            if(i%2===0) {
              twoImgArr.push([twoImg[i],twoImg[i+1]]);
            }
          }
          for(var i=0; i<twoImgArr.length; i++) {
            if(i%2===0) {
              //console.log(twoImgArr[i][0]);
              twoImgArr[i][0].style.marginLeft = '20%';
            }
          }
          //console.log(twoImgArr);
        }
        randomImgRight();
  }
}();
/* Sidebar End */
