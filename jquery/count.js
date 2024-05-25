
    function filterCards() {
     var price = parseInt($('#priceFilter').val());
                            
    $('.numbers-item').each(function() {
        var cardPrice = parseInt($(this).attr('data-price'));
                                
             if (isNaN(price) || cardPrice <= price) {
                $(this).show();
            } else {
                $(this).hide();
             }
        });
    }

