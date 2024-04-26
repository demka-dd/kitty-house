
$(document).ready(function(){
    $('.num-row .numbers-item:gt(0)').hide(); // Скрываем все элементы кроме первого

    setInterval(function() {
        $('.num-row .numbers-item:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('.num-row');
    }, 5000); // Измените значение 3000, чтобы установить интервал переключения слайдов
});
