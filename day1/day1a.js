import fs from 'fs';

/*
    Find the two entries that sum to 2020; what do you get if you multiply them together?
*/

fs.readFile('input.txt','utf8',function(err,data){
    if (err) throw err;

    let lstNums = data.split(/\r?\n/);
    let ret = doesListContainSum(lstNums,2020);

    console.log({
        x: ret.x, 
        y: ret.y,
        product: ret.x * ret.y
    });
});

function doesListContainSum(lst,sum){
    let ret = {}
    lst.forEach(x => {
        if (lst.find(y => y == sum - x)) {
            var x = parseInt(x,10);
            var y = (sum - x);
            ret = {x,y};
        }
    });

    return ret;
}