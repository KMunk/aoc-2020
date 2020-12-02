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

        let charCount = (userPass.match(new RegExp(reqsLetter,'g')) || []).length;

        let leftBound = reqsNum.split('-')[0];
        let rightBound = reqsNum.split('-')[1];

        if(charCount >= leftBound && charCount <= rightBound){
            validPasswords += 1;
        }
    });
    console.log(validPasswords);
});