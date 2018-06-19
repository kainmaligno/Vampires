

// function gamepadHandler(event, connecting) {
//   var gamepad = event.gamepad;
//   // Note:
//   // gamepad === navigator.getGamepads()[gamepad.index]

//   if (connecting) {
//     gamepads[gamepad.index] = gamepad;
//   } else {
//     delete gamepads[gamepad.index];
//   }
// }

// var hasGP = false;
// var repGP;
// function canGame() {
//   return "getGamepads" in navigator;
// }
// var input = {
//   left: false,
//   right: false
// };
// $(window).keydown(function(e) {
//   switch (e.keyCode) {
//        case 37: input.left = true; break;                            
//        case 39: input.right = true; break;                            
//   } 
// });
// $(window).keyup(function(e) {
//   switch (e.keyCode) {
//        case 37: input.left = false; break;                            
//        case 39: input.right = false; break;                            
//   } 
// });

// this.move = function() {
//   if(input.left) {
//     this.x -= this.speed;
//     if(this.x < 0) this.x=0;
//   }
//   if(input.right) {
//     this.x += this.speed;
//     if((this.x+this.width) > canvas.width) this.x=canvas.width-this.width;
//   }
// }


// //gamepad support
// if(canGame()) {
//   var prompt = "To begin using your gamepad, connect it and press any button!";
//   $("#gamepadPrompt").text(prompt);
//   $(window).on("gamepadconnected", function() {
//     hasGP = true;
//     $("#gamepadPrompt").html("Gamepad connected!");
//     repGP = window.setInterval(checkGamepad,100);
//   });
//   $(window).on("gamepaddisconnected", function() {
//     $("#gamepadPrompt").text(prompt);
//     window.clearInterval(repGP);
//   });
//   //setup an interval for Chrome
//   var checkGP = window.setInterval(function() {
//     if(navigator.getGamepads()[0]) {
//       if(!hasGP) $(window).trigger("gamepadconnected");
//       window.clearInterval(checkGP);
//     }
//   }, 500);
  
//   function checkGamepad() {
//     var gp = navigator.getGamepads()[0];
//     var axeLF = gp.axes[0];
//     if(axeLF < -0.5) {
//       input.left = true;
//       input.right = false;
//     } else if(axeLF > 0.5) {
//       input.left = false;
//       input.right = true;
//     } else {
//       input.left = false;
//       input.right = false;
//     }
//   }
// }		