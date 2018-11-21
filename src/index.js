const _ = require('lodash');

const userInfoHandler = (name,address) => {
    return name + address;
}

console.log(userInfoHandler("mikel","kors"));