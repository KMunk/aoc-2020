import fs from 'fs';

/*
    What is the sum of the distinct answers for each group?
*/

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;

    let lstAnswers = data.split(/\r?\n\n/);

    lstAnswers = lstAnswers.map(x => {
        return x.replace(/\r?\n/g, '')
            .split('')
            .filter((v, i, a) => a.indexOf(v) === i)
            .length;
    }).reduce((a, b) => a + b);

    console.log(lstAnswers);
});