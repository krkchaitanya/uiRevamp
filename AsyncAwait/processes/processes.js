const util = require('util');
const wait = util.promisify(setTimeout);

async function process01() {
    try {
        console.log('process 01 started');
        // Handling errors using try catch block at child functions level to reduce complexity
        // throw new Error("Process01 throws an exception");
        await wait(100);
        console.time('process 01 ended');
        await wait(5000);
        console.timeEnd('process 01 ended');
        console.log();
        return 'process01-value';
    } catch (error) {
        console.log(error);
    }
};

async function process02() {
    try {
        console.log('process 02 started');
        // throw new Error("Process01 throws an exception");
        console.time('process 02 ended');
        await wait(3000);
        console.timeEnd('process 02 ended');
        console.log();
        return 'process01-value';
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    process01,
    process02
};