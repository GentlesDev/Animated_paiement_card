$('#card-crypt').on('click', () => {
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

$('#card-crypt').on('keyup', () => {
    $('.print-crypt input').val($('#card-crypt').val());
});

function onlyNumber(evt) {
    if (evt.which > 31 && (evt.which < 48 || evt.which > 57)) {
        return false;
    } else {
        return true;
    }
}

$('#card-number').on('keyup', (evt) => {
    if ($('#card-number').val().length == 0) {
        for (let i = 0; i < 16; i++) {
            $('#' + i).text('#');
        }
    } else {      
        for (let i = 0; i < $('#card-number').val().length; i++) {
            if (evt.key === 'Backspace') {
                console.log(i);
                $('#' + i).text('#');
            } else {
                let replace = $('#card-number').val().charAt(i);
                $('#' + i).text(replace);
            }
        }
    }
});


function onlyChar(evt) {
    if (evt.which > 31 && (evt.which < 48 || evt.which > 57)) {
        return true;
    } else {
        return false;
    }
}
