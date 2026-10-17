document.addEventListener('DOMContentLoaded', function (){
    const squares = document.querySelectorAll('#board div');
    const gameState= ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';

    squares.forEach(function(square, index){
        square.classList.add('square');

        square.addEventListener('click', function () {
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            gameState[index] = currentPlayer;

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        });
    });
});