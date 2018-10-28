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

validateUserEmail(null);
validateUserEmail("gerat rabiti ruie@gmail.com");
validateUserEmail("greatnikeuser672@gmail.com");
validateUserEmail(" isudfksd@gmail.com");
