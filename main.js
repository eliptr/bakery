var background = document.getElementById('background');
var btx = background.getContext('2d');

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
  var pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device

  background.width = 393 * pixelRatio;   /// resolution of canvas
  background.height = 786 * pixelRatio;

  background.style.width = 393 + 'px';   /// CSS size of canvas
  background.style.height = 786 + 'px';

  //drawImage


  //requestAnimationFrame
  requestAnimationFrame(draw, 10);
}
