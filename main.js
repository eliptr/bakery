var canvasMain = document.getElementById('canvas');
var ctx = canvasMain.getContext('2d');


function onload() {
  document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
  document.addEventListener("pause", onPause, false);
  document.addEventListener("resume", onResume, false);
  test()
}

function onPause() {
  // onpaus things...
}

function onResume() {
    test()
}

// load images



// onlaod runs one time and in the end runs draw with requestAnimationFrame
function test() {
  // positions var

  draw()
}

// runs after test is finished and has an requestAnimationFrame
function draw() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device

  canvasMain = document.getElementById("canvas");

  canvasMain.width = windowWidth * pixelRatio;   /// resolution of canvas
  canvasMain.height = windowHeight * pixelRatio;

  canvasMain.style.width = windowWidth + 'px';   /// CSS size of canvas
  canvasMain.style.height = windowHeight + 'px';

  //drawImage
  ctx.fillText(window.innerWidth, 10, 150);
  ctx.fillText(window.innerHeight, 10, 200);


  //requestAnimationFrame
  requestAnimationFrame(draw, 10);
}
