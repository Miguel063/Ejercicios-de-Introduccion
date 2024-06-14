//crear el tablero y establecer variables iniciales
const boardElement = document.getElementById("board")
const statusElement = document.getElementById("status")
let board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]
let currentPlayer = "x"
let gameOver =false

//funcion para crear las celdas del tablero
function createBoard () {
    boardElement.innerHTML = ""
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
             const cell = document.createElement("div")
             cell.className = "cell"
             cell.id = `cell-${i}-${j}`
             cell.addEventListener ("click", () => makeMove(i, j))
             boardElement.appendChild(cell)
       }
    }
}
//funcion para manejar los movimientos del jugador
function makeMove(i, j) {
    if(board[i] [j] === " " && !gameOver) {
        board[i] [j] = currentPlayer
        document.getElementById (`cell-${i}-${j}`).textContent = currentPlayer
        if (checkWin(currentPlayer)) {
            statusElement.textContent = `¡El jugador ${currentPlayer} ha ganado!`
             gameOver = true
        }else if (isBoardFull()) {
            statusElement.textContent = "¡Es un empate!"
        }else {
            currentPlayer = currentPlayer === "x" ? "O" : "x"
            statusElement.textContent = `Turno del jugador ${currentPlayer}`
        }

    } 
}
// funcion para verificar si hay un ganador
function checkWin(player){
    //verifica filas, columnas  diagonales
    for (let i = 0; i < 3; i++) {
        if (board [i] [0] === player && board[i][1] === player && board [i][2] === player) 
             return true;
        if (board [0] [i] === player && board[1][i] === player && board [2][i] === player) 
             return true;}
        if (board [0] [0] === player && board[1][1] === player && board [2][2] === player) 
             return true;
        if (board [0] [2] === player && board[1][1] === player && board [2][0] === player) 
             return true;
            return false;
}
//funcion para verificar si el tablero esta lleno 
function isBoardFull(){
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++){
            if (board [i][j] === " ")
                return false
        }
    }
    return true
}
//inicializar el juego
createBoard ()
statusElement.textContent = `Turno del jugador ${currentPlayer}`
    
