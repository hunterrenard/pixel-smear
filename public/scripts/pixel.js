class Particle {

  // initializes class
  constructor(x = 0, y = 0, color = (255,255,255,255), width = 0, height = 0, trajectoryX = 8, trajectoryY = 8, size = 8, length = 8, spread = 8, count = 0, blend = true) {
    this.x = x;
    this.y = y;
    this.previousX = x;
    this.previousY = y;
    this.color = color;
    this.red = this.getRed();
    this.green = this.getGreen();
    this.blue = this.getBlue();
    this.alpha = this.getAlpha();
    this.width = width;
    this.height = height;
    this.trajectoryX = trajectoryX;
    this.trajectoryY = trajectoryY;
    this.size = size;
    this.length = length;
    this.weight = length;
    this.spread = spread;
    this.count = count;
    this.blend = blend;
  }

  // sets this.x
  setX(x) {
    this.x = x;
  }

  // sets this.y
  setY(y) {
    this.y = y;
  }

  // sets this.width
  setWidth(width) {
    this.width = width;
  }

  // sets this.height
  setHeight(height) {
    this.height = height;
  }

  // sets this.previousX
  setPreviousX(previousX) {
    this.previousX = previousX;
  }

  // sets this.previousY
  setPreviousY(previousY) {
    this.previousY = previousY;
  }

  // sets this.trajectoryX
  setTrajectoryX(trajectoryX) {
    this.trajectoryX = trajectoryX;
  }

  // sets this.trajectoryY
  setTrajectoryY(trajectoryY) {
    this.trajectoryY = trajectoryY;
  }

  // sets this.color
  setColor(color) {
    this.color = color;
  }

  // sets this.size
  setSize(size) {
    this.size = size;
  }

  // sets this.length
  setLength(length) {
    this.length = length;
  }

  // sets this.count
  setCount(count) {
    this.count = count;
  }

  // sets this.spread
  setSpread(spread) {
    this.spread = spread;
  }

  // sets this.blend
  setBlend(blend) {
    this.blend = blend;
  }

  // sets this.weight
  setWeight(weight) {
    this.weight = weight;
  }

  // returns this.x
  getX() {
    return(this.x);
  }

  // returns this.y
  getY() {
    return(this.y);
  }

  // returns this.width
  getWidth() {
    return(this.width);
  }

  // returns this.height
  getHeight() {
    return(this.height);
  }

  // returns this.previousX
  getPreviousX() {
    return(this.previousX);
  }

  // returns this.previousY
  getPreviousY() {
    return(this.previousY);
  }

  // returns this.trajectoryX
  getTrajectoryX() {
    return(this.trajectoryX);
  }

  // returns this.trajectoryY
  getTrajectoryY() {
    return(this.trajectoryY);
  }

  // returns this.color
  getColor() {
    return(this.color);
  }

  // returns this.size
  getSize() {
    return(this.size);
  }

  // returns this.length
  getLength() {
    return(this.length);
  }

  // returns this.count
  getCount() {
    return(this.count);
  }

  // returns this.spread
  getSpread() {
    return(this.spread);
  }

  // returns this.blend
  getBlend() {
    return(this.blend);
  }

  // returns this.color's red value
  getRed() {
    return(red(this.color));
  }

  // returns this.color's green value
  getGreen() {
    return(green(this.color));
  }

  // returns this.color's blue value
  getBlue() {
    return(blue(this.color));
  }

  // returns this.color's alpha value
  getAlpha() {
    return(alpha(this.color));
  }

  // returns the color at this pixel's current position
  getColorAt(x = 0, y = 0) {
    return(get(x,y));
  }

  // returns the red value of the color at this pixel's current position
  getRedAt(x = 0, y = 0) {
    return(red(get(x,y)));
  }

  // returns the green value of the color at this pixel's current position
  getGreenAt(x = 0, y = 0) {
    return(green(get(x,y)));
  }

  // returns the blue value of the color at this pixel's current position
  getBlueAt(x = 0, y = 0) {
    return(blue(get(x,y)));
  }

  // returns the alpha value of the color at this pixel's current position
  getAlphaAt(x = 0, y = 0) {
    return(alpha(get(x,y)));
  }

  // returns a random number from negative this.spread to this.spread
  getRandomSpread() {
    return(random(-this.spread, this.spread));
  }

  // returns this.weight
  getWeight() {
    return(this.weight);
  }

  // calculates this.eright from this.length and this.count
  calculateWeight() {
    return(this.length - this.count);
  }

  // returns whether this.x and this.y are within width and height boundaries
  inBounds(w = 0, h = 0, x = 0, y = 0) {
    return((x > 0 && x < w) && (y > 0 && y < h));
  }

  // returns whether this.x is within width boundaries
  xInBounds(w = 0, x = 0) {
    return(x > 0 && x < w);
  }

  // returns whether this.y is within height boundaries
  yInBounds(h = 0, y = 0) {
    return(y > 0 && y < h);
  }

  // returns whether this.count is greater than this.length
  isFinished(count, length) {
    return(count > length);
  }

  // blends pixel colors of current color and the at the pixel's position
  blendColors(x, y) {
    this.setWeight(this.calculateWeight());

    this.setColor(color(
      (this.getRed() * this.getWeight() + this.getRedAt(x, y) * this.getCount()) / this.getLength(),
      (this.getGreen() * this.getWeight() + this.getGreenAt(x, y) * this.getCount()) / this.getLength(),
      (this.getBlue() * this.getWeight() + this.getBlueAt(x, y) * this.getCount()) / this.getLength(),
      this.getAlpha()
    ));
  }

  // updates class values
  update() {
    this.setPreviousX(this.getX());
    this.setPreviousY(this.getY());

    this.setX(this.x + this.getRandomSpread() + this.trajectoryX);
    this.setY(this.y + this.getRandomSpread() + this.trajectoryY);

    if(this.getBlend()) {
      // changes x and y values when in bounds
      if(this.inBounds(this.getWidth(), this.getHeight(), this.getX(), this.getY())) {
      // blends color of pixel and spot pixel is at
        this.blendColors(this.x,this.y);
      }
    }

    this.setCount(this.count + 1);
  }

  // displays pixel
  show() {
    stroke(this.getColor());
    strokeWeight(this.getSize());
    line(this.getX(), this.getY(), this.getPreviousX(), this.getPreviousY());
  }
}
