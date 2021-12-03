class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }

    /*
     * Create 2D array of speces
     * return {array} an array of space objects
    */
    createSpaces() {
        const spaces = [];

        for (let x = 0; x < this.columns; x++){
            const column = [];

            for (let y = 0; y < this.rows; y++){
                const space = new Space(x, y);
                column.push(space);
            }
            spaces.push(column);
        }

        return spaces;

    }

    //Render the Board
    drawHTMLBoard() {
        for (let column of this.spaces) {
            for (let space of column) {
                space.drawSVGSpaces();
            }
        }
	} 
}