function preload()
{
  // Any preloading goes here
}

function setup() {
  // Set Boolean Variables
  stopOnClick = false;
  boxopen = false;
  smear = false;
  blend = true;
  trajectoryBool = true;
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
  // sets frame rate
  frameRate(int(sliderFrame.value));


    // if trajectory is turned on
    if(trajectoryBool) {
      trajectoryWeight = 201 - sliderMouse.value;
      trajectoryX = (pmouseX - mouseX) / trajectoryWeight;
      trajectoryY = (pmouseY - mouseY) / trajectoryWeight;
    } else {
      trajectoryX = 0;
      trajectoryY = 0;
    }

    if((mouseX > 0 && mouseX < width) && (mouseY > 0 && mouseY < height) && canDraw) {
    brushColor = document.getElementById("color").value.match(/.{1,2}/g);

    alphaValue = int(sliderAlpha.value);

    if(smear) {
      pc = color(get(mouseX, mouseY),alphaValue)
    } else {
      pc = color(parseInt(brushColor[0], 16), parseInt(brushColor[1], 16), parseInt(brushColor[2], 16), alphaValue);
    }

    p = new Particle(mouseX, mouseY, pc, width, height, trajectoryX, trajectoryY, sliderSize.value, sliderLength.value, sliderSpread.value, 0, blend);

    particles.push(p);
    if(drawLine)  {
      stroke(color(parseInt(brushColor[0], 16), parseInt(brushColor[1], 16), parseInt(brushColor[2], 16), alphaValue), int(sliderAlpha.value));
      strokeWeight(sliderSize.value);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }

  for(let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();

    if(particles[i].isFinished(particles[i].getCount(), particles[i].getLength()))
    {
      particles.splice(i, 1);
    }
    else if(stopOnClick && canDraw == false) {
      particles.splice(i, 1);
    }
  }
}

function mousePressed() {
  if(!boxopen)
  {
    canDraw = true;
  }
}

function mouseReleased() {
  if(!boxopen)
  {
    canDraw = false;
  }
}
