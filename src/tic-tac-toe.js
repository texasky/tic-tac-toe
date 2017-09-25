class TicTacToe {
    constructor() {
        this.playField = [
            [null,null,null],
            [null,null,null],
            [null,null,null]];
        this.CurrentPlayerSymbol = 'x';
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.CurrentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.playField[rowIndex][columnIndex] === null && this.CurrentPlayerSymbol === 'x') {
            this.playField[rowIndex][columnIndex] = this.CurrentPlayerSymbol;
            this.CurrentPlayerSymbol = 'o';
        } else if(this.playField[rowIndex][columnIndex] === null && this.CurrentPlayerSymbol === 'o') {
            this.playField[rowIndex][columnIndex] = this.CurrentPlayerSymbol;
            this.CurrentPlayerSymbol = 'x';
        }
    }

    isFinished() {
        if(this.isDraw() === true || this.winner != null) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        this.isDraw();
        return this.winner;
    }

    noMoreTurns() {
        if(this.playField[0].indexOf(null) === -1 && this.playField[1].indexOf(null) === -1 && this.playField[2].indexOf(null) === -1) {
         return true;
        } else {
         return false;
        }
    }

    isDraw() {
        if(this.playField[0][0] === this.playField[1][0] && this.playField[1][0] === this.playField[2][0]) {
            this.winner = this.playField[0][0];
        } else if(this.playField[0][1] === this.playField[1][1] && this.playField[1][1] === this.playField[2][1]) {
            this.winner = this.playField[0][1];
        } else if(this.playField[0][2] === this.playField[1][2] && this.playField[1][2] === this.playField[2][2]) {
            this.winner = this.playField[0][2];
        } else if(this.playField[0][0] === this.playField[0][1] && this.playField[0][1] === this.playField[0][2]) {
            this.winner = this.playField[0][0];
        } else if(this.playField[1][0] === this.playField[1][1] && this.playField[1][1] === this.playField[1][2]) {
            this.winner = this.playField[1][0];
        } else if(this.playField[2][0] === this.playField[2][1] && this.playField[2][1] === this.playField[2][2]) {
            this.winner = this.playField[2][0];
        } else if(this.playField[0][0] === this.playField[1][1] && this.playField[1][1] === this.playField[2][2]) {
            this.winner = this.playField[0][0];
        } else if(this.playField[2][0] === this.playField[1][1] && this.playField[1][1] === this.playField[0][2]) {
            this.winner = this.playField[2][0];
        }
        if(this.winner === null && this.noMoreTurns() === true) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.playField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;