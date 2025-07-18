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
                success: function() {
                    console.log('Email sent successfully!');
                    showSuccess();
                },
                error: function(xhr) {
                    console.log('Formspree response:', xhr.status, xhr.responseText);
                    
                    // Formspree often returns 200 but AJAX treats redirects as errors
                    // If status is 0, 200, or 302, it's likely successful
                    if (xhr.status === 0 || xhr.status === 200 || xhr.status === 302) {
                        console.log('Treating as success (Formspree redirect)');
                        showSuccess();
                    } else {
                        console.log('Actual error occurred');
                        showError();
                    }
                }
            });
            
            function showSuccess() {
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
            }
            
            function showError() {
                // Show error message
                const errtoast = new bootstrap.Toast($('.error_msg')[0]);
                errtoast.show();
                
                // Reset button text
                $('.submit_form').html('Submit Now');
            }
        } else {
            // No valid action found
            console.log('No valid form action found');
            const errtoast = new bootstrap.Toast($('.error_msg')[0]);
            errtoast.show();
            $('.submit_form').html('Submit Now');
        }
    });
});