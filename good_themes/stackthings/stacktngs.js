console.log("validating stacktngs js file");


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


document.querySelector(".header_elements--navbar-landing").addEventListener("mouseenter", showContent("landing"));
document.querySelector(".header_elements--navbar-landing").addEventListener("mouseleave", hideContent("landing"));;


// show and hide content of navbar items
function showContent(element) 
{document.querySelector(".hovercontent > .hovercontent_"+element).style.display = "block";}
function hideContent(element)
{document.querySelector(".hovercontent > .hovercontent_"+element).style.display = "none";}
