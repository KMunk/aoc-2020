import fs from 'fs';

/*
    Starting at the top-left corner of your map and following a slope of right 3 and down 1, how many trees would you encounter?
*/

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;

    let lstLines = data.split(/\r?\n/);
    let totalTrees = 0;

    for (let i = 0; i < lstLines.length; i++) {
        var pos = (i * 3) % lstLines[i].length;
        totalTrees += isTree(lstLines[i][pos])
        var line = lstLines[i];
        let ret = line.substr(0, pos) + isTree(lstLines[i][pos]) + line.substr(pos + 1);
        console.log(ret);
    }
    
    console.log(totalTrees);
});

function isTree(str){
    return str == '#' ? 1:0;
}