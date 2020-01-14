(function() {
    console.log("-----stacktngs js file init-----");

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
