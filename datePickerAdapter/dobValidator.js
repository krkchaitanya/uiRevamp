const moment = require("moment");

// moment initialization
const momentHandler = moment();

const getCurrentDate = () => {
    return momentHandler.format("DD/MM/YYYY");
};

//  DOB cannot be in the future
// Enter valid date of birth
// lower bound DOB 01/01/1910

const validateUserDob = (dob, dateFormat) => {
    var userAge = moment().diff(moment(dob, dateFormat), 'years')
    let validationMsg = "";
    const lowerBoundDate = moment("01/01/1910").format(dateFormat);
    const currentDate = moment().format(dateFormat);
    const isValidDate = moment(dob, dateFormat, true).isValid();
    const isBetween = moment(dob).isBetween(lowerBoundDate, currentDate, 'date');
    if(!isValidDate){
        validationMsg = "Enter valid date of birth";
    } else if(!isBetween) {
        validationMsg = "Enter Date after JAN 01 1910 and before "+currentDate;
    } else if (userAge < 18) {
        validationMsg = "User to be atleast 18 years";
    } else {
        validationMsg = "Great , Entered valid DOB";
    }
    return validationMsg;
}

const userDobValidation1 = validateUserDob("23/11/2000","MM/DD/YYYY");

console.log("user DOB validation Result >>>", userDobValidation1);