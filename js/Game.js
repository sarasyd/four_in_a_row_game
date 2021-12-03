class Game {
    constructor(board, players) {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }


    // Getter Method activePlayer
    get activePlayer() {
        return this.players.find(player => player.active);
    }

    //Create Players
    createPlayers() {
        const players = [new Player('Player 1', 1, '#e15258', true),
        new Player('Player 2', 2, '#e59a13')];
        return players;
    }



    /*
     * Gets game ready for play
     */
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    handleKeydown(e) {
        if (tihs.ready) {
            if (e.key = 'ArrowLeft') {
                //move left
            } else if (e.key = 'ArrowRight') {
                //move right
            } else if (e.key = 'ArrowDown') {
                //drop down
            }
        }

    }

}