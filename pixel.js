class Particle {
  constructor(x, y, color, size, length, spread, travelx, travely, blend) {
    this.count = 0;

    this.x = x;
    this.y = y;

    this.px = x;
    this.py = y;

    this.tx = travelx
    this.ty = travely;

    this.r = size;
    this.color = color;
    this.blend = blend;

    this.spread = spread;
    this.length = length;
  }

  update() {
    this.px = this.x;
    this.py = this.y;

    let neg = -1 * this.spread;

    this.x += random(neg, this.spread) + this.tx;
    this.y += random(neg, this.spread) + this.ty;

    if(blend){
      if((this.x >= 1 && this.x <= width - 1) && (this.y >= 1 && this.y <= height - 1))
      {
        let weight = this.length - this.count;
        this.color = color(
        (red(this.color) * weight + red(get(this.x,this.y)) * this.count) / this.length,
        (green(this.color) * weight + green(get(this.x,this.y)) * this.count) / this.length,
        (blue(this.color) * weight + blue(get(this.x,this.y)) * this.count) / this.length, alpha(this.color)
      );
      }
    }
    this.count++;
  }

  show() {
    stroke(this.color);
    strokeWeight(this.r);
    line(this.x, this.y, this.px, this.py);
  }

  getX() {
    return(this.x);
  }

  getY() {
    return(this.y);
  }

  getColor() {
    return(this.color);
  }

  finished() {
    return(this.count > this.length);
  }
}
