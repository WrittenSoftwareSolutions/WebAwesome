
$(function () {

    //Text inputs

    $('.web-form').blur(function () {

        if ($(this).val() =='') {
            $(this).removeClass('web-form');
            $(this).removeClass('web-form-success');
            $(this).addClass('web-form-error');
        }

    });

    $('.web-form').keydown(function () {

        if ($(this).val() != '') {
            $(this).removeClass('web-form-error');
            $(this).addClass('web-form-success');
        }

    });



    $('.web-form-error').blur(function () {

        if ($(this).val() == '') {
            $(this).removeClass('web-form');
            $(this).removeClass('web-form-success');
            $(this).addClass('web-form-error');
        }

    });

    $('.web-form-error').keydown(function () {

        if ($(this).val() != '') {
            $(this).removeClass('web-form-error');
            $(this).addClass('web-form-success');
        }

    });



    $('.web-form-success').blur(function () {

        if ($(this).val() == '') {
            $(this).removeClass('web-form');
            $(this).removeClass('web-form-success');
            $(this).addClass('web-form-error');
        }

    });

    $('.web-form-success').keydown(function () {

        if ($(this).val() != '') {
            $(this).removeClass('web-form-error');
            $(this).addClass('web-form-success');
        }

    });

});