$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul')
    $('.pKanan').addClass('pMuncul')
    $('.img').addClass('pMuncul')
    $('.pbawah').addClass('pMuncul')

    $('.content .bawah').each(function(i) {
        setTimeout(function() {
            $('.content .bawah').eq(i).addClass('muncul')
        }, 300 * (i+1));
    });

});