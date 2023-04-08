let capture;
var x=0;
function setup() {
  createCanvas(640, 480);
  let constraints = {
    video: true,
    audio: false
  };
  
  capture = createCapture(constraints,ready);
  capture.hide();
  frameRate(60)
}
var go=false;
function ready(){
  go=true;
}

function draw() {
  if (go){
    copy(capture,width/2,0,1,height,x,0,1,height);
      x=x+1;
    if (x==width){
      noLoop();
    }
  }
}

