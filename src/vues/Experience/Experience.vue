<template src="./Experience.tpl.html"></template>
<style scoped>
    #experiences{
        padding-top: 40px;
        background: #E8C46E;
    }

    .row .center{
        margin-top: 20px;
    }
    @font-face {
        font-family: 'Work Sans';
        src: url('/fonts/WorkSans/WorkSans-Regular.otf') format("opentype");
    }
</style>
<script>

    import ExperienceCard from '../../components/ExperienceCard/ExperienceCard.vue'
    import ExperienceData from '../../assets/data/experiences.json'

    export default {
        name: 'experience',
        data () {
            return {
                experiences : ExperienceData,
            }
        },
        components: {
            ExperienceCard
        },
        mounted: function () {

        },
        methods: {}
    }
</script>



