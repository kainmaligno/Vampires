//declaraciones

//canvas variables.
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var intervalo;
var frames = 0;
var board = new Board();
//heroes

var vamp = new Vamp();
var enemie = new Enemies();
var fires = new Fire(vamp);
var moves = 0;

var enemiesArray = [];
var fireArray = [];
//animation
var requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();
//sprites

//seleccion de DOM
var contenedor = document.querySelector("#contenedor");
var ampliarCanvas = document.querySelector("#canvas");
var btnStart = document.querySelector("#start-button");
var btnReducir = document.querySelector("#btnReturn");
var output = document.querySelector("#output");

//GAMEPAD request animation frame
var rAF =
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.requestAnimationFrame;
var rAFStop =
  window.mozCancelRequestAnimationFrame ||
  window.webkitCancelRequestAnimationFrame ||
  window.cancelRequestAnimationFrame;
//gamepads
var gamepad = {};
var gamepads = navigator.getGamepads();
var controller = {};
var buttonsPressed = [];
