import fs from 'fs';

/*
    How many passwords are valid according to their policies?
*/

fs.readFile('input.txt','utf8',function(err,data){
    if (err) throw err;

    let lstPasswords = data.split(/\r?\n/);
    let validPasswords = 0;
    lstPasswords.forEach(x => {
        let passArr = x.split(' ');
        let reqsNum = passArr[0];
        let reqsLetter = passArr[1].replace(':','');
        let userPass = passArr[2];

        let leftPos = reqsNum.split('-')[0] - 1;
        let rightPos = reqsNum.split('-')[1] - 1;

        if(userPass[leftPos] == reqsLetter ^ userPass[rightPos] == reqsLetter){
            validPasswords += 1;
        }
    });
    console.log(validPasswords);
});