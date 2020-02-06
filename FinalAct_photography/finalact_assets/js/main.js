// animate smooth scroll
$('#view-work').on('click', function() {
    $('html, body').delay(2000).animate(
        {
            scrollTop: $("#images").offset().top
        },
        900
    );
});