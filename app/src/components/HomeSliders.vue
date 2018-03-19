<template>
    <div class="carousel carousel-slider center" data-indicators="true">
        <div class="carousel-fixed-item center">
        </div>
        <HomeSlider button="A DEVELOPER" lego="main-lego" text="Valérian completed his bachelor degree in Epitech Computer Software Engineering (2017) as he heading in Brussels, to pursue a program focusing on innovation and entrepreneurship."></HomeSlider>
        <HomeSlider button="A FREELANCER" lego="main-lego" text="Valérian was build with two hands. He can handle his studies while doing freelance."></HomeSlider>
        <HomeSlider button="AN HYPEBEAST" lego="main-lego" text="
        <HomeSlider button="A GENIUS" lego="main-lego" text="Name one genius that ain’t crazy."></HomeSlider>
    </div>
</template>

<script>
    import '../assets/vp.css'
    import HomeSlider from './AboutSlide/AboutSlide'

        export default {
            name: 'home-sliders',
            components: {
                HomeSlider,
            },
            props: ['title']

        }
</script>

<style scoped src="../assets/vp.css"></style>


