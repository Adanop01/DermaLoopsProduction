$(function () {
    'use strict';

    const forms = $('.needs-validation');

    forms.on('submit', function (event) {
        event.preventDefault();
        
        const form = $(this);
        const formAction = form.attr('action');

        if (!form[0].checkValidity()) {
            event.stopPropagation();
            form.addClass('was-validated');
            return;
        }

        $('.submit_form').html('Sending...');
        
        const toast = new bootstrap.Toast($('.success_msg')[0]);
        const errtoast = new bootstrap.Toast($('.error_msg')[0]);

        // Handle Formspree submission
        if (formAction && formAction.includes('formspree.io')) {
            var formData = new FormData(form[0]);
            
            $.ajax({
                url: formAction,
                method: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function() {
                    toast.show();
                    $('.submit_form').html('Submit Now');
                    form[0].reset();
                    form.removeClass('was-validated');
                },
                error: function(xhr) {
                    console.log('Formspree error:', xhr.status, xhr.responseText);
                    errtoast.show();
                    $('.submit_form').html('Submit Now');
                }
            });
        } else {
            // No valid action found
            errtoast.show();
            $('.submit_form').html('Submit Now');
        }
    });
});