import fs from 'fs';

/*
    Immediately before any instruction is executed a second time, what value is in the accumulator?
*/

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;

    let lstInstructions = data.split(/\r?\n/);
    let accumulator = 0;
    let pos = 0;
    let prevPos = 0;
    var stopped = false;

    lstInstructions = lstInstructions.map(x => {
        return {
            operation: x.match(/acc|jmp|nop/)[0],
            value: x.match(/[+-]{1}\d+/)[0],
            hasExecuted: false
        }
    });
    lstInstructions[415] = {
        operation: 'nop',
        value: '+0',
        hasExecuted: false
    };
    do {
        let instruction = lstInstructions[pos];
        if (instruction.hasExecuted) {
            stopped = true;
        } else {
            instruction.hasExecuted = true;
            switch (instruction.operation) {
                case "acc":
                    accumulator += parseInt(instruction.value);
                    pos += 1;
                    break;
                case "jmp":
                    prevPos = pos;
                    pos += parseInt(instruction.value);
                    break;
                case "nop":
                    pos += 1;
                    break;
            }
        }
    }
    while (!stopped);

    console.log({accumulator,pos,prevPos, instruction: lstInstructions[prevPos]});
});