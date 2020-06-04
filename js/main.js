$('#card-crypt').on('click', ()=>{
    $('.card').css('opacity', '0');
    $('.card').css('z-index', '0');
    $('.card').css('cursor', 'default')
    $('.card-back').css('opacity', '1');
    $('.card-back').css('z-index', '6');
    // console.log('bj');
});

$(document).on('click', function (event) {
    $('.card').css('opacity', '1');
    $('.card').css('z-index', '6');
    $('.card-back').css('opacity', '0');
    $('.card-back').css('z-index', '0');
    $('.card-back').css('cursor', 'default')
});
$('#card-crypt').on('click', function (event) {
    event.stopPropagation();
});

$('#card-crypt').on('keyup', ()=>{
    $('.print-crypt input').val($('#card-crypt').val());
});
