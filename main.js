
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown() {
  const element = document.querySelector("#myDropdown");

    if (element.classList.contains("show"))
    {
      mPressed = true;
      life=true;
      boxopen = false;
    }
    else
    {
      mPressed = false;
      life=false;
      boxopen = true;
    }

    document.getElementById("myDropdown1").classList.remove("show");
    document.getElementById("infobtn").classList.remove("active");
    document.getElementById("myDropdown2").classList.remove("show");
    document.getElementById("paintbtn").classList.remove("active");

    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("dropbtn").classList.toggle("active");
}

function dropdown1() {

  const element = document.querySelector("#myDropdown1");

    if (element.classList.contains("show"))
    {
      mPressed = true;
      life=true;
      boxopen = false;
    }
    else
    {
      mPressed = false;
      life=false;
      boxopen = true;
    }

    document.getElementById("myDropdown").classList.remove("show");
    document.getElementById("dropbtn").classList.remove("active");
    document.getElementById("myDropdown2").classList.remove("show");
    document.getElementById("paintbtn").classList.remove("active");

    document.getElementById("myDropdown1").classList.toggle("show");
    document.getElementById("infobtn").classList.toggle("active");
}

function dropdown2() {

  const element = document.querySelector("#myDropdown2");

    if (element.classList.contains("show"))
    {
      mPressed = true;
      life=true;
      boxopen = false;
    }
    else
    {
      mPressed = false;
      life=false;
      boxopen = true;
    }

    document.getElementById("myDropdown").classList.remove("show");
    document.getElementById("dropbtn").classList.remove("active");
    document.getElementById("myDropdown1").classList.remove("show");
    document.getElementById("infobtn").classList.remove("active");

    document.getElementById("myDropdown2").classList.toggle("show");
    document.getElementById("paintbtn").classList.toggle("active");

}


function hardStop() {
  // Get the checkbox
  var checkBox = document.getElementById("hardbox");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    hard = true;
  } else {
    hard = false;
  }
}

function smearBrush() {
  // Get the checkbox
  var checkBox = document.getElementById("smearbox");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    smear = true;
  } else {
    smear = false;
  }
}

function blendColors() {
  // Get the checkbox
  var checkBox = document.getElementById("blendbox");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    blend = true;
  } else {
    blend = false;
  }
}

function trajectory() {
  // Get the checkbox
  var checkBox = document.getElementById("trajectorybox");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    traj = true;
  } else {
    traj = false;
  }
}

function drawL() {
  // Get the checkbox
  var checkBox = document.getElementById("drawbox");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    drawLine = true;
  } else {
    drawLine = false;
  }
}

function refresh() {
  particles=[];
  c1 = document.getElementById("color1").value.match(/.{1,2}/g);
  background(parseInt(c1[0], 16), parseInt(c1[1], 16), parseInt(c1[2], 16));
}
