const board = Array(9).fill(null);
let currentPlayer = 'X';
let winner = null;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const blocks = document.querySelectorAll('.block');
const resultMessage = document.getElementById('result-message');

blocks.forEach((block, index) => {
    block.addEventListener('click', () => {
        if (winner || board[index]) return;

        board[index] = currentPlayer;
        block.textContent = currentPlayer;

        if (checkWin()) {
            winner = currentPlayer;
            resultMessage.textContent = `Oyuncu ${winner} qalib gəlib!`;
        } else if (board.every(cell => cell !== null)) {
            resultMessage.textContent = "Berabərədir!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

function checkWin() {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}
