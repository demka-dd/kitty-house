var slider = document.querySelector(".revw");
var prev = document.querySelector(".slider-prev");
var next = document.querySelector(".slider-next");
var slideWidth = document.querySelector(".reviews-item").offsetWidth + 20;
var slideNum = 0;
var slidesAll = document.querySelectorAll(".reviews-item").length;

next.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (slideNum < slidesAll - 1) {
        slideNum++;
    } else {
        slideNum = 0;
    }
    slider.style.transform = `translateX(-${slideNum * slideWidth}px)`;
});

prev.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (slideNum > 0) {
        slideNum--;
    } else {
        slideNum = slidesAll - 1;
    }
    slider.style.transform = `translateX(-${slideNum * slideWidth}px)`;
});


// $(document).ready(function() {
//     var slideNum = 0;
//     var slidesAll = $('.reviews-item').length;
//     var slideWidth = $('.reviews-item').width() + 20;

//     $('.slider-next').click(function(evt) {
//         evt.preventDefault();
//         if (slideNum < slidesAll - 1) {
//             slideNum++;
//         } else {
//             slideNum = 0;
//         }
//         $('.reviews').css('transform', 'translateX(-' + slideNum * slideWidth + 'px)');
//     });

//     $('.slider-prev').click(function(evt) {
//         evt.preventDefault();
//         if (slideNum > 0) {
//             slideNum--;
//         } else {
//             slideNum = slidesAll - 1;
//         }
//         $('.reviews').css('transform', 'translateX(-' + slideNum* slideWidth + 'px)');
//     });
// });


