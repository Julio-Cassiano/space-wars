import Invader from "./invader.js";

class Grid {
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
        this.invadersVelocity = 1;
        this.invaders = this.init();
    }

    init() {
        const array = [];

        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++){
                const invader = new Invader({
                    x: col * 50 + 20,
                    y: row * 37 + 20,
                }, 
                this.invadersVelocity

                );
                array.push(invader);  

            }
        }

        return array;
    }
}

export default Grid;