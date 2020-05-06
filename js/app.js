var p = new Vue({
    el: "#topNav",
    data() {
        return {
            windowTop: 0,
            isScrolled: false
        };
    },
    mounted() {
        var that = this;
        window.addEventListener("scroll", function () {
            that.windowTop = window.scrollY;
        });
    },

    watch: {
        windowTop() {
            if (this.windowTop != 0) {
                this.isScrolled = true
            } else {
                this.isScrolled = false
            }
        }
    }

});



$(document).ready(function () {

    $('.slider-wrapper').each(function () {
        $(this).slick({
            autoplay: true,
            autoplaySpeed: 10000,
            arrows: false,
            fade: true,
            speed: Math.round(Math.random() * 5000) + 2000,
            infinite: true,
            cssEase: 'ease-in-out',
            loop: true
        })
    })
});


$('.big-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 7000
        }
    }]

})