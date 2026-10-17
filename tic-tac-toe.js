document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('#board div');
    const status = document.getElementById('status');
    const gameState = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';

    const combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    function checkwhoWon() {
        for (const combo of combinations) {
            const [a, b, c] = combo;
            if (gameState[a] !== '' && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }

    squares.forEach(function (square, index) {
        square.classList.add('square');

        square.addEventListener('click', function () {
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            gameState[index] = currentPlayer;

            const winner = checkwhoWon();
            if (winner) {
                status.textContent = 'Congratulations! ' + winner + ' is the Winner!';
                status.classList.add('you-won');
            }

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        });

        square.addEventListener('mouseover', function () {
            square.classList.add('hover');
        });

        square.addEventListener('mouseout', function () {
            square.classList.remove('hover');
        });
    });
});