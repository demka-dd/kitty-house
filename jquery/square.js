
    $(document).ready(function() {
        $('.input-ch input[type="checkbox"]').change(function() {
            var selectedArea = $(this).data('area');
            var maxArea = selectedArea;
    
            // Скрыть все элементы
            $('.numbers-item').hide();
    
            // Показать элементы, площадь которых меньше или равна выбранной
            $('.numbers-item[data-area]').each(function() {
                var itemArea = $(this).data('area');
                if (itemArea <= maxArea) {
                    $(this).show();
                }
            });
        });
    });
