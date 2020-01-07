console.log("validating stacktngs js file");


// navbar list items hover functionality
// list item:: landing
document.querySelector(".header_elements--navbar-landing").addEventListener("mouseenter", showContent);
document.querySelector(".header_elements--navbar-landing").addEventListener("mouseleave", hideContent);
function showContent() 
{document.querySelector(".hovercontent > .hovercontent_landing").style.display = "block";}
function hideContent()
{document.querySelector(".hovercontent > .hovercontent_landing").style.display = "none";}