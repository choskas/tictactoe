const mainFunction = () => {
  console.log("linked");
};

const onSelectSize = (e) => {};

let gameLogic = [];
let clickedSquare;
let player = "Player1";

const getBoard = () => {
  const selectedValue = document.getElementById("selected-value").value;
  const mainBoard = document.getElementById("main-board");
  for (let i = 0; i < parseInt(selectedValue); i++) {
    const lineDiv = document.createElement("div");
    lineDiv.className = "line";
    lineDiv.id = "line";
    lineDiv.style.display = "flex";
    lineDiv.style.flexDirection = "row";
    lineDiv.style.justifyContent = "space-between";
    // lineDiv.style.height = '-webkit-fill-available'
    if (selectedValue.length === 1) {
      lineDiv.style.height = `${selectedValue}0%`;
      mainBoard.appendChild(lineDiv);
    } else {
      lineDiv.style.height = `${selectedValue}%`;
      mainBoard.appendChild(lineDiv);
    }
    gameLogic[i] = [];
    for (let j = 0; j <= parseInt(selectedValue) - 1; j++) {
      gameLogic[i][j] = null;
    }
  }
  const lines = document.getElementsByClassName("line");
  for (let j = 0; j <= lines.length - 1; j++) {
    for (let i = 1; i <= lines.length; i++) {
      const square = document.createElement("div");
      square.id = `square-${j}-${i}`;
      square.className = "square";
      square.style.height = "-webkit-fill-available";
      square.style.width = "-webkit-fill-available";
      square.style.minWidth = "10%";
      square.style.border = "1px solid black";
      square.onclick = (e) => {
        onGameLogic(e);
      };
      // console.log(parseInt(line))
      lines[j].appendChild(square);
    }

    // for(let i = 1; i < parseInt(selectedValue)*parseFloat(selectedValue); i++ ){
    //     const square = document.createElement('div')
    //     square.id = 'square'
    //     square.className='square'
    //     mainBoard.appendChild(square)

    // }
    // const numberOfSquares = document.getElementsByClassName('square').length + 1;
    // styleOfSquares(numberOfSquares)
  }
};

const onGameLogic = (e) => {
  console.log(e.target.id);
  const splitted = e.target.id.split("-");
  const row = parseInt(splitted[1]);
  const col = parseInt(splitted[2] - 1);
  for (let i = 0; i <= gameLogic.length; i++) {
    for (let j = 0; j <= gameLogic.length; j++) {
      if (i === row && j === col) {
        if (gameLogic[row][col] !== null) {
          return;
        } else {
          if (player === "Player1") {
            gameLogic[row][col] = 0;
            player = "Player2";
            declareWinner(gameLogic, row, col);
          } else if (player === "Player2") {
            gameLogic[row][col] = 1;
            player = "Player1";

            declareWinner(gameLogic, row, col);
          }
        }
      }
    }
  }
};

const declareWinner = (arr, row, col) => {
console.log(gameLogic)
  

  for (let i = 0; i <= arr.length -1; i++) {
    for (let j = 0; j <= arr.length - 1; j++) {
        // verticales
      if (arr[i - 1] !== undefined && arr[i + 1] !== undefined) {
        if (arr[i + 1][j] == 0 && arr[i - 1][j] == 0) {
          console.log("gano el jugador 1");
        }
      }
      // horizontales
      if (arr[i][j - 1] !== undefined && arr[i][j + 1] !== undefined) {
        if (arr[i][j + 1] == 0 && arr[i][j - 1] == 0) {
          console.log("gano el jugador 1");
        }
      }
      // TODO diagonal
    }
  }

};

const styleOfSquares = (squaresNumber) => {
  // const selectedValue  = document.getElementById('selected-value').value;
  // const squares = document.getElementsByClassName('square');
  // for(let i = 0; i < parseInt(selectedValue)*parseFloat(selectedValue); i++ ){
  //     if()
  //     if(selectedValue.length <= 1){
  //         squares[i].style.width = `${selectedValue}0%`
  //         squares[i].style.height = `${selectedValue}0%`
  //         // squares.map((item) => {
  //         //     console.log('0')
  //         //     item.style.width = `${selectedValue}%`
  //         //     item.style.height = `${selectedValue}%`
  //         // })
  //     } else if(selectedValue.length >= 2){
  //         squares[i].style.width = `${selectedValue}%`
  //         squares[i].style.height = `${selectedValue}%`
  //     }
  // }
};
