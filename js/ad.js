function ranNum(){
    var num = Math.floor(Math.random()*4);
    return num;
}           

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var site = new Image();
var num = ranNum();

if(num==0){

    site.src="image/mfds.jpg";
    site.onload = function(){
        ctx.drawImage(site, 0, 0, 300, 150);
    }
    function goSite(){
        window.open('https://www.mfds.go.kr/index.do','_blank');
    }
}
if(num==1){
    site.src="image/nifds.jpg";
    site.onload = function(){
        ctx.drawImage(site, 0, 0, 300, 150);
    }
    function goSite(){
        window.open('https://www.nifds.go.kr/index.do','_blank');
    }
}
if(num==2){
    site.src="image/nedrug.jpg";
    site.onload = function(){
        ctx.drawImage(site, 0, 0, 300, 150);
    }
    function goSite(){
        window.open('https://nedrug.mfds.go.kr/index','_blank');
    }
}
if(num==3){
    site.src="image/druginfo.jpg";
    site.onload = function(){
        ctx.drawImage(site, 0, 0, 300, 150);
    }
    function goSite(){
        window.open('https://www.druginfo.co.kr','_blank');
    }
}