// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`
//if an invalid input is given, you must create a new variable name because you can't declare variables that have the same name when you're creating a new Game object, so create something like let newGame = new Game(...);

import { Board } from './board';


class Game {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        let tiles = numberOfRows * numberOfColumns;
        let timeOne = Date.now();
        (tiles < numberOfBombs) ? console.log("You need more tiles than bombs!")
        : this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    }


    //     //start time is board is created
    //     //end time is when player wins or loses


    playMove(rowIndex, columnIndex) {
        this._board.flipTile(rowIndex, columnIndex);
        if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
            console.log("Game Over!");
            let timeTwo = Date.now();
            console.log(timeTwo);
            console.log(`Time: ${timeTwo - timeOne}`);
            this._board.print();
        } else if (!this._board.hasSafeTiles()) {
            console.log("You are a winner!");
            let timeTwo = Date.now();
            console.log(timeTwo);
            console.log(`Time: ${timeTwo - timeOne}`);
            this._board.print();
        } else {
            console.log(`Current Board:`);
            this._board.print();
        }
    }
}