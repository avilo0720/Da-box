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
