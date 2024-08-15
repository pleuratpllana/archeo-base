$(document).ready(function () {
    $(".loginBtn").click(function () {
        location.href = "https://archeobase.ch";
    });

    $(document).on('click', '#read_more_scroll', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 200);
    });

    $(".free_test").click(function () {
        location.href = contact_page_url;
    });


});