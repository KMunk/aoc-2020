import fs from 'fs';

/*
    What is the highest seat ID on a boarding pass?
*/

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;

    let lstSeats = data.split(/\r?\n/);
    lstSeats = lstSeats.map(x => {

        let row = {min: 0, max: 127};
        let column = {min: 0, max: 7};

        x.split("").forEach(c => {
            if (c == "F") {
                row.max = Math.floor(((row.max - row.min) / 2) + row.min);
            }else if (c == "B"){
                row.min = Math.ceil(((row.max - row.min) / 2) +row.min); 
            }else if (c == "L") {
                column.max = Math.floor(((column.max - column.min) / 2) + column.min);
            }else if (c == "R"){
                column.min = Math.ceil(((column.max - column.min) / 2) + column.min);
            }
        })
        return {
            row: row.max,
            column: column.max,
            seat: (row.max * 8) + column.max,
            original: x
        }
    });

    let highestSeat = lstSeats.reduce((max,val) => {
        if(!max) max = 0;
        return Math.max(max,val.seat)
    })
    
    console.log(highestSeat);
});