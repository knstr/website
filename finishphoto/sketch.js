let capture;
var w=1;
var x=1;
function setup() {
  createCanvas(640, 480);
  let constraints = {
    video: {
         facingMode: {
          exact: "environment"
        },
    audio: false
  };
  
  capture = createCapture(constraints);
  capture.hide();
  frameRate(30)
}

function draw() {
  //image(capture, 0, 0, width, width * capture.height / capture.width);
  copy(capture,width/2,0,1,height,x,0,1,height);
  x=x+w;

}
