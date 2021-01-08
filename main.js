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
            gameLogic[row][col] = false;
            
            declareWinner(gameLogic, player);
            player = "Player2";
          } else if (player === "Player2") {
            gameLogic[row][col] = true;
            

            declareWinner(gameLogic, player);
            player = "Player1";
          }
        }
      }
    }
  }
};


const declareWinner = (arr, player) => {
  console.log(arr,' arreglo')
  let counterHorizontalF = 0;
  let counterHorizontalT = 0;
  let counterVerticalF = 0;
  let counterVerticalT = 0;
  let counterDiagonalLF = 0;
  // diagonal primera
  for(let i = 0; i <= arr.length - 1; i++){
    if(i === i){
      if(arr.length - 1 == i && arr[i][i] == false){
        console.log('gano ' + player, i)
      } else if (arr.length - 1 == i && arr[i][i] == true){
        console.log('gano ' + player, i)
      }
    }
  }
  

  // horizontales
  for(let i=0; i <= arr.length - 1; i++){
    for(let j=0; j <= arr.length -1; j++){
      if(arr[i][j] == false){
        counterHorizontalF += 1
        console.log(arr.length, counterHorizontalF, 'contador')
        counterHorizontalF === arr.length ? console.log('gano el jugador 1'): null
      } else {
        counterHorizontalF = 0;
      }
      if(arr[i][j] == true){
        counterHorizontalT += 1
        console.log(arr.length, counterHorizontalT, 'contador')
        counterHorizontalT === arr.length ? console.log('gano el jugador 2'): null
      } else {
        counterHorizontalT = 0;
      }
    }
  }

  // verticales
  for(let i=0; i <= arr.length - 1; i++){
    for(let j=0; j <= arr.length -1; j++){
      if(arr[j][i] == false){
        counterVerticalF += 1
        console.log(arr.length, counterVerticalF, 'contador')
        counterVerticalF === arr.length ? console.log('gano el jugador 1 ' ): null
      } else {
        counterVerticalF = 0;
      }
      if(arr[j][i] == true){
        counterVerticalT += 1
        console.log(arr.length, counterVerticalT, 'contador')
        counterVerticalT === arr.length ? console.log('gano el jugador 2 '): null
      } else {
        counterVerticalT = 0;
      }
    }
  }

  

    // for (let j = 0; j <= arr.length - 1; j++) {
    //     // verticales
    //   if (arr[i - 1] !== undefined && arr[i + 1] !== undefined) {
    //     if (arr[i + 1][j] == 0 && arr[i - 1][j] == 0) {
    //       console.log("gano el jugador 1");
    //     }
    //   }
    //   // horizontales
    //   if (arr[i][j - 1] !== undefined && arr[i][j + 1] !== undefined) {
    //     if (arr[i][j + 1] == 0 && arr[i][j - 1] == 0) {
    //       console.log("gano el jugador 1");
    //     }
    //   }
    //   // TODO diagonal
    // }
  

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
