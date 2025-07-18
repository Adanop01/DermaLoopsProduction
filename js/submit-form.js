$(function () {
    'use strict';

    // EmailJS Configuration (uncomment and configure if using EmailJS)
    // emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
    
    const forms = $('.needs-validation');

    forms.on('submit', function (event) {
        const form = $(this);
        var actionInput = $(this).find("input[name='action']");

        if (!form[0].checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            $('.submit_form').html('Sending...');
            $('.submit_subscribe').html('Sending...');
            
            const toast = new bootstrap.Toast($('.success_msg')[0]);
            const errtoast = new bootstrap.Toast($('.error_msg')[0]);

            // Check if form has Formspree action (contains formspree.io)
            const formAction = form.attr('action');
            
            if (formAction && formAction.includes('formspree.io')) {
                // Use Formspree with AJAX for better user experience
                var formData = new FormData(form[0]);
                
                $.ajax({
                    url: formAction,
                    method: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        toast.show();
                        $('.submit_form').html('Submit Now');
                        form[0].reset();
                        form.removeClass('was-validated');
                    },
                    error: function(xhr) {
                        if (xhr.status === 422) {
                            // Formspree validation error
                            errtoast.show();
                        } else {
                            // Other errors
                            errtoast.show();
                        }
                        $('.submit_form').html('Submit Now');
                    }
                });
                return;
            }
            
            // EmailJS Implementation (uncomment if using EmailJS)
            /*
            const templateParams = {
                from_name: $('#name').val(),
                from_email: $('#email').val(),
                phone: $('#phone').val(),
                message: $('#message').val(),
                to_email: 'DermaLoops@gmail.com'
            };

            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    toast.show();
                    $('.submit_form').html('Submit Now');
                    form[0].reset();
                    form.removeClass('was-validated');
                }, function(error) {
                    console.log('FAILED...', error);
                    errtoast.show();
                    $('.submit_form').html('Submit Now');
                });
            */
            
            // Fallback to original PHP method
            var formData = form.serialize();
            $.ajax({
                type: "POST",
                url: "php/form_process.php",
                data: formData,
                success: function (response) {
                    if (response === 'success') {
                        if (actionInput.length > 0) {
                            if (actionInput.val() === 'subscribe') {
                                $('.submit_subscribe').html('Subscribe');
                                const toast_comment = new bootstrap.Toast($('.success_msg_subscribe')[0]);
                                toast_comment.show();
                            }
                        } else {
                            toast.show();
                            $('.submit_form').html('Submit Now');
                        }
                    } else {
                        errtoast.show();
                        $('.submit_form').html('Submit Now');
                        $('.submit_subscribe').html('Subscribe');
                    }
                },
                error: function() {
                    errtoast.show();
                    $('.submit_form').html('Submit Now');
                }
            });
        }

        form.addClass('was-validated');
    });
});