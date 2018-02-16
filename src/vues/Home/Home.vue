<template src="./Home.tpl.html"></template>
<style>
    @font-face {
        font-family: 'Work Sans';
        src: url('/fonts/WorkSans/WorkSans-Regular.otf') format("opentype");
    }
</style>
<script>
    import Navbar from '../../components/Navbar/Navbar.vue'
    import AboutSlider from '../../vues/AboutSlider/AboutSlider.vue'
    import Mindset from '../../vues/Mindset/Mindset.vue'
    import Work from '../../vues/Work/Work.vue'
    import Experience from '../../vues/Experience/Experience.vue'
    import Footer from '../../components/Footer/Footer.vue'

    import $ from 'jquery'

    export default {
        name: 'app',
        data () {
            return {}
        },
        components: {
            Navbar,
            AboutSlider,
            Mindset,
            Work,
            Experience,
            Footer
        },
        mounted: function () {
            $(document).ready(function(){
                $('.carousel.carousel-slider').carousel({fullWidth: true});
                $('.tooltipped').tooltip({delay: 50});

                $('#feature').click(function(){
                    $('.tap-target').tapTarget('open');
                });

            });
        },
        methods: {}
    }
</script>



