let capture;
var w=1;
var x=1;
function setup() {
  createCanvas(1600, windowHeight);
  let constraints = {
    video: true,
    audio: false
  };
  
  capture = createCapture(constraints);
  capture.hide();
  frameRate(60)
}

function draw() {
  copy(capture,width/2,0,1,height,x,0,1,height);
  x=x+w;
}

function windowResized() {
  resizeCanvas(1600, windowHeight);
}
