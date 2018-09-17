let particles = [];
let bg;
let life;
let sliderSize;
let sliderLength;
let sliderSpread;
let sliderAlpha;
let sliderMouse;
let sliderFrame;
let hard;
let mPressed;
let c;
let c1;
let boxopen;
let smear;
let pc;
let blend;
let traj;
let tx;
let ty;
let t;
let p;
let x;
let drawLine;

function preload()
{
}

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  c = document.getElementById("color").value.match(/.{1,2}/g);
	c1 = document.getElementById("color1").value.match(/.{1,2}/g);
  background(parseInt(c1[0], 16), parseInt(c1[1], 16), parseInt(c1[2], 16));
  hard = false;
  mPressed = false;
  boxopen = false;
  smear = false;
  blend = true;
  traj = true;
  drawLine = false;

  sliderSize = document.getElementById("sizeRange");
  sliderLength = document.getElementById("lengthRange");
  sliderSpread = document.getElementById("spreadRange");
  sliderAlpha = document.getElementById("alphaRange");
  sliderMouse = document.getElementById("mouseRange");
  sliderFrame = document.getElementById("frameRange");
}

function draw() {
  frameRate(int(sliderFrame.value));
  if(traj) {
    t = 201 - sliderMouse.value;
    tx = (pmouseX - mouseX) / t;
    ty = (pmouseY - mouseY) / t;
  }
  else {
    tx = 0;
    ty = 0;
  }

  if((mouseX >= 1 && mouseX <= width - 1) && (mouseY >= 1 && mouseY <= height - 1) && life) {
    c = document.getElementById("color").value.match(/.{1,2}/g);
    x = int(sliderAlpha.value);
    if(smear)
      pc = color(get(mouseX, mouseY),x)
    else
      pc = color(parseInt(c[0], 16), parseInt(c[1], 16), parseInt(c[2], 16), x);
    p = new Particle(mouseX, mouseY, pc, tx, ty, sliderSize.value, sliderLength.value, sliderSpread.value, blend);

    particles.push(p);
    if(drawLine)  {
      stroke(color(parseInt(c[0], 16), parseInt(c[1], 16), parseInt(c[2], 16), x), int(sliderAlpha.value));
      strokeWeight(sliderSize.value);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    }

    for(let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].show();


      if(particles[i].isFinished())
      {
        particles.splice(i,1);
      }
      else if(hard && mPressed == false) {
        particles.splice(i,1);
      }
    }
}

function mousePressed() {
  if(!boxopen)
  {
    mPressed = true;
    life = true;
  }
}

function mouseReleased() {
  mPressed = false;
  life=false;
}
