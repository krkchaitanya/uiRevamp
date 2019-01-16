const { process01, process02 } = require('../processes/processes');

// Paralle execution of functions or processes using Promises.all()
async function parallelExeMain() {
    try {
        console.time("Total running time");
        const data = await Promise.all([process01(), process02()]);
        
        console.log();
    
        console.log("Parallel exe response data -> ", data);
        console.log("process01 returned -> ", data[0]);
        console.log("process02 returned -> ", data[1]);
    
        console.log();
        console.timeEnd("Total running time");
    } catch (error) {
        console.log(error);
    }
}

parallelExeMain();