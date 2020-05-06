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
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        loop: true,
        infinite: true,
        arrows: true
    });

});



$('.slider-wrapper').each(function () {
    $(this).slick({
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: false,
        fade: true,
        speed: Math.round(Math.random() * 5000) + 2000,
        infinite: true,
        cssEase: 'ease-in-out',
        loop: true
    })
})