function preload()
{
  // Any preloading goes here
}

function setup() {
  // Set Boolean Variables
  hard = false;
  boxopen = false;
  smear = false;
  blend = true;
  traj = true;
  drawLine = false;

  // Connect color selectors
  brushColor = document.getElementById("color").value.match(/.{1,2}/g);
	backgroundColor = document.getElementById("color1").value.match(/.{1,2}/g);

  // Connect sliders
  sliderSize = document.getElementById("sizeRange");
  sliderLength = document.getElementById("lengthRange");
  sliderSpread = document.getElementById("spreadRange");
  sliderAlpha = document.getElementById("alphaRange");
  sliderMouse = document.getElementById("mouseRange");
  sliderFrame = document.getElementById("frameRange");

  // Initializing canvas
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  // Setting background
  background(parseInt(backgroundColor[0], 16), parseInt(backgroundColor[1], 16), parseInt(backgroundColor[2], 16));
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
    brushColor = document.getElementById("color").value.match(/.{1,2}/g);
    x = int(sliderAlpha.value);
    if(smear)
      pc = color(get(mouseX, mouseY),x)
    else
      pc = color(parseInt(brushColor[0], 16), parseInt(brushColor[1], 16), parseInt(brushColor[2], 16), x);
    p = new Particle(mouseX, mouseY, pc, width, height, tx, ty, sliderSize.value, sliderLength.value, sliderSpread.value, blend);

    particles.push(p);
    if(drawLine)  {
      stroke(color(parseInt(brushColor[0], 16), parseInt(brushColor[1], 16), parseInt(brushColor[2], 16), x), int(sliderAlpha.value));
      strokeWeight(sliderSize.value);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    }

    for(let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].show();


      if(particles[i].isFinished(particles[i].getCount(), particles[i].getLength()))
      {
        particles.splice(i,1);
      }
      else if(hard && life == false) {
        particles.splice(i,1);
      }
    }
}

function mousePressed() {
  if(!boxopen)
  {
    life = true;
  }
}

function mouseReleased() {
  life=false;
}
