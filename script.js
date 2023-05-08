var player = document.getElementById("player");
var box = document.getElementById("box");
document.addEventListener("keydown", movePlayer);

function movePlayer(event) {
  var x = player.offsetLeft;
  var y = player.offsetTop;

  if (event.keyCode == 37) {
    // left arrow key
    x -= 50;
  } else if (event.keyCode == 38) {
    // up arrow key
    y -= 50;
  } else if (event.keyCode == 39) {
    // right arrow key
    x += 50;
  } else if (event.keyCode == 40) {
    // down arrow key
    y += 50;
  }

  // check if the player hits the box
  if (x == box.offsetLeft && y == box.offsetTop) {
    // move the box
    var boxX = box.offsetLeft;
    var boxY = box.offsetTop;
    if (event.keyCode == 37) {
      // left arrow key
      boxX -= 50;
    } else if (event.keyCode == 38) {
      // up arrow key
      boxY -= 50;
    } else if (event.keyCode == 39) {
      // right arrow key
      boxX += 50;
    } else if (event.keyCode == 40) {
      // down arrow key
      boxY += 50;
    }
    box.style.left = boxX + "px";
    box.style.top = boxY + "px";
  }

  // move the player
  player.style.left = x + "px";
  player.style.top = y + "px";
}
