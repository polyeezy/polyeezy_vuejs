<template src="./Experience.tpl.html"></template>
<style>
    #experiences{
        padding-top: 40px;
        background: #E8C46E;
    }
</style>
<script>

    import ExperienceCard from '../../components/ExperienceCard/ExperienceCard.vue'
    import ExperienceData from '../../assets/data/experiences.json'

    import GSK from '../../assets/images/experiences/GSK.jpg'
    import EPITECH from '../../assets/images/experiences/epitech.jpg'

    export default {
        name: 'experience',
        data () {
            return {
                experiences : ExperienceData,
                images : [GSK, EPITECH]
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



