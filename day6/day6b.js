import fs from 'fs';

/*
    What is the sum of the distinct unanimous answers for each group?
*/

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;

    let lstGroups = data.split(/\r?\n\n/);

    lstGroups = lstGroups.map(x => {
        return x.split(/\r?\n/)
            .reduce((a, b) => {
                return a.toString().split('').filter(x => b.toString().split('').includes(x));
            })
            .length;
    }).reduce((a, b) => a + b);

    console.log(lstGroups);
});