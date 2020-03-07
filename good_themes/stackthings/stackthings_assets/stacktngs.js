var slideNo = 1;

(function() {

    console.log("-----stacktngs js file init-----");
    handleSlideFunctionality();

})();


// function definition - Toggle the navbar items content
function toggleNavBarItemsContent(elem) {
    const navbarEleContent = document.getElementsByClassName("hovercontent_"+elem)[0];
    document.querySelector(".header_element--"+elem).addEventListener("mouseenter", function(elem) {
        navbarEleContent.style.display = "block";
    });
    document.querySelector(".header_element--"+elem).addEventListener("mouseleave", function(elem) {
        navbarEleContent.style.display = "none";
    });
};


// get navbar items list
let navbarelements = [];
let navitems = [];    
navbarelements = document.querySelector(".header_elements").children;
navbarelementsArr = Array.from(navbarelements);
if (undefined != navbarelements && navbarelements.length > 0 && window.innerWidth > 900) {
    let i = 1;
    while(i < navbarelementsArr.length-1) {
        toggleNavBarItemsContent(navbarelementsArr[i].children.item(0).innerText.toLowerCase());
        navitems.push(navbarelementsArr[i].children.item(0).innerText);
        i++;
    }
}


// slides button onclick functionality
// Consider there is a list of items and by default show the first one in the list


$("#slide-left").on("click", handleSlideFunctionality);
$("#slide-right").on("click", handleSlideFunctionality);

function handleSlideFunctionality(e) {


    if (undefined !== e) {
        if ("slide-left" === e.target.id) {
            slideNo = slideNo - 1;
        } else if ("slide-right" === e.target.id) {
            slideNo = slideNo + 1;
        }
    } else {
        slideNo = 1;
    }
    
    var listOfSlides = Array.from($(".slides").children());

    if (slideNo > listOfSlides.length) { slideNo = 1 };
    if(0 === slideNo && "slide-left" === e.target.id) { slideNo = listOfSlides.length };


    console.log("--slideno--", slideNo);

    listOfSlides.forEach(function(sld) { sld.style.display = "none" });
    listOfSlides[slideNo-1].style.display = "block";

};



// hamburger onclick functionality

$("#hamburger").on("click", function() {
    console.log("hello hamburger");
});

