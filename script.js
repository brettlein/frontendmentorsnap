//MOBILE MENU TOGGLE
function show() {
  var x = document.getElementById("myNavmobile");
  if (x.className === "navmobile") {
    x.className += "__active";
  } else {
    x.className = "navmobile";
  }
}

//MOBILE NAVBAR DROPDOWN TOGGLE'S

//FEATURES TOGGLE
function featdrop() {
  var y = document.getElementById("myNavdropfeat");
  if (y.className === "navmobile__listitemdrop") {
    y.className += "__active";
  } else {
    y.className = "navmobile__listitemdrop";
  }
}

function compdrop() {
  var y = document.getElementById("myNavdropcomp");
  if (y.className === "navmobile__listitemdropcomp") {
    y.className += "__active";
  } else {
    y.className = "navmobile__listitemdropcomp";
  }
}