//generate
function generateEnemies() {
  if (!(frames % 30 === 0)) return;
  var randomPosition = Math.floor(Math.random() * 399);
  var randomEnemie = Math.floor(Math.random() * 4);
  if (randomPosition > 170 && randomPosition < 350) {
    //rango de area de juego solo ejecute enemigos entro del area jugable
    var enemie = new Enemies(randomPosition, randomEnemie);
    enemiesArray.push(enemie);
  }

  // console.log("de: "+randomPosition);
  // console.log("le toca salir a : "+randomEnemie);
  // console.log("we are in generate enemies function");
}

function generateFires() {
  var fires = new Fire(vamp);
  fireArray.push(fires);
  console.log(fireArray);
}

function drawFires() {
  fireArray.forEach(function(fires) {
    fires.draw();
  });
}

function drawEnemies() {
  enemiesArray.forEach(function(enemie) {
    enemie.draw();
  });
}

function killEnemies(enemie) {
  enemiesArray.splice(enemie);
}

function checkCollition() {
  //console.log("Moves:", moves);
  enemiesArray.forEach(function(enemie, indice) {
    if (vamp.isTouching(enemie) && moves == 0) {
      vamp.health -= 25;
      enemiesArray.splice(indice, 1);
    } else if (vamp.isTouching(enemie) && moves > 0) {
      enemiesArray.splice(indice, 1);
      //killEnemies();
    } else if (vamp.health == 0) {
      gameOver();
    }
  });

}

function hitDetection(){
  enemiesArray.forEach(function(enemie,indice){
    fireArray.forEach(function(fires){
      if(enemie.isTouching(fires)){
        console.log("dead to all");
        enemiesArray.splice(indice,1);
        vamp.health +=25;
        vamp.soundrisa.play();
      }
    })
  })
}

function gameOver() {
  stopGame();
  ctx.font = " 160px Unquiet Spirits";
  ctx.strokeStyle = "red";
  ctx.lineWidth = 8;
  ctx.strokeText("Game Over", 500, 300);

  //ctx.font = '50px Avenir';
}
