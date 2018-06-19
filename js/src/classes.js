//classes

//demitri
function Vamp() {
  this.health = 200;
  this.xpoint = 100;
  this.ypoint = 300;
  this.speed = 3;
  this.Dwidth = 500; //250; //833/8 = 110
  this.Dheight = 500; //500; //181
  //sonidos
  this.soundpunch = new Audio();
  this.soundpunch.src = 'images/sonidos/punch.wav';
  this.soundkick = new Audio();
  this.soundkick.src = 'images/sonidos/patada.wav';
  //movimiento
  this.ydir = 5;
  this.xdir = 5;
  this.img = new Image();
  this.img.src = 'images/Demitri_mod.png'
  //sprite

  this.idleSprite = new Sprite(
    "images/Tabla_Dimitri.png",
    [0, 281],
    [180, 140],
    5,
    [1,2,3,4,5],
    null,
    false,
    ctx,
    this.xpoint,
    this.ypoint,
    this.width,
    this.height
  );

  this.punchingSprite = new Sprite(
    "images/DemitripunchLX.png",
    [0, 0],
    [226.77, 143],
    2,
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    null,
    true,
    ctx,
    this.xpoint,
    this.ypoint,
    this.width,
    this.height
  );

  this.walksprite = new Sprite(
    "images/Tabla_Dimitri.png",
    [0, 844],
    [180, 140],
    9,
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    null,
    true,
    ctx,
    this.xpoint,
    this.ypoint,
    this.width,
    this.height
  );

  this.walkLeftSprite = new Sprite(
    "images/Tabla_Dimitri.png",
    [0, 133],
    [180, 140],
    9,
    [0, 1, 2, 3, 4, 5, 6, 7],
    null,
    true,
    ctx,
    this.xpoint,
    this.ypoint,
    this.width,
    this.height
  );

  this.kickSprite = new Sprite(
    "images/Tabla_Dimitri.png",
    [0, 427],
    [180, 140],
    2,
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 12],
    null,
    true,
    ctx,
    this.xpoint,
    this.ypoint,
    this.width,
    this.height
  );

  this.powerSprite = new Sprite(
    "images/Tabla_Dimitri.png",
    [0, 565],
    [180, 140],
    10,
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    null,
    true,
    ctx,
    this.xpoint,
    this.ypoint,
    this.width,
    this.height
  );

  this.onload = function () {
    this.draw;

    //ctx.fillRect(this.xpoint, this.ypoint, this.Dwidth, this.Dheight);
  }.bind(this);

  this.draw = function () {
    ctx.font = " 90px Unquiet Spirits";
    ctx.strokeText("Vampire", 150, 90);
    ctx.strokeStyle = "purple";
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(400, 30, (this.health / 200) * 200, 25);


  }; //draw

  this.verticalStrike = function () {
    if (this.ypoint <= 170) {
      this.ypoint = 200 + this.ydir;
    }
    if (this.ypoint >= 500) {
      this.ypoint = 470 + this.ydir;
    }
  };

  this.horizontalStrike = function () {
    if (this.xpoint <= 0) {
      this.xpoint = 20 + this.xdir;
    }
    if (this.xpoint >= canvas.width) {
      this.xpoint = 1200 + this.xdir;
    }
  };
  this.idle = function () {
    //ctx.drawImage(this.img, this.xpoint, this.ypoint, 250,200);
    //this.image = this.img;

    this.sprite = this.idleSprite;
    this.sprite.update(this, frames);
   this.sprite.render(ctx);
    
  }
  this.punch = function () {
    this.sprite = this.punchingSprite;
    this.sprite.update(this, frames);
    this.sprite.render(ctx);
    this.soundpunch;
    //this.sprite.
  };

  this.moveRight = function () {
    board.moveForwad();
    this.sprite = this.walksprite;
    this.xpoint += this.xdir;// + this.speed; //duda de seguimiento
    this.sprite.update(vamp, frames);
    this.sprite.render(ctx);
  };

  this.moveLeft = function () {
    this.sprite = this.walkLeftSprite;
    this.sprite.update(vamp, frames);
    this.sprite.render(ctx);
    this.xpoint -= this.xdir;// + this.speed;
    
    
  };

  this.moveUp = function () {
    this.sprite = this.walksprite;
    this.sprite.update(this, frames);
    this.sprite.render(ctx);
    this.ypoint -= this.ydir;// + this.speed;
  };
  this.moveDown = function () {
    this.sprite = this.walksprite;
    this.sprite.update(this, frames);
    this.sprite.render(ctx);
    this.ypoint += this.ydir;// + this.speed;
  };


  //limite de movimiento hasta y175;

  this.kick = function () {
    this.sprite = this.kickSprite;
    this.sprite.update(vamp,frames);
    this.sprite.render(ctx);
    

  };

  this.power = function () {
    this.sprite = this.powerSprite;
    this.sprite.update(vamp,frames);
    this.sprite.render(ctx);
    
    
  };

  this.isTouching = function (enemie) {
   
    return (this.xpoint - 50 < enemie.x + enemie.width) && //si heroe es menor que enemigo + width
      (this.xpoint - 70 + this.Dwidth - 70 > enemie.x) && //si herore + su ancho es mayor que el alto del enemigo
      (this.ypoint + 100 < enemie.y + enemie.height) && //si el alto del heroe es menor que el alto del enemifo mas su alto
      (this.ypoint + 100 + this.Dheight + 150 > enemie.y);
    // (this.x < pipe.x + pipe.width) &&
    // (this.x + this.width > pipe.x) &&
    // (this.y < pipe.y + pipe.height) &&
    // (this.y + this.height > pipe.y);
  };
} //final Dimitri

function Fire(vamp) {
  this.speed = 200;
  this.xpoint =vamp.xpoint + vamp.Dwidth/1.8;
  this.ypoint = (vamp.ypoint + vamp.Dheight)/2;
  this.Dwidth = 350;
  this.Dheight = 350;
  this.sound = new Audio();
  this.sound.src = 'images/sonidos/pow.wav';
  this.sound2 = new Audio();
  this.sound2.src ='images/sonidos/risa.wav';
  //sprite
  this.fireSprite = new Sprite(
    "images/Tabla_Dimitri.png",
    [0, 0],
    [180, 140],
    10,
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    null,
    true,
    ctx,
    this.xpoint,
    this.ypoint,
    this.Dwidth,
    this.Dheight,
   
  );
    this.draw = function(){
      this.sprite = this.fireSprite;
      this.xpoint+=7;
      this.sprite.update(this, frames);
      this.sprite.render(ctx);
    }

  



}//termina fire



function Board() {
  //constructor con metodo para el lienzo
  this.x = 0;
  this.y = 0;
  this.width = canvas.width; //canvas width="1400" height="1000"
  this.height = 600; //restan 400
  this.score = 0;
  this.img = new Image();
  this.img.src = "images/scary-trees-at-night.png";
  this.img2 = new Image();
  this.img2.src = "images/rdDirt.jpg";
  this.sound = new Audio();
  this.sound.src = "images/sonidos/Tooth an Claw.MP3";
  this.sound2 = new Audio();
  this.sound2.src = "images/sonidos/begin.wav";
  this.sound3 = new Audio();
  this.sound3.src = "images/sonidos/dead.wav";

  this.img.onload = function () {
    //cuando cargue dibuja
    this.draw();
    this.drawFloor();
  }.bind(this);

  this.moveForwad = function () {
    //funcion de movimiento
    this.x--;
    if (this.x < -canvas.width) this.x = 0;
  };

  this.moveBackg = function () {
    //tengo duda ??
    this.x++;
    if (this.x < canvas.width) this.x = 0;
  };

  this.draw = function () {
    //funcion de dibujo fondo
    this.moveForwad();
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.img,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  };

  this.drawFloor = function () {
    //funcion de dibujo piso
    this.moveForwad();
    ctx.drawImage(this.img2, this.x, 601, this.width, 400); //aarea del piso width 1400 height 400 por que es lo que resta de espacio
    ctx.drawImage(this.img2, this.x + this.width, 601, this.width, 400);
    //   ctx.drawImage(this.img2, this.x + this.width, this.y, this.width, this.height);
  };

  this.drawScore = function () {
    //funcion de score
    this.score = Math.floor(frames / 60);
    ctx.font = "50px Unquiet Spirits";
    ctx.fillStyle = "purple";
    ctx.fillText(this.score, this.width / 2, this.y + 50);
  };
} //fin del board

//enemies
function Enemies(randomPosition, randomEnemie) {
  this.health = 100;
  this.x = canvas.width; // para que salga del lado derecho del canvas
  this.y = randomPosition; //y; //de los parametros aleatorios?
  this.width = 300;
  this.height = 400; //randomHeight;
  this.img1 = new Image();
  this.img1.src = "images/enemigos/skeleton.png";
  this.img2 = new Image();
  this.img2.src = "images/enemigos/mummy.png";
  this.img3 = new Image();
  this.img3.src = "images/enemigos/zombie.png";

  this.draw = function () {
    this.x -= 5;
    switch (randomEnemie) {
      case 1:
        ctx.drawImage(this.img1, this.x, this.y, this.width, this.height);
        //ctx.strokeRect(this.x, this.y, this.width, this.height);
        break;
      case 2:
        ctx.drawImage(this.img2, this.x, this.y, this.width, this.height);
        //ctx.strokeRect(this.x, this.y, this.width, this.height);
        break;
      case 3:
        ctx.drawImage(this.img3, this.x, this.y, this.width, this.height);
        //ctx.strokeRect(this.x, this.y, this.width, this.height);
        break;
    } //final de switch
  }; //final draw

  this.isTouching = function (fires) {
    return (this.x< fires.xpoint + fires.Dwidth) && //si heroe es menor que enemigo + width
      (this.x + this.width > fires.xpoint) && //si herore + su ancho es mayor que el alto del enemigo
      (this.y< fires.ypoint + fires.Dheight) && //si el alto del heroe es menor que el alto del enemifo mas su alto
      (this.y + this.height > fires.ypoint);
  }
} //final Enemies

