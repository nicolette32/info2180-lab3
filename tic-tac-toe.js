//waits until the page is finieshed loading before any code can be ran
document.addEventListener('DOMContentLoaded', function () {

    //all the elements the page needs
    const squares = document.querySelectorAll('#board div');
    const status = document.getElementById('status');
    const ButtonfornewGame = document.querySelector('.btn');
    const defaultMessage = status.textContent;

    //the state of the game
    let gameState = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';

    //these are the different ways a player can win
    const combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    //checks all the winning combinations
    function checkwhoWon() {
        for (const combo of combinations) {
            const [a, b, c] = combo;
            if (gameState[a] !== '' && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }

    //resets the game to its starting state
    function startOveryourGame() {
        gameState = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';

        //clear the squares
        squares.forEach(function (square) {
            square.textContent = '';
            square.classList.remove('X', 'O', 'hover');
        });

        status.textContent = defaultMessage;
        status.classList.remove('you-won');
    }
    
    //index is the square's position
    squares.forEach(function (square, index) {
        square.classList.add('square');

        //this exits the handler so that the player can't cheat
        square.addEventListener('click', function () {
            if (gameState[index] !==''){
                return;
            }

            //current player's mark 
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            gameState[index] = currentPlayer;

            //check who won
            const winner = checkwhoWon();
            if (winner) {
                status.textContent = 'Congratulations! ' + winner + ' is the Winner!';
                status.classList.add('you-won');
            }

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        });

        //highlight the square while the mouse is over it
        square.addEventListener('mouseover', function () {
            square.classList.add('hover');
        });

        //remove the highlight when the mouse leaves
        square.addEventListener('mouseout', function () {
            square.classList.remove('hover');
        });
    });

    //resets function
    ButtonfornewGame.addEventListener('click', startOveryourGame);
});