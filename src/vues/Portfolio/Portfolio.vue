<template>
    <nav>
        <div class="nav-wrapper">
            <div class="col s12 ">
                <a href="#!" class="breadcrumb">www.valerianpolizzi.fr</a>
                <a href="#!" class="breadcrumb">{{currentItem.theme}}</a>
                <a href="#!" class="breadcrumb">{{currentItem.title}}</a>
            </div>
        </div>
    </nav>
</template>

<style>
    @media only screen and (max-width: 992px)
    nav .nav-wrapper {
        text-align: center;
    }


</style>

<script>

    import Portfolio from '../../assets/data/portfolio'

    export default {
        name: 'Portfolio',
        data () {
            return {
                currentCategory : {},
                name : '',
                currentItem : {},
                Portfolio : Portfolio
            }
        },
        components: {

        },
        mounted: function () {
            console.log(this.currentItem);
        },
        beforeMount: function(){
            var cat = this.$route.params.cat;
            var item = this.$route.params.item;


            this.currentItem = {};

            this.currentCategory = Portfolio.portfolio.categories.filter(function (item) {
                return item.name.match(cat.toUpperCase())
            })

            this.currentItem = this.currentCategory[0].projects.filter(function(project) {
                return project.link.match(item)
            });
            this.currentItem = this.currentItem[0];
            console.log(this.$route.params.item);




        },
        methods: {}
    }
</script>



