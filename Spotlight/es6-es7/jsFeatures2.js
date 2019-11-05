const ageCalculator = (YearOfBirth) => {
    return 2019-YearOfBirth;
};
const survivorInfMaker = (name, community, desc) => {
    return {name, community, desc};
};

// window.localStorage
// localStorage only deals with the strings.
const travelerDtls = {
    name: "andrew anklllo",
    desctination: "salt lake city UTAH",
    passion: "travelling",
    age: "31"
};

localStorage.setItem("trvlDtls", JSON.stringify(travelerDtls));
localStorage.getItem("trvlDtls");
// localStorage.clear();

const randomNum =  33;
// localStorage.setItem("num", randomNum);
if (!Number.isNaN(parseInt(localStorage.getItem("num")))) {
    console.log("Successfully fetched the num value from localStorage");    
} else {
    console.log("failure in fetching the num value from localStorage");
}
// localStorage.clear();


export {ageCalculator, survivorInfMaker};