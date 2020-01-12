(function() {
    console.log("-----stacktngs js file init-----");

})();


// get navbar items list
let navbarelements = [];
let navitems = [];    
navbarelements = document.querySelector(".header_elements--navbar").children;
navbarelementsArr = Array.from(navbarelements);
if (undefined != navbarelements && navbarelements.length > 0) {
    let i = 0;
    while(i < navbarelementsArr.length) {
        navitems.push(navbarelementsArr[i].children.item(0).innerText);
        i++;
    }
}

// function definition - Toggle the navbar items content
function toggleNavBarItemsContent(elem) {
    const navbarEleContent = document.getElementsByClassName("hovercontent_"+elem)[0];
    document.querySelector(".header_elements--navbar-"+elem).addEventListener("mouseenter", function(elem) {
        navbarEleContent.style.display = "block";
    });
    document.querySelector(".header_elements--navbar-"+elem).addEventListener("mouseleave", function(elem) {
        navbarEleContent.style.display = "none";
    });
};

// function declaration - function call
toggleNavBarItemsContent("landing");
toggleNavBarItemsContent("pages");
toggleNavBarItemsContent("account");
toggleNavBarItemsContent("documentation");