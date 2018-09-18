
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown() {
  const element = document.querySelector("#myDropdown");

    if (element.classList.contains("show"))
    {
      canDraw=true;
      boxopen = false;
    }
    else
    {
      canDraw=false;
      boxopen = true;
    }

    document.getElementById("myDropdown1").classList.remove("show");
    document.getElementById("infobtn").classList.remove("active");
    document.getElementById("myDropdown2").classList.remove("show");
    document.getElementById("paintbtn").classList.remove("active");
    document.getElementById("myDropdownRight").classList.remove("show");
    document.getElementById("roombtn").classList.remove("active");

    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("dropbtn").classList.toggle("active");
}

function dropdown1() {

  const element = document.querySelector("#myDropdown1");

    if (element.classList.contains("show"))
    {
      canDraw=true;
      boxopen = false;
    }
    else
    {
      canDraw=false;
      boxopen = true;
    }

    document.getElementById("myDropdown").classList.remove("show");
    document.getElementById("dropbtn").classList.remove("active");
    document.getElementById("myDropdown2").classList.remove("show");
    document.getElementById("paintbtn").classList.remove("active");
    document.getElementById("myDropdownRight").classList.remove("show");
    document.getElementById("roombtn").classList.remove("active");

    document.getElementById("myDropdown1").classList.toggle("show");
    document.getElementById("infobtn").classList.toggle("active");
}

function dropdown2() {

  const element = document.querySelector("#myDropdown2");

    if (element.classList.contains("show"))
    {
      canDraw=true;
      boxopen = false;
    }
    else
    {
      canDraw=false;
      boxopen = true;
    }

    document.getElementById("myDropdown").classList.remove("show");
    document.getElementById("dropbtn").classList.remove("active");
    document.getElementById("myDropdown1").classList.remove("show");
    document.getElementById("infobtn").classList.remove("active");
    document.getElementById("myDropdownRight").classList.remove("show");
    document.getElementById("roombtn").classList.remove("active");

    document.getElementById("myDropdown2").classList.toggle("show");
    document.getElementById("paintbtn").classList.toggle("active");

}

function dropdownRight() {

  const element = document.querySelector("#myDropdownRight");

    if (element.classList.contains("show"))
    {
      canDraw=true;
      boxopen = false;
    }
    else
    {
      canDraw=false;
      boxopen = true;
    }

    document.getElementById("myDropdown").classList.remove("show");
    document.getElementById("dropbtn").classList.remove("active");
    document.getElementById("myDropdown1").classList.remove("show");
    document.getElementById("infobtn").classList.remove("active");
    document.getElementById("myDropdown2").classList.remove("show");
    document.getElementById("paintbtn").classList.remove("active");

    document.getElementById("myDropdownRight").classList.toggle("show");
    document.getElementById("roombtn").classList.toggle("active");

}

function hardStop() {
  // Get the checkbox
  var checkBox = document.getElementById("hardbox");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    stopOnClick = true;
  } else {
    stopOnClick = false;
  }
}

function smearBrush() {
  // Get the checkbox
  var checkBox = document.getElementById("smearbox");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    document.getElementById("col").classList.add("disabled");
    smear = true;
  } else {
    document.getElementById("col").classList.remove("disabled");
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
    trajectoryBool = true;
    document.getElementById("traj").classList.remove("disabled");
    document.getElementById("rtraj").classList.remove("disabled");
    document.getElementById("mouseRange").disabled = false;
  } else {
    trajectoryBool = false;
    document.getElementById("traj").classList.add("disabled");
    document.getElementById("rtraj").classList.add("disabled");
    document.getElementById("mouseRange").disabled = true;
  }
}

function reverseTrajectory() {
  // Get the checkbox
  var checkBox = document.getElementById("reverseTrajectory");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    trajectoryReverse = true;
  } else {
    trajectoryReverse = false;

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
  backgroundColor = document.getElementById("color1").value.match(/.{1,2}/g);
  background(parseInt(backgroundColor[0], 16), parseInt(backgroundColor[1], 16), parseInt(backgroundColor[2], 16));
}
