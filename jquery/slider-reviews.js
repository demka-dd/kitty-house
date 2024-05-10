
// $(document).ready(function() {
//     const reviewsContainer = $('.revw');
//     const reviewsItems = $('.reviews-item');
//     const reviewsPerPage = 2; // Количество отображаемых отзывов на странице
//     let currentIndex = 0;
  
//     function showReviews(index) {
//       reviewsContainer.css('transform', `translateX(-${index * (reviewsPerPage * 600)}px)`);
//     }
  
//     $('.slider-next-rew').click(function() {
//       currentIndex = (currentIndex + 1) % Math.ceil(reviewsItems.length / reviewsPerPage);
//       showReviews(currentIndex);
//     });
  
//     $('.slider-prev-rew').click(function() {
//       currentIndex = (currentIndex - 1 + Math.ceil(reviewsItems.length / reviewsPerPage)) % Math.ceil(reviewsItems.length / reviewsPerPage);
//       showReviews(currentIndex);
//     });
  
//     // Инициализация слайдера
//     showReviews(currentIndex);
//   });

$(document).ready(function() {
    var itemsPerPage = 3;
    var currentPage = 0;

    function showPage(page) {
        $('.reviews-item').hide();
        $('.reviews-item').each(function(index) {
            if (index >= page * itemsPerPage && index < (page + 1) * itemsPerPage) {
                $(this).show();
            }
        });
    }

    showPage(currentPage);

    $('.slider-prev-rew').click(function() {
        currentPage--;
        if (currentPage < 0) {
            currentPage = 0;
        }
        showPage(currentPage);
    });

    $('.slider-next-rew').click(function() {
        currentPage++;
        if (currentPage >= $('.reviews-item').length / itemsPerPage) {
            currentPage = Math.floor($('.reviews-item').length / itemsPerPage) - 1;
        }
        showPage(currentPage);
    });
});
// var slider = document.querySelector(".revw");
// var prev = document.querySelector(".slider-prev-rew");
// var next = document.querySelector(".slider-next-rew");
// var slideWidth = document.querySelector(".reviews-item").offsetWidth + 100;
// var slideNum = 0;
// var slidesAll = document.querySelectorAll(".reviews-item").length;

// next.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     if (slideNum < slidesAll - 1) {
//         slideNum++;
//     } else {
//         slideNum = 0;
//     }
//     slider.style.transform = `translateX(-${slideNum * slideWidth}px)`;
// });

// prev.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     if (slideNum > 0) {
//         slideNum--;
//     } else {
//         slideNum = slidesAll - 1;
//     }
//     slider.style.transform = `translateX(-${slideNum * slideWidth}px)`;
// });








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


