jQuery(document).ready(function () {

    // The function actually applying the offset
    function offsetAnchor() {
        if (location.hash.length !== 0) {
            window.scrollTo(window.scrollX, window.scrollY - 120);
        }
    }

    // Captures click events of all <a> elements with href starting with #
    $(document).on('click', 'a[href^="#"]', function (event) {
        // Click events are captured before hashchanges. Timeout
        // causes offsetAnchor to be called after the page jump.
        window.setTimeout(function () {
            offsetAnchor();
        }, 0);
    });

    // Set the offset when entering page with hash present in the url
    window.setTimeout(offsetAnchor, 0);

    var offset = 200;
    var duration = 500;
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });

    jQuery('.back-to-top').click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
});