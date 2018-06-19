function Sprite(
  url,
  pos,
  size,
  speed,
  frames,
  dir,
  once,
  ctx,
  x,
  y,
  width,
  height
) {
  this.pos = pos;
  this.size = size;
  this.speed = typeof speed === "number" ? speed : 0;
  this.frames = frames;
  this._index = 0;
  this.url = url;
  this.dir = dir || "horizontal";
  this.once = once;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.img = new Image();
  this.img.src = url;

  this.draw = function(ctx, x, y, width, height) {
    ctx.drawImage(
      this.img,
      x,
      y,
      this.size[0],
      this.size[1],
      this.x,
      this.y,
      this.width,
      this.height
    );
  };
}

Sprite.prototype = {
  // update: function(dt) {
  //     this._index += this.speed*dt;
  // },

  update: function(vamp, fra) {
    if (fra % 5 == 0) {
      this._index++;
      this.y = vamp.ypoint;
      this.x = vamp.xpoint;
      this.width = vamp.Dwidth;
      this.height = vamp.Dheight;
    }
  },
  render: function(ctx) {
    var frame;

    if (this.speed > 0) {
      var max = this.frames.length;
      var idx = Math.floor(this._index);
      frame = this.frames[idx % max];

      if (this.once && idx >= max) {
        moves = 0;
        this._index = 0;
        this.done = true;
        return;
      }
    } else {
      //moves = 0;
      frame = 0;
    }

    var x = this.pos[0];
    var y = this.pos[1];

    //if(this.dir == 'vertical') {
    //  y += frame * this.size[1];
    ///  }
    //else {
    x += frame * this.size[0];
    //  }

    this.draw(ctx, x, y, this.width, this.height);
    // ctx.drawImage(this.image,
    //               x, y,
    //               this.size[0], this.size[1],
    //               0, 0,
    //               this.size[0], this.size[1]);
  }
};

window.Sprite = Sprite;
