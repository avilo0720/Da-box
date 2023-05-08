const player = document.querySelector('.player');
const box = document.querySelector('.box');
const goal = document.querySelector('.goal');
const squares = document.querySelectorAll('.square');

let playerPosition = 5;
let boxPosition = 7;
let goalPosition = 9;

squares[playerPosition].appendChild(player);
squares[boxPosition].appendChild(box);
squares[goalPosition].appendChild(goal);

document.addEventListener('keydown', moveBox);

function moveBox(event) {
  let key = event.keyCode;
  let tempBoxPosition = boxPosition;

  if (key === 37 && !squares[boxPosition - 1].classList.contains('box')) {
    boxPosition--;
  } else if (key === 38 && !squares[boxPosition - 4].classList.contains('box')) {
    boxPosition -= 4;
  } else if (key === 39 && !squares[boxPosition + 1].classList.contains('box')) {
    boxPosition++;
  } else if (key === 40 && !squares[boxPosition + 4].classList.contains('box')) {
    boxPosition += 4;
  }

  if (boxPosition !== tempBoxPosition) {
    squares[tempBoxPosition].removeChild(box);
    squares[boxPosition].appendChild(box);
  }
  
  if (boxPosition === goalPosition) {
    alert('You win!');
  }
}
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
