$(document).ready(function(){
    $(".toggle-btn").click(function(){
        $(".menu").toggleClass('active');
    });
});

// slider
$('.main-slider').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    dots: true,
    touchDrag:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
})