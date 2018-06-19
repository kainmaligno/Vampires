document.getElementById("start-button").onclick = function() {
  startGame();
};

addEventListener("keydown", function(e) {
  switch (e.keyCode) {
    case 87:
      moves = 7;
      //vamp.moveUp();
      //console.log("up", vamp);
      break;
    case 83:
      moves = 6;
      //vamp.moveDown();
      //console.log("down", vamp);
      break;
    case 65:
      moves = 5;
      //vamp.moveLeft();
      //console.log("left", vamp);
      break;
    case 68:
      moves = 4;
      //vamp.moveRight();
      //console.log("right", vamp);
      break;
    case 38:
      moves = 1;
     //vamp.punch();
     //console.log("punch", moves);
      break;
    case 39:
      moves = 2;
      //vamp.kick();
      //moves = false;
     // console.log("kick", moves);
      break;
    case 40:
      moves = 3;
      generateFires();
      
      //vamp.power();
      //console.log("pow", vamp);
      break;
  }
});


