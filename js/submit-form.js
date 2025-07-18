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

        // Handle Formspree submission
        if (formAction && formAction.includes('formspree.io')) {
            var formData = new FormData(form[0]);
            
            $.ajax({
                url: formAction,
                method: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function(response) {
                    console.log('Email sent successfully!');
                    
                    // Show success message
                    const toast = new bootstrap.Toast($('.success_msg')[0]);
                    toast.show();
                    
                    // Reset button text
                    $('.submit_form').html('Submit Now');
                    
                    // Clear form and remove validation classes
                    form[0].reset();
                    form.removeClass('was-validated');
                    
                    // Clear any individual field validation states
                    form.find('.form-control').removeClass('is-valid is-invalid');
                    
                    console.log('Form reset and success message shown');
                },
                error: function(xhr) {
                    console.log('Formspree error:', xhr.status, xhr.responseText);
                    
                    // Show error message
                    const errtoast = new bootstrap.Toast($('.error_msg')[0]);
                    errtoast.show();
                    
                    // Reset button text
                    $('.submit_form').html('Submit Now');
                }
            });
        } else {
            // No valid action found
            console.log('No valid form action found');
            const errtoast = new bootstrap.Toast($('.error_msg')[0]);
            errtoast.show();
            $('.submit_form').html('Submit Now');
        }
    });
});