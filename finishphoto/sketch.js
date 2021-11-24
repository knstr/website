Skip to main content
Processing Foundation
Switching between front and rear camera on a smartphone using P5.js #4140
p5.js
Coding Questions

Log In
Switching between front and rear camera on a smartphone using P5.js #4140
p5.js
Coding Questions

GeeveGeorge
Nov '19
Hi Guys,
I have written the program below for switching between front and rear camera on a phone when clicking on the switchBtn. On cliking the button, it doesn’t switch as intended. Hope you could have a look at my code and if possible suggest a fix. Thank you! :slight_smile:

var capture;
let switchFlag = false;
let switchBtn;

var options = {
     video: {
        
         facingMode: {
          exact: "user"
        }
     }
   };

function setup() {
  createCanvas(390, 240);
  
  capture = createCapture(options);
  
  switchBtn = createButton('Switch Camera');
  switchBtn.position(19, 19);
  switchBtn.mousePressed(switchCamera);
  
  

}

function switchCamera()
{
  switchFlag = !switchFlag;
  if(switchFlag==true)
  {
   capture.remove();
   options = {
     video: {
        
         facingMode: {
          exact: "environment"
        }
     }
   };

  }
  else
  {
   capture.remove();
   options = {
     video: {
        
         facingMode: {
          exact: "user"
        }
     }
   };
    
  }
  capture = createCapture(options);
  
}


Hello! Looks like you’re enjoying the discussion, but you haven’t signed up for an account yet.
When you create an account, we remember exactly what you’ve read, so you always come right back where you left off. You also get notifications, here and via email, whenever someone replies to you. And you can like posts to share the love. heartpulse


Sign Up
Remind me tomorrow
no thanks
Suggested Topics
Topic	Replies	Views	Activity
Get coordinate of character on canvas
Coding Questions
5	126	Jun 17
How to add text into randomly generated bubbles
Coding Questions
7	216	Jan 17
Array has error every other object
Coding Questions
6	150	Jan 19
Troubleshooting converting from .pde to p5 sketch
Coding Questions
2	135	Apr 25
indexOf does not match unicode string
Coding Questions
2	225	Jul 20
Want to read more? Browse other topics in 
Coding Questions
 or view latest topics.
