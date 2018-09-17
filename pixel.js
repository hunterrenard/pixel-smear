class Particle {
  constructor(x = 0, y = 0, color = (255,255,255,255), trajectoryX = 8, trajectoryY = 8, size = 8, length = 8, spread = 8, blend = true) {
    this.count = 0;
    this.x = x;
    this.y = y;
    this.previousX = x;
    this.previousY = y;
    this.trajectoryX = trajectoryX;
    this.trajectoryY = trajectoryY;
    this.size = size;
    this.color = color;
    this.blend = blend;
    this.spread = spread;
    this.length = length;
  }

  getX() {
    return(this.x);
  }

  getY() {
    return(this.y);
  }

  getPreviousX() {
    return(this.previousX);
  }

  getPreviousY() {
    return(this.previousY);
  }

  getTrajectoryX() {
    return(this.trajectoryX);
  }

  getTrajectoryY() {
    return(this.trajectoryY);
  }

  getColor() {
    return(this.color);
  }

  getSize() {
    return(this.size);
  }

  getLength() {
    return(this.length);
  }

  getCount() {
    return(this.count);
  }

  getSpread() {
    return(this.spread);
  }

  getBlend() {
    return(this.blend);
  }

  setX(x) {
    this.x = x;
  }

  setY(y) {
    this.y = y;
  }

  setPreviousX(previousX) {
    this.previousX = previousX;
  }

  setPreviousY(previousY) {
    this.previousY = previousY;
  }

  setTrajectoryX(trajectoryX) {
    this.trajectoryX = trajectoryX;
  }

  setTrajectoryY(trajectoryY) {
    this.trajectoryY = trajectoryY;
  }

  setColor(color) {
    this.color = color;
  }

  setSize(size) {
    this.size = size;
  }

  setLength(length) {
    this.length = length;
  }

  setCount(count) {
    this.count = count;
  }

  setSpread(spread) {
    this.spread = spread;
  }

  setBlend(blend) {
    this.blend = blend;
  }

  isFinished() {
    return(this.count > this.length);
  }

  update() {
    this.previousX = this.x;
    this.previousY = this.y;

    let neg = -1 * this.spread;

    this.x += random(neg, this.spread) + this.trajectoryX;
    this.y += random(neg, this.spread) + this.trajectoryY;

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
    strokeWeight(this.size);
    line(this.x, this.y, this.previousX, this.previousY);
  }
}
