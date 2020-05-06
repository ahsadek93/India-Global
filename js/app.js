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

/*

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

*/

var m = new Vue({
    el: "#section-team",
    data() {
        return {
            memberList: [{
                    id: 'm01',
                    name: 'Derick Jose & Krishnan Raman',
                    url: './assets/01.JPG',
                    title: 'Co-founders of industrial AI startup Flutura',
                    text: 'Business drivers of Industry 4.0 in a post-Covid world '
                },
                {
                    id: 'm02',
                    name: 'Chintan ',
                    url: './assets/02.JPG',
                    title: 'CXOBridge',
                    text: 'Strategies for cross-border startups in the new normal'
                },
                {
                    id: 'm03',
                    name: 'Arvind Lakshmikumar',
                    url: './assets/03.JPG',
                    title: 'Co-founder of computer vision startup Tonbo',
                    text: 'Opportunities for Deep Tech in Defence '
                },
                {
                    id: 'm04',
                    name: 'Balaji Viswanathan',
                    url: './assets/04.JPG',
                    title: 'Co-founder of Invento Robotics, maker of Mitra humanoids',
                    text: 'Robotics in era of social distancing'
                },
                {
                    id: 'm05',
                    name: 'Ben Matthias and Naganand Doraswamy',
                    url: './assets/05.JPG',
                    title: 'Managing partner of Vertex Ventures - Founder, Ideaspring Capital',
                    text: 'Investors’ outlook on the future of deep tech from India '
                },
                {
                    id: 'm06',
                    name: 'Aruna Schwarz',
                    url: './assets/06.JPG',
                    title: 'Co-founder of Stelae Technologies',
                    text: 'Go to market strategies for Indian deep tech  '
                },
                {
                    id: 'm07',
                    name: 'Martin Olausson ',
                    url: './assets/07.JPG',
                    title: 'ABB VP for global startup business development',
                    text: 'Global enterprise view on Indian deep tech startups'
                },
                {
                    id: 'm08',
                    name: 'Madhurima Agarwal ',
                    url: './assets/08.JPG',
                    title: 'Head of Netapp accelerator',
                    text: 'Corporate accelerator role in identifying opportunities from cloud migration'
                },
                {
                    id: 'm09',
                    name: 'Shridhar Marri , Satish Medapati , and Raghu Ravinutala',
                    url: './assets/09.JPG',
                    title: 'Co-founder, Senseforth - Co-founder, Intentico - CEO and co-founder of Yellow Messenger',
                    text: 'The rise of conversational AI in the wake of social distancing'
                },
                {
                    id: 'm10',
                    name: 'Harshwardhan Kumar and Josef Seuss ',
                    url: './assets/10.JPG',
                    title: 'Co-founders of BlinkIn',
                    text: 'How remote support helped in Wuhan and new use cases going forward'
                },
                {
                    id: 'm11',
                    name: 'Saurabh Chandra',
                    url: './assets/11.JPG',
                    title: 'Co-founder, Ati Motors',
                    text: 'Future possibilities of autonomous vehicles'
                },
                {
                    id: 'm12',
                    name: 'Lev Mass',
                    url: './assets/12.JPG',
                    title: 'California-based serial entrepreneur, investor and mentor',
                    text: 'Silicon Valley perspective on opportunities for Indian deep tech startups '
                },
            ]
        }
    }
})