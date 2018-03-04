<template>
    <div class="row">
        <div class="col s12 hide-on-med-and-up">
            <ul class="tabs z-depth-2 tabs-fixed-width">
                <li v-for="(category) in projects" v-bind:key="category.name"  class="tab col s3  black" v-on:click="setCategory(category)"><a class="white-text"><i :class="category.icon"></i></a></li>
            </ul>
        </div>
        <div class="col s12">
            <ul class="tabs z-depth-2 tabs-fixed-width hide-on-small-only">
               <li></li>
                <li class="tab col s3  black" v-for="(category) in categories" v-on:click="setCategory(category)" :key="category"><a class="white-text">{{category}}</a></li>
            </ul>
        </div>

        <div v-for="(project, index) in currentCategory" v-bind:key="index" class="col s12 m4 center-align black-text">
            <div class="card white">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator responsive-img" :src="project.images[0]">
                </div>
                <div class="card-content project-content">
                    <span class="card-title activator grey-text text-darken-4">{{project.title}}<i class="material-icons right">more_vert</i></span>
                    <span class="chip black white-text">{{project.year}}</span>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">{{project.name}}<i class="material-icons right">close</i></span>
                    <p class="flow-text left-align">{{project.desc}}</p>
                    <hr>
                    <span v-for="(tag, index) in project.tags" v-bind:key="index" class="chip black white-text hoverable">{{tag}}</span>
                    <hr>
                    <router-link :to="project.link" v-if="project.link"  class="green btn"><i class="material-icons right">link</i></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>

<script>

    import $ from 'jquery';
    import uniq from 'lodash/uniq'

    import PortfolioProjects from '../assets/data/portfolio/projects'

    export default {
        name: 'PortfolioGrid',
        data () {
            return {
                projects : PortfolioProjects,
                currentCategory : {},
                categories : {}
            }
        },
        components: {

        },
        mounted: function () {
            $('ul.tabs').tabs();

        },
        beforeMount: function(){
            this.categories = this.getUniqueCategories();

            this.setCategory(this.categories[0]);
        },
        methods: {
            setCategory(cat) {
                this.currentCategory = this.projects.filter(function (item) {
                    return item.theme.match(cat)
                });

                var max = 0;
                $('.project-content').each(function () {
                    max = max < $(this).height() ? $(this).height() : max;
                });
                $('.project-content').each(function () {
                    $(this).height(max);
                });
            },
            getUniqueCategories(){
                return uniq(this.projects.map(p => p.theme))
            }
        }
    }
</script>



