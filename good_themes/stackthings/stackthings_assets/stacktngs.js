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
if (undefined != navbarelements && navbarelements.length > 0) {
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

    var slideNo = 0;
    if (undefined !== e) {
        if ("slide-left" === e.target.id) {
            var slideNo = slideNo-1;
        } else if ("slide-right" === e.target.id) {
            var slideNo = slideNo + 1;
        }
    }

    var listOfSlides = Array.from($(".slides").children());
    listOfSlides.forEach(function(sld) { sld.style.display = "none" });
    var currentSlide = listOfSlides[slideNo];
    if (undefined !== currentSlide) {
        currentSlide.style.display = "block";
    } else {
        listOfSlides[0].style.display = "block";
    }

};
