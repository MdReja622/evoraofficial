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










    });



})(jQuery);