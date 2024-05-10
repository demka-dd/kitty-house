
// $(document).ready(function(){
//     $('.num-row .numbers-item:gt(0)').hide(); // Скрываем все элементы кроме первого

//     setInterval(function() {
//         $('.num-row .numbers-item:first')
//             .fadeOut(1000)
//             .next()
//             .fadeIn(1000)
//             .end()
//             .appendTo('.num-row');
//     }, 5000); // Измените значение 3000, чтобы установить интервал переключения слайдов
// });
const slider = document.querySelector('.num-row');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.numbers-item'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = '';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();
const prevBut = document.querySelector('.prev-button');
const nextBut = document.querySelector('.next-button');

// Устанавливаем обработ событий для кнопок
prevBut.addEventListener('click', function() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slideCount - 1;
  }
  updateSlider();
  updateDots();
});

nextBut.addEventListener('click', function() {
  slideIndex++;
  if (slideIndex >= slideCount) {
    slideIndex = 0;
  }
  updateSlider();
  updateDots();
});


const dots = document.querySelector('.dots');
for (let i = 0; i < slideCount; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.dataset.slide = i;
  dots.appendChild(dot);
}

// Устанавливаем обработчики событий для точек
const dotsArray = Array.from(dots.querySelectorAll('.dot'));
dotsArray.forEach(dot => {
  dot.addEventListener('click', function() {
    const slideToShow = parseInt(this.dataset.slide);
    slideIndex = slideToShow;
    updateSlider();
    updateDots();
  });
});

// Функция для обновления отображения точек
function updateDots() {
  dotsArray.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Инициализация точек
updateDots();
