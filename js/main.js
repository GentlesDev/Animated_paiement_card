var today = new Date();
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

$('span[data-name= month]').html(mm);
$('span[data-name= sep]').html(' / ');
$('span[data-name= year]').html(yyyy);

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
                let pos = $('#card-number').val().length;
                // console.log($('#card-number').val().length);
                $('#' + pos).fadeOut(400, function () {
                    $('#' + pos).text('#').fadeIn(400);
                });
            } else {
                let pos2 = $('#card-number').val().length - 1;
                let replace = $('#card-number').val().charAt(i);
                $('#' + pos2).fadeOut(400, function () {
                    $('#' + pos2).text(replace).fadeIn(400);
                });
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

$('#card-name').on('keyup', (evt) => {
    if ($('#card-name').val().length == 0) {
        $('.print-name p').html('Will Smith');
    } else {
        $('.fill-name').html('<p></p>');
        for (let i = 0; i < $('#card-name').val().length; i++) {
            if (evt.key != 'Backspace') {
                let replace = $('#card-name').val().charAt(i);
                $('.fill-name').fadeOut(400, function () {
                    $('.fill-name').append('<p data-id=' + i + '>' + replace + '</p>').fadeIn(400);
                });
            } else if (evt.key === 'Backspace') {
                $('.fill-name').fadeOut(400, function () {
                    $('.fill-name').html($('#card-name').val()).fadeIn(400);
                });
            }
        }
    }
});

$('#card-date').on('change', () => {
    $('span[data-name= month]').fadeOut(400, function () {
        $('span[data-name= month]').html($('#card-date').val()).fadeIn(400);
    });
})

$('#card-year').on('change', () => {
    $('span[data-name= year]').fadeOut(400, function () {
        $('span[data-name= year]').html($('#card-year').val()).fadeIn(400);
    });
})





