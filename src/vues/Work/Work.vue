<style scoped>

    #portfolio{
        background: #60657a;
        padding-bottom: 40px;
        padding-top: 40px;
    }

    @font-face {
        font-family: 'Work Sans';
        src: url('/fonts/WorkSans/WorkSans-Regular.otf') format("opentype");
    }

    .active{
        background: #F8EE69;
        color: black;
    }


    .tabs{

    }

</style>
<template src="./Work.tpl.html"></template>

<script>


    import PortfolioGrid from '../../components/PortfolioGrid'

    export default {
        name: 'work',
        data () {
            return {
            }
        },
        components: {
            PortfolioGrid
        },
        mounted: function () {


        },
        methods: {


        }
    }
</script>



