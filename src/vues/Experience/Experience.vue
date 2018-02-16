<template src="./Experience.tpl.html"></template>
<style scoped>
    #experiences{
        padding-top: 40px;
        background: #E8C46E;
    }

    .row .center{
        margin-top: 20px;
    }
</style>
<script>

    import ExperienceCard from '../../components/ExperienceCard/ExperienceCard.vue'
    import ExperienceData from '../../assets/data/experiences.json'

    import GSK from '../../assets/images/experiences/GSK.jpg'
    import EPITECH from '../../assets/images/experiences/epitech.jpg'
    import EPITECH2 from '../../assets/images/experiences/epitech.jpg'
    import INSTANT from '../../assets/images/experiences/IS-logo.png'
    import HACKPOMPIER from '../../assets/images/experiences/hackapomier.jpg'
    import SOCHIC from '../../assets/images/experiences/sochic-16x9.jpg'
    import EPITECH3 from '../../assets/images/experiences/epitech.jpg'
    import BTS from '../../assets/images/experiences/bts_sio.png'
    import PROLINKED from '../../assets/images/experiences/Prolinked-16x9.jpg'
    export default {
        name: 'experience',
        data () {
            return {
                experiences : ExperienceData,
                images : [GSK, EPITECH, EPITECH2, INSTANT, HACKPOMPIER, SOCHIC, PROLINKED, EPITECH3, BTS]
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



