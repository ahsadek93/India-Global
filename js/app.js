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


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    loop: true,
    loopFillGroupWithBlank: false,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});