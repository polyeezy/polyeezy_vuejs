<style scoped src="./AboutSlider.css"></style>

<template src="./AboutSlider.tpl.html"></template>

<script>
    import AboutSlide from '../../components/AboutSlide/AboutSlide.vue'
    import SlidesData from '../../assets/data/aboutSlides.json'

    import $ from 'jquery'

    export default {
        name: 'about-slider',
        data () {
            return {
                "slides" : SlidesData
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

