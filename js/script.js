$(function () {
    $('.nav-btn').on('click', function () {
        $(this).toggleClass('open');
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $("#header").addClass('glass-effect');
        } else {
            $("#header").removeClass("glass-effect");
        }
    });

    const tabCourse = $('#course-tab');
    const tabDuration = $('#tab-duration');
    
    let courseActive = tabCourse.find('.tab.active');
    let dataCourseActive = courseActive.data('course');
    
    let durationActive = tabDuration.find('.tab.active');
    let dataDurationActive = durationActive.data('duration');    
    
    filterClasses(dataCourseActive);
    filterDuration(dataDurationActive);

    tabCourse.find('.tab').on('click' , function(e){
        e.preventDefault();
        let course = $(this).data('course');
        filterClasses(course);
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    tabDuration.find('.tab').on('click' , function(e){
        e.preventDefault();
        let duration = $(this).data('duration');
        filterDuration(duration);
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    function filterClasses(course) {    
        if (course === 'all') {
            $('.class-course').addClass('active');
        } else {
            $('.class-course').each(function() {
                const courses = $(this).attr('data-courses') || '';
                if (courses.includes(course)) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        }
    }
    
    function filterDuration(duration) {
        if (duration === 'all') {
            $('.class-duration').addClass('active');
        } else {
            $('.class-duration').each(function() {
                const durations = $(this).attr('data-duration') || '';
                if (durations.includes(duration)) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        }
    }
})

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function animateNumber(element, targetNumber, duration) {
    const startTime = performance.now();
    const startNumber = 0;

    function updateNumber(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentNumber = Math.floor(startNumber + progress * (targetNumber - startNumber));

        element.innerText = formatNumber(currentNumber);

        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}

function checkScroll() {
    const numberElements = document.querySelectorAll('.number');
    numberElements.forEach(element => {
        // Periksa jika elemen sudah dianimasikan
        if (!element.classList.contains('animated')) {
            const targetValue = parseInt(element.getAttribute("data-target"), 10);
            const durationValue = parseInt(element.getAttribute("data-duration"), 10);
            
            // Memeriksa apakah elemen muncul di viewport
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                animateNumber(element, targetValue, durationValue);
                element.classList.add('animated'); // Tandai elemen sudah dianimasikan
            }
        }
    });
}

// Menambah event listener untuk scroll
window.addEventListener('scroll', checkScroll);

$(document).ready(function() {
    $('.marquee-container').each(function() {
        const cont = $(this); // Mengambil marquee-container saat ini
        const content = cont.find('.marquee-content');
        const clone = content.clone();
        const clone2 = clone.clone();
        cont.append(clone);
        cont.append(clone2); // Clone hanya untuk container ini
        
        cont.find('.marquee-content').addClass('marquee'); // Tambahkan class marquee pada konten yang di-clone
    });
});

