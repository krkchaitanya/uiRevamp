const util = require('util');
const wait = util.promisify(setTimeout);

async function process01() {
    console.log('process 01 started');
    console.time('process 01 ended');
    await wait(5000);
    console.timeEnd('process 01 ended');
    console.log();
    return 'process01-value';
};

async function process02() {
    console.log('process 02 started');
    console.time('process 02 ended');
    await wait(3000);
    console.timeEnd('process 02 ended');
    console.log();
    return 'process01-value';
};

module.exports = {
    process01,
    process02
};