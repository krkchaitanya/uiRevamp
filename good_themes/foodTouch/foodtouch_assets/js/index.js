var showNavItems = false;

$("#hamburgerI").on("click", handleHamburgerBtn);

function handleHamburgerBtn() {
    if ( undefined != $("#nav_items").children() && 1 <= $("#nav_items").children().length) {
        for (var i=0; i<$("#nav_items").children().length; i++) {
            $("#nav_items").children()[i].style.display = !showNavItems ? "block" : "none";
        }
        $("#nav_items").children()[3].style.display = "block";
        showNavItems = !showNavItems;
    }
}