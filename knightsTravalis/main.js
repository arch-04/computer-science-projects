
function makeBoard() {
    let board = [];
    for (let i = 0; i < 8; i++) {
        board[i] = [];
        for (let j = 0; j < 8; j++) {
            board[i][j] = 0;
        }
    }
    return board
}

class Knight {
    constructor(startX, startY, endX, endY, board) {
        this.x = startX;
        this.y = startY;
        this.endX = endX;
        this.endY = endY;
        this.board = board;
        this.board[this.x][this.y] = 0;
    }

    knightMoves =
        [[-2, -1], [-2, 1], //upward 
        [-1, -2], [1, -2], // leftward
        [2, 1], [2, -1], // downward
        [-1, 2], [1, 2]] // rightward


    isValidMove(x, y) {
        return x >= 0 && x < 8 && y >= 0 && y < 8 && this.board[x][y] === 0;
    }

    findPath() {
        let queue = [[this.x, this.y, 0, [[this.x, this.y]]]];

        while (queue.length > 0) {
            let [x, y, dist, path] = queue.shift();

            if (x === this.endX && y === this.endY) {
                console.log(`reached in ${dist} moves`)
                console.log(path);
                return path;
            }

            for (let [dx, dy] of this.knightMoves) {
                let newX = x + dx;
                let newY = y + dy;

                if (this.isValidMove(newX, newY)) {
                    this.board[newX][newY] = dist + 1;
                    queue.push([newX, newY, dist + 1, [...path, [newX, newY]]]);
                }
            }
        }
        console.log('No path found')
    }


}

let board = makeBoard();
let knight = new Knight(3, 3, 4, 3, board);
knight.findPath();







