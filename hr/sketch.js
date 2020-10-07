// The serviceUuid must match the serviceUuid of the device you would like to connect
const serviceUuid = "0000180d-0000-1000-8000-00805f9b34fb";
let myCharacteristic;
let hr = 0;
let myBLE;
var i=1;
var newValue=false;
var hrArray=[];
var hrMax=195;
var hrMin=40;

function setup() {
  // Create a p5ble class
  myBLE = new p5ble();

  textSize(20);
  textAlign(CENTER, CENTER);

  // Create a 'Connect and Start Notifications' button
  const connectButton = createButton('Connect with Tickr')
  connectButton.mousePressed(connectAndStartNotify);

  // Create a 'Stop Notifications' button
  const stopButton = createButton('Stop measurements')
  stopButton.mousePressed(stopNotifications);
  createCanvas(500,200);
}

function connectAndStartNotify() {
  // Connect to a device by passing the service UUID
  myBLE.connect(serviceUuid, gotCharacteristics);
}

// A function that will be called once got characteristics
function gotCharacteristics(error, characteristics) {
  if (error) console.log('error: ', error);
  console.log('characteristics: ', characteristics);
  myCharacteristic = characteristics[0];
	myBLE.startNotifications(myCharacteristic, handleNotifications,'raw');
}

// A function that will be called once got characteristics
function handleNotifications(data) {
  hr = data.getUint8(1);
  newValue=true;
}

// A function to stop notifications
function stopNotifications() {
  myBLE.stopNotifications(myCharacteristic);
}

function draw() {
  background(220);
  // Write value on the canvas
  //text(myValue, i, 100);
	
	
	if (newValue==true){
		hrArray.push(hr);
		newValue=false;
	}
		plot(chop(hrArray,width-50));
}



function plot(arr) {
	if (arr.length>0){	
		for (i=0;i<arr.length;i++){
			var value=arr[i];
			var mapValue=map(value,hrMin,hrMax,height,0)
			var c=color(255,map(value,hrMin,hrMax,200,0),map(value,hrMin,hrMax,200,0));
			stroke(c);	
			line(i,height,i,mapValue)

		}
		textAlign(LEFT);
		noStroke();
		text(value,i+2,mapValue);
	}
}

function chop(arr,maxLength){
	if (arr.length>maxLength) {
		return arr.slice(arr.length-maxLength-1,arr.length-1);
	} else {
		return arr;
	}
}


