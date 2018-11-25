// Requirement ==>> npm i typescript --g
// Start ==>> run command tsc example.ts -w
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Typescript------>>>>>> is superset of JavaScript
// Transcompile the Ts to regular browser understandable JavaScript
// Used in larger applictions
// Offers::
// Type check
// class based objects
// Modularity
// Es6 Features
// Syntax is closer to JAVA and other high level languages
// String Number Boolean Array Any Void Null Tuple Enum Generics
// USE ==>  Object oriented programming in JS / No Prototypes / Encapsulation - Functionality and resources all are at 1 place
//  TS Variables
var myName;
var myNumber;
var myBool;
var myvar;
var cars;
myName = "greatName";
myNumber = 982742983;
myBool = false;
myvar = "wergjlw";
cars = ['Honda', 'toyota', 'Ford', 'subaru'];
var stringArr;
var numberArr;
stringArr = ['one', 'two', 'three'];
numberArr = [2, 3, 43434];
console.log(stringArr);
console.log(numberArr);
console.log(myName.slice(0, 3));
// TS Functions
var getSum = function (a, b) {
    return a + b;
};
var mySum = function (m, n) {
    if (typeof (m) == 'string') {
        m = parseInt(m);
    }
    if (typeof (n) == 'string') {
        n = parseInt(n);
    }
    return m + n;
};
console.log(mySum('4', '5'));
var getUserInformation = function (data) {
    return "user details were as follows -NAME: " + data.name + ", PHNO: " + data.phnumber + ", ADDRESS: " + data.address + ", ISARMYofficer: " + data.isArmyOfficer;
};
var userInfoObject = {
    name: "great User",
    phnumber: 6438768437,
    address: 'Austin tx',
    isArmyOfficer: false
};
console.log(getUserInformation(userInfoObject));
;
var getPersonData = function (person) {
    return person;
};
var personDataResponse = getPersonData({
    name: 'great person',
    email: 'great email',
    phnumber: 32234234324,
    address: 'Houston tx'
});
console.log('***********');
console.log(personDataResponse);
console.log('***********');
// classes
// A class can have properties and methods.
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User created-' + this.name);
    }
    User.prototype.register = function () {
        return 'hello world';
    };
    User.prototype.payInvoice = function () {
        return this.name + " paid invoice";
    };
    return User;
}());
var johnData = new User('John', 'itsmejohn@email.com', 28);
console.log(johnData.register());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(name, email, age, id) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        return _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var mikeData = new Member('Mike smith', 'itsmemike@gmila.com', 32, 3434);
console.log(mikeData.payInvoice());
