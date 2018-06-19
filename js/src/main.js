//MAIN
function update() {
  frames++;
  // if(frames==1){
  //   vamp.sprite = new Sprite('images/Demitri.png',[0,8945],[205,160 ],12,[0,1,2,3,4,5,6,7,8,9,10],null,false,ctx, vamp.xpoint, vamp.ypoint, vamp.width, vamp.height);
  
  // }
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  board.drawFloor();
  board.draw();
  board.drawScore();
  vamp.draw();
  vamp.verticalStrike();
  vamp.horizontalStrike();
 
  switch (moves){
    case 0:
      vamp.idle();
      break;
    case 1:
      vamp.punch();
      vamp.soundpunch.play();
      break;
    case 2:
      vamp.kick();
      vamp.soundkick.play();
      break;
    case 3:
      vamp.power();
      fires.sound.play();
      break;
    case 4:
      vamp.moveRight();
      break;
    case 5:
      vamp.moveLeft();
      break;
    case 6:
      vamp.moveDown();
      break;
    case 7:
      vamp.moveUp();
      break;
    
  }
  drawEnemies();
  drawFires();
  generateEnemies();
  checkCollition();
  //hitDetection();
  //if(frames%160){
  //vamp.sprite.update(vamp,frames);
  //vamp.sprite.render(ctx);
  //}
}

function startGame() {
  //vamp.idle();
  //moves = 0;
  if (intervalo > 0) return;

  intervalo = setInterval(function() {
    update();
  }, 1000 / 60);
  // intervalo =  requestAnimationFrame(function () {
  //  update();
  // },1000/60)
  board.sound.play();
  board.sound2.play();
  
}

// var lastTime;
// function startGame(){
//   var now = Date.now();
//   var dt = (now - lastTime) / 1000.0;
//   update(dt);
//   //render();
//   lastTime = now;
//   requestAnimFrame(startGame);
//   board.sound.play();
//   board.sound2.play();
// }

function stopGame() {
  clearInterval(intervalo);
  intervalo = 0;
 board.sound.pause();
 board.sound3.play();
}

//funcion de popup con html index

//amplio el vcanvas con boton comunica con html
document.getElementById("btnAmpliar").onclick = function() {
  ampliar();
};

function ampliar() {
  contenedor.style.width = "100%";
  contenedor.style.height = "100vh";
  contenedor.style.margin = "0";

  ampliarCanvas.style.width = "100%";
  ampliarCanvas.style.height = "100vh";
  ampliarCanvas.style.backgroundSize = "cover";
  ampliarCanvas.style.backgroundRepeat = "no-repeat";

  btnAmpliar.innerHTML = "reducir";
  btnAmpliar.style.position = "fixed";
  btnAmpliar.style.top = "10px";
  btnAmpliar.style.left = "10px";
  btnAmpliar.style.zIndex = "1";
  btnStart.style.display = "none";
  btnReducir.style.display = "none";
  btnAmpliar.setAttribute("onClick", "reducir()");
}

function reducir() {
  contenedor.style.width = "1400px";
  contenedor.style.height = "700px";
  contenedor.style.margin = "5vh auto";

  ampliarCanvas.style.width = "1400px";
  ampliarCanvas.style.height = "700px";

  btnAmpliar.innerHTML = "pantalla full";
  btnAmpliar.style.position = "relative";
  btnAmpliar.style.top = "0";
  btnAmpliar.style.left = "0";
  btnAmpliar.style.zIndex = "0";
  btnStart.style.display = "inline";
  btnReducir.style.display = "inline";
  btnAmpliar.setAttribute("onClick", "ampliar()");
}
