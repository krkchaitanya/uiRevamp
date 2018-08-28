import randomGenerator from "../random-generator";
// import js files
import "../src/js/bootstrap.min.js";
import "../src/js/jquery.min.js";
import "../src/js/popper.min";
// import css files
import "../src/css/bootstrap.min.css";
import "../src/scss/style.scss";



const entryFunction = () => {
    console.log('--> Entry function got triggered..');
    const randomVal = randomGenerator.randomInteger();
    console.log(randomVal);
}
entryFunction();