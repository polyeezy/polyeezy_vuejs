<template>
    <div class="row">
        <div class="col s12 hide-on-med-and-up">
            <ul class="tabs z-depth-2 tabs-fixed-width">
                <li class="tab col s3  black" v-for="(category) in categories" v-on:click="setCategory(category)" :key="category"><a class="white-text">{{category}}</a></li>
            </ul>
        </div>
        <div class="col s12">
            <ul class="tabs z-depth-2 tabs-fixed-width hide-on-small-only">
                <li class="tab col s3  black" v-for="(category) in categories" v-on:click="setCategory(category)" :key="category"><a class="white-text">{{category}}</a></li>
            </ul>
        </div>


        <transition name="card">
            <PortfolioItem v-if="item.show" :index="index" :item="item.data"></PortfolioItem>
        </transition>

        <transition-group name="card">
        <div v-for="(project, index) in currentCategory" v-if="!item.show || item.data != project" v-bind:key="index" class="col s12 m4 center-align black-text">

            <div class="card white">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator responsive-img" :src="project.images[0]">
                </div>
                <div class="card-content project-content">
                    <span class="card-title activator grey-text text-darken-4">{{project.title}}<i class="material-icons right">more_vert</i></span>
                    <span class="chip black white-text">{{project.year}}</span>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">{{project.title}}<i class="material-icons right">close</i></span>
                    <p class="flow-text left-align">{{project.headline}}</p>
                    <button v-on:click="setItem(project)" class="green btn">MORE ABOUT {{project.title}}<i class="material-icons right"></i></button>
                </div>
            </div>
        </div>
        </transition-group>

    </div>
</template>

<style scoped>



    .responsive-img{
        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }

    .responsive-img:hover {
        -moz-transform: scale(1.3);
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }

    .card-item {
        display: inline-block;
        margin-right: 10px;
    }
    .card-enter-active, .card-leave-active {
        transition: all 1s;
    }
    .card-enter, .card-leave-to /* .list-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
</style>

<script>

    import $ from 'jquery';
    import uniq from 'lodash/uniq'
    import PortfolioItem from '../vues/Portfolio/Portfolio'
    import PortfolioProjects from '../assets/data/portfolio/projects'

    export default {
        name: 'PortfolioGrid',
        data () {
            return {
                projects : PortfolioProjects,
                currentCategory : {},
                categories : {},
                item : {
                    show : false,
                    reload : false,
                    data : {}
                }
            }
        },
        components: {
            PortfolioItem
        },
        mounted: function () {
            $('ul.tabs').tabs();

            var max = 0;
            $('.project-content').each(function () {
                max = max < $(this).height() ? $(this).height() : max;
            });
            $('.project-content').each(function () {
                $(this).height(max);
            });

        },
        beforeMount: function(){
            this.categories = this.getUniqueCategories();
            this.setCategory(this.getUniqueCategories()[0]);



        },
        methods: {

            setItem(item){
                $('.carousel.carousel-slider.portfolio-slider').carousel('destroy');

                this.item.show = false;


                $('html, body').animate({
                    scrollTop:$('#portfolio').offset().top - 50
                }, 'slow');



            this.item.data = item;
            this.item.reload = true;
            this.item.show = true;


                setTimeout(
                    function()
                    {
                        $('.carousel.carousel-slider.portfolio-slider').carousel({fullWidth: true, indicators: true});

                    }, 500);


            },


            setCategory(cat) {

                this.item.show = false;

                this.currentCategory = this.projects.filter(function (item) {
                    return item.theme.match(cat)
                });


            },
            getUniqueCategories(){
                return uniq(this.projects.map(p => p.theme))
            }
        }
    }
</script>



