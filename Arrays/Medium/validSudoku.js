/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        let row = new Set();
        let col = new Set();
        let box = new Set();

        for (let j = 0; j < 9; j++) {
            let _row = board[i][j]
            let _col = board[j][i]
            // "Box index = RowBox * 3 + ColumnBox", and "Cell index = RowCell * 3 + ColumnCell".
            let _box = board[3 * Math.floor(i/3) + Math.floor(j/3)][3 * (i % 3) + (j % 3)]
            console.log(3 * Math.floor(i/3) + Math.floor(j/3), 3 * (i % 3) + (j % 3))

            if (_row !== '.') {
                if (row.has(_row)) return false
                row.add(_row)
            }
            
            if (_col !== '.') {
                if (col.has(_col)) return false
                col.add(_col)
            }

            if (_box !== '.') {
                if (box.has(_box)) return false
                box.add(_box)
            }
        }
    }

    return true
};

const test = [
    [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8","3",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
],
    [["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]]
]

test.forEach((value) => {
    const result = isValidSudoku(value);
    console.log(result)
}) 
