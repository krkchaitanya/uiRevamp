var slideNo = 1;
let navbarelements = [];
let navitems = []; 

(function() {

    localStorage.setItem("HamburgerVisibility", "hidden");

    // get navbar items list
    navbarelements = document.querySelector(".header_elements").children;
    navbarelementsArr = Array.from(navbarelements);
    if (undefined != navbarelements && navbarelements.length > 0) {
        let i = 1;
        while(i < navbarelementsArr.length-1) {
            toggleNavBarItemsContent(navbarelementsArr[i].children.item(0).innerText.toLowerCase());
            navitems.push(navbarelementsArr[i].children.item(0).innerText);
            i++;
        }
    }

    handleSlideFunctionality();
    toggleHamburger();
})();


// function definition - Toggle the navbar items content
function toggleNavBarItemsContent(elem) {
    const navbarEleContent = document.getElementsByClassName("hovercontent_"+elem)[0];
    document.querySelector(".header_element--"+elem).addEventListener("mouseenter", function(elem) {
        if (window.innerWidth > 900) navbarEleContent.style.display = "block";
    });
    document.querySelector(".header_element--"+elem).addEventListener("mouseleave", function(elem) {
        if (window.innerWidth > 900) navbarEleContent.style.display = "none";
    });
};


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

$("#hamburger").on("click", toggleHamburger);
function toggleHamburger() {
    console.log("hello hamburger");
    var burgerVisibility = localStorage.getItem("HamburgerVisibility");
    for(i=1; i<navbarelements.length; i++) {
        navbarelements[i].style.display = burgerVisibility === "visible" ? "block" : "none";
    }
    localStorage.setItem("HamburgerVisibility", burgerVisibility === "visible" ? "hidden" : "visible");
};

