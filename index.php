<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Pixel Smear</title>

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="main.css">

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" charset="utf-8"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.min.js" charset="utf-8"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/addons/p5.dom.min.js" charset="utf-8"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/addons/p5.sound.min.js" charset="utf-8"></script>

  <script src="jscolor.js"></script>

  <script src="pixel.js" charset="utf-8"></script>
  <script src="main.js" charset="utf-8"></script>
  <script src="sketch.js" charset="utf-8"></script>


</head>
<body>
<header onclick="life=false;">
  <div class="menu">
    <a onclick="dropdown1();" class="fa fa-info info btn" id="infobtn"></a>
    <a onclick="dropdown();" class="fa fa-sliders dropbtn btn" id="dropbtn"></a>
    <a onclick="dropdown2();" class="fa fa-paint-brush paint btn" id="paintbtn"></a>
    <a class="fa fa-retweet file" onclick="refresh();"></a>
    <a onclick="saveCanvas(canvas, 'pixel-smear', 'jpg');" class="fa fa-save save"></a>
  </div>

  <div id="myDropdown2" class="dd dropdown-content dc3">
    <p>Smear:</p>
    <label class="switch">
      <input type="checkbox" id="smearbox" onclick="smearBrush();">
      <span class="slider"></span>
    </label>
    <div class="slidecontainer">
      <p>Brush:</p>
      <input class="jscolor" id="color" value="ffffff">
    </div>
    <div class="slidecontainer">
      <p>Background:</p>
      <input class="jscolor" id="color1" value="000000">
    </div>
  </div>

  <div id="myDropdown1" class="dd dropdown-content dc2">
    <p>Created by <a target="_blank" href="http://hunterrenard.com/">Hunter Renard</a>.</p>
    <p>Made over a weekend using P5.js.</p>
    <p>This web app is still in pre-alpha. Any tweaks will be based on user interest as well as how much free time I have.</p>
    <p>Feel free to submit a pull request or fork this project on <a target="blank" href="https://github.com/hunterrenard/pixel-smear">GitHub</a> yourself!</p>
    <p>&copy; 2018 Hunter Renard</p>
  </div>

  <div id="myDropdown" class="dd dropdown-content dc1">
    <div class="slidecontainer">
      <p>Pixel Size:</p>
      <input type="range" min="0" max="50" value="8" class="slider" id="sizeRange">
    </div>
    <div class="slidecontainer">
      <p>Pixel Duration:</p>
      <input type="range" min="1" max="1000" value="50" class="slider" id="lengthRange">
    </div>
    <div class="slidecontainer">
      <p>Pixel Spread:</p>
      <input type="range" min="1" max="25" value="5" class="slider" id="spreadRange">
    </div>
    <div class="slidecontainer">
      <p>Pixel Alpha:</p>
      <input type="range" min="1" max="255" value="255" class="slider" id="alphaRange">
    </div>
    <div class="slidecontainer">
      <p>Trajectory Weight:</p>
      <input type="range" min="1" max="200" value="150" class="slider" id="mouseRange">
    </div>
    <p>Trajectory:</p>
    <label class="switch">
      <input type="checkbox" id="trajectorybox" onclick="trajectory();" checked>
      <span class="slider"></span>
    </label>
    <p>Hard Stop:</p>
    <label class="switch">
      <input type="checkbox" id="hardbox" onclick="hardStop();">
      <span class="slider"></span>
    </label>
    <p>Blend Colors:</p>
    <label class="switch">
      <input type="checkbox" id="hardbox" onclick="blendColors();" checked>
      <span class="slider"></span>
    </label>
  </div>
</header>
</body>
</html>
