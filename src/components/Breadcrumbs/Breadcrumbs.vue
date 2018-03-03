<template>
    <nav>
        <div class="nav-wrapper">
            <div class="col s12 black-text">
                <a href="/" class="breadcrumb">www.valerianpolizzi.fr</a>
                <a href="/portfolio" class="breadcrumb">{{cat}}</a>
                <a href="/portfolio" class="breadcrumb">{{$route.params.item}}</a>

            </div>
        </div>
    </nav>
</template>

<style scoped>
    nav{
        padding-left: 40px;
        color: black;
    }
</style>

<script>
    export default {
        name: 'Breadcrumbs',
        props: ['cat', 'item'],
        data () {
            return {}
        },
        components: {

        },

        mounted: function () {

        },
        methods: {}
    }
</script>