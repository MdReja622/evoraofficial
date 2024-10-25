(function ($) {
    "use strict";

    $(document).ready(function () {


        ////////////////////////////////////////////////////
        //  Data CSS Js
        $("[data-background").each(function () {
            $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
        });

        $("[data-width]").each(function () {
            $(this).css("width", $(this).attr("data-width"));
        });

        $("[data-bg-color]").each(function () {
            $(this).css("background-color", $(this).attr("data-bg-color"));
        });



        ///////////////////////////////
        // announcement swiper 

        const announcement = new Swiper('.announcement-slider', {
            loop: true,
            speed: 800,
            autoplay: {
                delay: 3000, // Time between slides (in milliseconds)
                disableOnInteraction: false, // Keep autoplay after user interactions
            },

        });




        ///////////////////////////////
        // brand slider swiper 
        // Initialize the Main Slider (Big Images) and link it with the Thumbnail Slider
        var swiper = new Swiper(".thumb-slider", {
            spaceBetween: 10,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesProgress: true,
            slideToClickedSlide: true,
            navigation: {
                nextEl: '.slider-nav .next',
                prevEl: '.slider-nav .prev',
            },
        });
        var swiper2 = new Swiper(".main-slider", {
            spaceBetween: 10,
            navigation: {
                nextEl: '.slider-nav .next',
                prevEl: '.slider-nav .prev',
            },
            thumbs: {
                swiper: swiper,
            },
        });

        ///////////////////////////////
        // paln active
        $('.plan').on('click', function () {
            // Remove 'active' class from all plans
            $('.plan').removeClass('active');

            // Add 'active' class to the clicked plan
            $(this).addClass('active');
        });

        ///////////////////////////////
        // Initialize video Swiper
        var video_swiper = new Swiper('.video-slider', {
            spaceBetween: 30,
            slidesPerView: 4,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

        });
        ///////////////////////////////
        // Play video when play button is clicked
        const playButtons = document.querySelectorAll('.play-btn');

        playButtons.forEach(button => {
            button.addEventListener('click', function () {
                const videoId = this.getAttribute('data-video');
                const video = document.getElementById(videoId);

                video.play(); // Play the video
                this.style.display = 'none'; // Hide the play button after clicking
            });
        });


        ///////////////////////////////
        // play video is clicked for feature
        // Get the video element
        const video = document.getElementById('feature_video');

        // Play the video when clicked
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });





        ///////////////////////////////
        // service slider swiper 
        const secvice_slider = new Swiper('.service-slider', {
            slidesPerView: 4,
            spaceBetween: 30,

        });

        ///////////////////////////////
        // pop cart img
        $('.popup-img').magnificPopup({
            type: 'image', // Set content type as image       
        });



        ///////////////////////////////
        // Add to Cart 
        // Function to update the state of the decrease button
        function updateButtonState() {
            const currentValue = parseInt($('#quantity').val());
            $('#decrease-btn').prop('disabled', currentValue <= 1);
        }

        // Increase quantity
        $('#increase-btn').click(function () {
            let currentValue = parseInt($('#quantity').val());
            $('#quantity').val(currentValue + 1); // Increase value by 1
            updateButtonState(); // Update button state
        });

        // Decrease quantity
        $('#decrease-btn').click(function () {
            let currentValue = parseInt($('#quantity').val());
            if (currentValue > 1) {
                $('#quantity').val(currentValue - 1); // Decrease value by 1
            }
            updateButtonState(); // Update button state
        });

        // Initial button state update
        updateButtonState();






        ///////////////////////////////
        // Initialize customer Swiper
        var customer_swiper = new Swiper('.customer-slider', {
            slidesPerView: 'auto', // Sets each slide width based on content
            spaceBetween: 15,      // Space between slides
            loop: true,            // Enables continuous looping
            allowTouchMove: false, // Disable manual swiping
            autoplay: {
                delay: 0,          // Set to zero for continuous scrolling
                disableOnInteraction: false, // Continue autoplay after user interactions
            },
            speed: 5000,          // Speed of the transition
        });
        ///////////////////////////////////
        // video banner 
        const $video = $('.video-banner #video');
        const $playButton = $('.play-button');

        // Play video and hide play button on click
        $('#videoBanner').on('click', function () {
            if ($video[0].paused) {
                $video[0].play();
                $playButton.hide(); // Hide play button once video starts
            }
        });

        // Show play button when video ends
        $video.on('ended', function () {
            $playButton.show();
        });













    });



})(jQuery);