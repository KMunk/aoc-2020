import fs from 'fs';

fs.readFile('input.txt','utf8',function(err,data){
    if (err) throw err;
    //console.log(data);
    let lstNums = data.split(/\r?\n/);
    //console.log(lstNums);
    lstNums.forEach(x => {
        if (lstNums.find(y => y == 2020 - x)) {
            console.log(`Val 1: ${x} Val 2: ${2020 - x} Product: ${x * (2020 - x)}`);
        }
    });
});