<template src="./Footer.tpl.html"></template>
<style scoped>
    .share li, .inspi li {
        margin-bottom: 5px;
    }

    .btn{
        width: 160px !important;
    }

    .page-footer{
        background: #f8ee69;
    }

</style>
<script>
        import $ from 'jquery'
    export default {
        name: 'footer',
        data () {
            return {
            }
        },
        components: {
        },
        mounted: function () {
            $('.tooltipped').tooltip({delay: 50});


        },
        methods: {

        }
    }


</script>

