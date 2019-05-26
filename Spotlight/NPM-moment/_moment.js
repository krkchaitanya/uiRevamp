// source:  https://momentjs.com/

const moment = require("moment");

let val;

val = moment();
val = moment().format("MM/DD/YYYY");
val = moment().format("MMM dddd YYYY");
val = moment().format('[Test moment js - ] dddd MMMM YYYY');

// Relative time
val = moment("05262015", "MMDDYYYY").fromNow();
val = moment("19921311", "YYYYDDMM").fromNow();
val = moment().startOf("day").fromNow();

const locale = moment.locale();
const UTCtimezone = moment("2010-10-20 4:30 +0000", "YYYY-MM-DD HH:mm Z"); // parsed as 4:30 UTC

// Regular callback
const validateDtFrmt = function(dt, callback) {
    const isvalidDt = moment(dt, "DD-MM-YYYY", true).isValid();
    callback(isvalidDt);
};

validateDtFrmt("11-24-1995", function(res) {
    console.log(" --Dt validation resp from validateDtFrmt method --> ", res);
});


// Es6 Promises
let validateDatePromise = (dt) => {
    
    console.log(" --input date-- ", dt);
    const isvalidDtFrmt = moment(dt, "DD-MM-YYYY", true).isValid();
    console.log("--isvalidDtFrmt validateDatePromise() --", isvalidDtFrmt);

    return new Promise((resolve, reject) => {
        if (isvalidDtFrmt == true) {
            resolve(" It's a valid date format");
        }
        reject("It's not a valid date format");
    });

}

const onResolve = (resData) => console.log(resData);
const onReject = (errDt) => console.log(errDt); 

validateDatePromise("24-11-1999").then(onResolve, onReject);



console.log("--->",val); 
console.log(" -- Locale -- ", locale);
console.log(" -- UTC timezone --", UTCtimezone);