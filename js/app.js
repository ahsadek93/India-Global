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


var m = new Vue({
    el: "#section-team",
    data() {
        return {
            memberList: [{
                    id: 'm01',
                    name: 'Derick Jose & Krishnan Raman',
                    url: './assets/photos/01.jpg',
                    title: 'Co-founders of industrial AI startup Flutura',
                    text: 'Business drivers of Industry 4.0 in a post-Covid world ',
                    soloPic: false
                },
                {
                    id: 'm02',
                    name: 'Chintan ',
                    url: './assets/photos/02.jpg',
                    title: 'CXOBridge',
                    text: 'Strategies for cross-border startups in the new normal',
                    soloPic: true

                },
                {
                    id: 'm03',
                    name: 'Arvind Lakshmikumar',
                    url: './assets/photos/03.jpg',
                    title: 'Co-founder of computer vision startup Tonbo',
                    text: 'Opportunities for Deep Tech in Defence ',
                    soloPic: true
                },
                {
                    id: 'm04',
                    name: 'Balaji Viswanathan',
                    url: './assets/photos/04.jpg',
                    title: 'Co-founder of Invento Robotics, maker of Mitra humanoids',
                    text: 'Robotics in era of social distancing',
                    soloPic: true

                },
                {
                    id: 'm05',
                    name: 'Ben Matthias and Naganand Doraswamy',
                    url: './assets/photos/05.jpg',
                    title: 'Managing partner of Vertex Ventures - Founder, Ideaspring Capital',
                    text: 'Investors’ outlook on the future of deep tech from India ',
                    soloPic: false
                },
                {
                    id: 'm06',
                    name: 'Aruna Schwarz',
                    url: './assets/photos/06.jpg',
                    title: 'Co-founder of Stelae Technologies',
                    text: 'Go to market strategies for Indian deep tech  ',
                    soloPic: true
                },
                {
                    id: 'm07',
                    name: 'Martin Olausson ',
                    url: './assets/photos/07.jpg',
                    title: 'ABB VP for global startup business development',
                    text: 'Global enterprise view on Indian deep tech startups',
                    soloPic: true
                },
                {
                    id: 'm08',
                    name: 'Madhurima Agarwal ',
                    url: './assets/photos/08.jpg',
                    title: 'Head of Netapp accelerator',
                    text: 'Corporate accelerator role in identifying opportunities from cloud migration',
                    soloPic: true
                },
                {
                    id: 'm09',
                    name: 'Raghu Ravinutala and Satish Medapati ',
                    url: './assets/photos/09.jpg',
                    title: 'CEO and co-founder of Yellow Messenger - Co-founder, Intentico',
                    text: 'The rise of conversational AI in the wake of social distancing',
                    soloPic: false
                },
                {
                    id: 'm10',
                    name: 'Harshwardhan Kumar and Josef Seuss ',
                    url: './assets/photos/10.jpg',
                    title: 'Co-founders of BlinkIn',
                    text: 'How remote support helped in Wuhan and new use cases going forward',
                    soloPic: true
                },
                {
                    id: 'm11',
                    name: 'Saurabh Chandra',
                    url: './assets/photos/11.jpg',
                    title: 'Co-founder, Ati Motors',
                    text: 'Future possibilities of autonomous vehicles',
                    soloPic: true
                },
                {
                    id: 'm12',
                    name: 'Lev Mass',
                    url: './assets/photos/12.jpg',
                    title: 'California-based serial entrepreneur, investor and mentor',
                    text: 'Silicon Valley perspective on opportunities for Indian deep tech startups ',
                    soloPic: true
                },
            ]
        }
    }
})




var par = new Vue({
    el: '#partner',
    data() {
        return {
            formData: {
                firstName: null,
                lastName: null,
                email: null,
                phone: null,
                company: null,
                jobTitle: null
            },
            error: {
                firstNameInvalid: null,
                lastNameInvalid: null,
                emailInvalid: null,
                phoneInvalid: null,
                companyInvalid: null,
                jobTitleInvalid: null,
            }

        }
    },

    methods: {

        checkFirstName() {
            if (this.formData.firstName && this.formData.firstName !== ' ') {
                this.error.firstNameInvalid = false
            } else {
                this.error.firstNameInvalid = true
            }
        },
        checkLastName() {
            if (this.formData.lastName && this.formData.lastName !== ' ') {
                this.error.lastNameInvalid = false
            } else {
                this.error.lastNameInvalid = true
            }
        },
        checkEmail() {
            if (this.formData.email && this.formData.email !== ' ') {
                this.error.emailInvalid = false
            } else {
                this.error.emailInvalid = true
            }
        },

        checkPhone() {
            if (this.formData.phone && this.formData.phone !== ' ') {
                this.error.phoneInvalid = false
            } else {
                this.error.phoneInvalid = true
            }
        },

        checkCompany() {
            if (this.formData.company && this.formData.company !== ' ') {
                this.error.companyInvalid = false
            } else {
                this.error.companyInvalid = true
            }
        },

        checkJobTitle() {
            if (this.formData.jobTitle && this.formData.jobTitle !== ' ') {
                this.error.jobTitleInvalid = false
            } else {
                this.error.jobTitleInvalid = true
            }
        },




        checkForm() {
            this.checkFirstName();
            this.checkLastName();
            this.checkEmail();
            this.checkPhone();
            this.checkCompany();
            this.checkJobTitle();
        },
    }


})



var par = new Vue({
    el: '#download',
    data() {
        return {
            formData: {
                firstName: null,
                lastName: null,
                email: null,
                phone: null,
                company: null,
                jobTitle: null
            },
            error: {
                firstNameInvalid: null,
                lastNameInvalid: null,
                emailInvalid: null,
                phoneInvalid: null,
                companyInvalid: null,
                jobTitleInvalid: null,
            }

        }
    },

    methods: {

        checkFirstName() {
            if (this.formData.firstName && this.formData.firstName !== ' ') {
                this.error.firstNameInvalid = false
            } else {
                this.error.firstNameInvalid = true
            }
        },
        checkLastName() {
            if (this.formData.lastName && this.formData.lastName !== ' ') {
                this.error.lastNameInvalid = false
            } else {
                this.error.lastNameInvalid = true
            }
        },
        checkEmail() {
            if (this.formData.email && this.formData.email !== ' ') {
                this.error.emailInvalid = false
            } else {
                this.error.emailInvalid = true
            }
        },

        checkPhone() {
            if (this.formData.phone && this.formData.phone !== ' ') {
                this.error.phoneInvalid = false
            } else {
                this.error.phoneInvalid = true
            }
        },

        checkCompany() {
            if (this.formData.company && this.formData.company !== ' ') {
                this.error.companyInvalid = false
            } else {
                this.error.companyInvalid = true
            }
        },

        checkJobTitle() {
            if (this.formData.jobTitle && this.formData.jobTitle !== ' ') {
                this.error.jobTitleInvalid = false
            } else {
                this.error.jobTitleInvalid = true
            }
        },




        checkForm() {
            this.checkFirstName();
            this.checkLastName();
            this.checkEmail();
            this.checkPhone();
            this.checkCompany();
            this.checkJobTitle();
        },
    }


})