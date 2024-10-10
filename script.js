window.onload = function () {
  var img = document.getElementById("popcat1");
  var count = document.getElementById("score");
  var score = 0;
  var audio = new Audio("assets/pop.mp3");

  img.addEventListener("mousedown", function () {
    img.src = "assets/popcat2.png";
    audio.play();
  });

  img.addEventListener("mouseup", function () {
    img.src = "assets/popcat1.png";
    audio.play();
  });
};
