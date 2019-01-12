const { process01, process02 } = require('./processes');

async function main() {
    try {
        console.time("Total running time");
        const value1 = await process01();
        const value2 = await process02();

        console.log('Process01 returned -> ', value1);
        console.log('Process02 returned -> ', value2);
        console.log();

        console.timeEnd("Total running time");
    } catch(error) {
        console.log(error);
    }
}

main();