$(document).ready(() => {

    $('.pop').hide();
    $('.sheader').hide();

    $('.menu-button').on('click', () => {
        $('.sheader').slideToggle('slow');
    });

    $('.col-sm-6').on('mouseenter', () => {
        $(event.currentTarget).addClass('photo-active')
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('photo-active')
    });

    $(window).on('scroll', () => {

            $('.pop').slideDown(2000);

    });


});