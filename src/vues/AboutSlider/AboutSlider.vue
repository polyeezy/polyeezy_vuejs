<style scoped src="./AboutSlider.css"></style>

<template src="./AboutSlider.tpl.html"></template>

<script>
    import AboutSlide from '../../components/AboutSlide/AboutSlide.vue'
    import SlidesData from '../../assets/data/aboutSlides.json'
    import LegoMain from '../../assets/images/legos/main-lego.png'
    import LegoDev from '../../assets/images/legos/Dev.png'
    import LegoFree from '../../assets/images/legos/Desktop HD.png'
    import LegoHype from '../../assets/images/legos/Hypebeast.png'
    import LegoGenuis from '../../assets/images/legos/Genius.png'

    import $ from 'jquery'

    export default {
        name: 'about-slider',
        data () {
            return {
                "slides" : SlidesData,
                "legos" : [LegoMain, LegoDev, LegoFree, LegoHype, LegoGenuis]
            }
        },
        components: {
            AboutSlide
        },
        mounted: function () {
            $('.carousel.carousel-slider').carousel({fullWidth: true});
        },
        methods: {}
    }


</script>

