import fs from 'fs';

/*
    What do you get if you multiply together the number of trees encountered on each of the listed slopes?
    * Right 1, down 1.
    * Right 3, down 1.
    * Right 5, down 1.
    * Right 7, down 1.
    * Right 1, down 2.
*/

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;

    let lstLines = data.split(/\r?\n/);

    let slopes = [
        {
            right: 1,
            down: 1,
            totalTrees: 0
        },
        {
            right: 3,
            down: 1,
            totalTrees: 0
        },
        {
            right: 5,
            down: 1,
            totalTrees: 0
        },
        {
            right: 7,
            down: 1,
            totalTrees: 0
        },
        {
            right: 1,
            down: 2,
            totalTrees: 0
        }
    ]

    slopes.forEach(s => {
        let pos = 0;
        for (let i = 0; i < lstLines.length; i++) {
            if (i % s.down == 0) {
                s.totalTrees += isTree(lstLines[i][(s.right * pos) % lstLines[i].length]);
                pos += 1;
            }
        }
    });

    console.log(slopes.map(s => s.totalTrees).reduce((a, b) => a * b));
});

function isTree(str) {
    return str == '#' ? 1 : 0;
}