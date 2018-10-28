// Email validation
const validateUserEmail = (email) => {

    let errorMsg = '';
    let errorInfo = {};
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log('--started user email validation--');

    if (email === '' || email === undefined || email === null || email.length === 0) {
        errorMsg = "Email address is mandatory";
    } else if (email.indexOf(' ')) {
        errorMsg = "No spaces were allowed";
    } else if (!email.match(emailRegex)) {
        errorMsg = "Regex failure / Not a valid email";
    }
    errorInfo.email = errorMsg;
    console.log(errorInfo);
};

// validateUserEmail(null);
// validateUserEmail("gerat rabiti ruie@gmail.com");
// validateUserEmail("greatnikeuser672@gmail.com");
// validateUserEmail(" isudfksd@gmail.com");


// validate first name (Mandatory)
// ensure it's not blank and only contains letters.
const validateFirstName = (firstName) => {
    let fnameMsg = '';
    let fNameErrObj = {};
    const fNameReg = /^[a-z]+$/i;
    if (firstName === null || firstName === undefined || firstName.length === 0 || firstName === "") {
        fnameMsg = "First name is mandatory";
    } else if (!firstName.match(fNameReg)) {
        fnameMsg = "Not a valid first name";
    } else {
        fnameMsg = "Valid first name";
    }

    fNameErrObj.fname = fnameMsg;
    console.log('---validate fname---');
    console.log(fNameErrObj);
}

// validateFirstName("greatrabbit");
// validateFirstName("askhk 98 ehj");


// validate user phone number
const validatePhoneNum = (phone) => {
    let phoneMsg = "";
    let phoneErrMsg = {};
    var phoneNoRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone === null || phone === undefined || phone.length === 0 || phone === "") {
        phoneMsg = "Phone number is mandatory";
    }   else if (phone[0] === "0" || !phone.match(phoneNoRegex)) {
        phoneMsg = "Not a valid phone number";
    } else {
        phoneMsg = "Valid phone number";
    }

    phoneErrMsg.phone = phoneMsg;
    console.log('--phone validation--');
    console.log(phoneErrMsg);
}

validatePhoneNum("2398478923");
validatePhoneNum("0430336392");
validatePhoneNum("6798asja8768");   