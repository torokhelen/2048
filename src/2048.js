document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid');
    const scoreDisplay = document.getElementById('score');
    const resultDisplay = document.getElementById('result');
    const width = 4;
    let squares = [];

    function createBoard() {
        for (let i=0; i < width*width; i++) {
                const square = document.createElement('div');
                square.innerHTML = 0;
                gridDisplay.appendChild(square);
                squares.push(square);
        }

        generateNumber();
        generateNumber();
    }

    createBoard();

    // generate a number randomly
    function generateNumber() {
        let randomNumber = Math.floor(Math.random() * squares.length);
        if (squares[randomNumber].innerHTML == 0) {
            squares[randomNumber].innerHTML = 2;
        } else generateNumber();
    }

    // swipe right
    function moveRight() {
        for (let i = 0; i < 16; i++) {
            if (i % 4 == 0) {
                let totalOne = squares[i].innerHTML;
                let totalTwo = squares[i+1].innerHTML;
                let totalThree = squares[i+2].innerHTML;
                let totalFour = squares[i+3].innerHTML;
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

                //console.log(row);

                let filteredRow = row.filter(num => num);
                //console.log(filteredRow);
                let missing = 4 - filteredRow.length;
                let zeros = Array(missing).fill(0);
                //console.log(zeros);
                let newRow = zeros.concat(filteredRow);
                //console.log(newRow);

                squares[i].innerHTML = newRow[0];
                squares[i+1].innerHTML = newRow[1];
                squares[i+2].innerHTML = newRow[2];
                squares[i+3].innerHTML = newRow[3];
            }
        }
    }

        // swipe left
        function moveLeft() {
            for (let i = 0; i < 16; i++) {
                if (i % 4 == 0) {
                    let totalOne = squares[i].innerHTML;
                    let totalTwo = squares[i+1].innerHTML;
                    let totalThree = squares[i+2].innerHTML;
                    let totalFour = squares[i+3].innerHTML;
                    let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
    
                    //console.log(row);
    
                    let filteredRow = row.filter(num => num);
                    //console.log(filteredRow);
                    let missing = 4 - filteredRow.length;
                    let zeros = Array(missing).fill(0);
                    //console.log(zeros);
                    let newRow = filteredRow.concat(zeros);
                    //console.log(newRow);
    
                    squares[i].innerHTML = newRow[0];
                    squares[i+1].innerHTML = newRow[1];
                    squares[i+2].innerHTML = newRow[2];
                    squares[i+3].innerHTML = newRow[3];
                }
            }
        }


    function combineRow() {
        for (let i = 0; i < 15; i++) {
            if (squares[i].innerHTML === squares[i+1].innerHTML) {
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML);
                squares[i].innerHTML = combinedTotal;
                squares[i+1].innerHTML = 0;
            }
        }
    }

    function control(e) {
        if(e.keyCode === 39) {
            keyRight();
        }
    }

    document.addEventListener('keyup', control);

    function keyRight() {
        moveRight();
        combineRow();
        moveRight();
        generateNumber();
    }




    

});