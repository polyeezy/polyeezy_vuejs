<template src="./Home.tpl.html"></template>

<script>
    import Navbar from '../../components/Navbar/Navbar.vue'
    import AboutSlider from '../../vues/AboutSlider/AboutSlider.vue'
    import Mindset from '../../vues/Mindset/Mindset.vue'
    import Work from '../../vues/Work/Work.vue'
    import Experience from '../../vues/Experience/Experience.vue'

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
            Experience
        },
        mounted: function () {
            $(document).ready(function(){
                $('.carousel.carousel-slider').carousel({fullWidth: true});
                $('.tooltipped').tooltip({delay: 50});

            });
        },
        methods: {}
    }
</script>



