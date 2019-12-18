var stage;
var rect;

function init(){
   // state: <canvas> 태그의 id와 연결되며 객체들의 container이다.
   stage = new createjs.Stage("effects");

   // 직사각형 객체
   rect = new createjs.Shape();

   // rect를 생성하고 위치를 정의하고 stage에 포함시킨다.
   rect.graphics.beginFill("#00bfff").drawRect(0, 0, 100, 100);
   rect.x = 300;
   rect.y = 300;
   stage.addChild(rect);
}

init();