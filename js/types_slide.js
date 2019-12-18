var img1 = new Image();
img1.src = 'image/tablet.JPG';
var img2 = new Image();
img2.src = 'image/powder.JPG';
var img3 = new Image();
img3.src = 'image/syrup.JPG';
var img4 = new Image();
img4.src = 'image/gel.JPG';
var img5 = new Image();
img5.src = 'image/ointment.JPG';
var img6 = new Image();
img6.src = 'image/band.JPG';
var img7 = new Image();
img7.src = 'image/plaster.JPG';
var img8 = new Image();
img8.src = 'image/injection.JPG';
var img9 = new Image();
img9.src = 'image/vial.JPG';
var img10 = new Image();
img10.src = 'image/syringe.JPG';

var count = 1;   
var maxCount = 10;
           
 function slide() {
      if( count == (maxCount+1) ) { count = 1; } 
      document.type.src= eval( "img" + count + ".src");
      count++;
 }  

 function start() {
      slideTime = setInterval("slide()",1000);
 }

 function stop() {
      clearInterval(slideTime);
 }

 if (document.addEventListener){
      document.type.addEventListener("mouseover",start,false);
      document.type.addEventListener("mouseout",stop,false);
 } else {
      document.type.attachEvent("onmouseover",start);
      document.type.attachEvent("onmouseout",stop);
 }