var noofbuttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noofbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var x = this.innerHTML;

    buttonanimation(x);
    makesound(x);
  });
}

document.addEventListener("keypress", function() {

  buttonanimation(event.key);
  makesound(event.key);
})

function makesound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/tom-1.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    default:

  }
}

function buttonanimation(currentkey) {
  var activebutton = document.querySelector("." + currentkey);
  activebutton.classList.add("pressed");
  setTimeout(function() {
    activebutton.classList.remove("pressed");
  }, 100);
}
