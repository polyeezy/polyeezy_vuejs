<template src="./Home.tpl.html"></template>
<style scoped>
    @font-face {
        font-family: 'Work Sans';
        src: url('/fonts/WorkSans/WorkSans-Regular.otf') format("opentype");
    }

    body{
        background: #F8EE69;
    }
</style>
<script>
    import Navbar from '../../components/Navbar/Navbar.vue'
    import AboutSlider from '../../vues/AboutSlider/AboutSlider.vue'
    import Mindset from '../../vues/Mindset/Mindset.vue'
    import Work from '../../vues/Work/Work.vue'
    import Experience from '../../vues/Experience/Experience.vue'
    import Reach from '../../vues/Reach/Reach'
    import Footer from '../../components/Footer/Footer.vue'


    import $ from 'jquery'
    import Materialize from 'materialize-css/dist/js/materialize.min'

    export default {
        name: 'app',
        data () {
            return {
                loaded: 0,
                loading: null,
                loadStyle: {
                    width: '0%'
                },
                statusElem: $('[status]'),
                loader: $('[loader]'),
                body: $('body')
            }
        },
        components: {
            Navbar,
            AboutSlider,
            Mindset,
            Work,
            Experience,
            Reach,
            Footer
        },
        watch: {
            loaded(){
                this.loadStyle.width = `${this.loaded}%`;
            }
        },
        mounted: function () {

            var options = [
                {
                    selector: '#human-being', offset: window.innerHeight, function(){
                        this.$router.replace('about');
                        console.log('hu');
                    }
                },
            ];
            Materialize.scrollFire(options);

            this.preloader = $('.preloader');
            this.removeScrolling();
            this.startLoading();

            $(document).ready(function(){



                $('.carousel.carousel-slider').carousel({fullWidth: true});
                $('.tooltipped').tooltip({delay: 50});

                $('#feature').click(function(){
                    $('.tap-target').tapTarget('open');
                });
            });


            console.log(window.innerHeight);



        },
        methods: {
            removeScrolling(){
                $('html, body').animate({
                    scrollTop: 0
                }, 800);
                this.body.css('overflow','hidden');
            },
            startLoading(){
                this.loading = setInterval(this.load, 20);
            },
            load(){
                this.loaded < 100 ? this.loaded++ : this.doneLoading();
            },
            doneLoading(){
                clearInterval(this.loading);
                this.updateStatus();
            },
            updateStatus(){
                this.statusElem.text('Lets get crazay !');
                this.loader.fadeOut();
                this.animatePreloader();
            },
            animatePreloader(){
                let app        = this,
                    height     = this.preloader.height(),
                    properties = {
                        'margin-top': `-${height}`
                    },
                    options    = {
                        duration: 1000,
                        easing: 'swing',
                        complete(){
                            app.removePreloader()
                        }
                    };
                this.preloader.delay(500).animate(properties, options)
            },
            removePreloader(){
                this.preloader.remove();
                this.body.removeAttr('style');
                this.animateWebsite();
            },
            animateWebsite(){
                console.log('lets get pretty');
            }
        }
    }

</script>



