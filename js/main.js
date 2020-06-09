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
    let visa = $('.branch img');
    if ($('#card-number').val().length == 0) {
        for (let i = 0; i < 16; i++) {
            $('#' + i).text('#');
        }
        visa.attr('src', 'images/visa.png');
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
                //console.log($('#card-number').val().substr(0, 2));
                $('#' + pos2).fadeOut(400, function () {
                    if (pos2 > 3 && pos2 < 14) {
                        $('#' + pos2).text('*').fadeIn(400);
                    } else {
                        $('#' + pos2).text(replace).fadeIn(400);
                    }
                });
                if ($('#card-number').val().substr(0, 2) == 51) {
                    console.log('master card');
                    visa.attr('src', 'images/mastercard.png');
                } else if ($('#card-number').val().substr(0, 2) == 37) {
                    console.log('american ex');
                    visa.attr('src', 'images/amex.png');
                } else if ($('#card-number').val().substr(0, 2) == 60) {
                    console.log('discover');
                    visa.attr('src', 'images/discover.png');
                } else if ($('#card-number').val().substr(0, 2) == 30) {
                    console.log('diners club');
                    visa.attr('src', 'images/dinersclub.png');
                } else if ($('#card-number').val().substr(0, 2) == 35) {
                    console.log('jcb');
                    visa.attr('src', 'images/jcb.png');
                } else {
                    console.log('visa');
                    visa.attr('src', 'images/visa.png');
                }
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
    //console.log(evt.key);

    if ($('#card-name').val().length == 0) {
        $('.print-name p').html('Will Smith');
    } else {
        $('.fill-name').html('<p data-name=first style="display:flex;"></p>');
        if (evt.key != 'Backspace' || evt.key != 'ArrowRight' || evt.key != 'ArrowLeft' || evt.key != 'ArrowUp' || evt.key != 'ArrowDown') {
            //console.log(evt.key);
            for (let i = 0; i < $('#card-name').val().length; i++) {
                let replace = $('#card-name').val().charAt(i);
                //console.log(replace);
                $('.span').removeAttr('id');
                if (replace == " ") {
                    $('p[data-name=first]').append('<span class="span" id="current" style="width:10px" data-id=' + i + '>' + replace + '</span>');
                } else {
                    $('p[data-name=first]').append('<span class="span" id="current" data-id=' + i + '>' + replace + '</span>');
                }
            }
            $('#current').hide().show('slow');
        }
    }
});

$('#card-date').on('change', () => {
    $('span[data-name= month]').fadeOut(400, function () {
        $('span[data-name= month]').html($('#card-date').val()).fadeIn(400);
    });
});

$('#card-year').on('change', () => {
    $('span[data-name= year]').fadeOut(400, function () {
        $('span[data-name= year]').html($('#card-year').val()).fadeIn(400);
    });
});

$('.popup button').on('click', () => {
    $('.popup').addClass('hide');
});

$('.submit').on('click', () => {
    $('.popup').removeClass('hide');
});




