import fs from 'fs';
import { parse } from 'path';

/*
    what is the product of the three entries that sum to 2020?
*/

fs.readFile('input.txt','utf8',function(err,data){
    if (err) throw err;

    let lstNums = data.split(/\r?\n/);
    let final = {};

    lstNums.forEach(x => {
        let ret = doesListContainSum(lstNums,2020 - x);
        
        if(ret.x && ret.y){
            final = {
                x: ret.x,
                y: ret.y,
                z: parseInt(x,10),
                product: ret.x * ret.y * parseInt(x,10)
            }
        }
    });
    
    console.log(final);
});

function doesListContainSum(lst,sum){
    let ret = {};
    lst.forEach(x => {
        if (lst.find(y => y == sum - x)) {
            var x = parseInt(x,10);
            var y = (sum - x);
            ret = {x,y};
        }
    });

    return ret;
}