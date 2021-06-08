import "./scss/style.scss";
import jQuery from "jquery";
import "./slider/slick.min.js";


jQuery(document).ready(function () {


    // Burger

    jQuery('.menu-burger').on('click', function(e) {
        jQuery('.menu-burger, .menu, .logo, .language__btn, .contact-us').toggleClass('active');
        console.log('add')
    })

    
    // Slider

    jQuery('.description-inner__img').slick({
    arrows: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    responsive:[{
        breakpoint: 1440,
        settings: "unslick",
    }],
    });
});