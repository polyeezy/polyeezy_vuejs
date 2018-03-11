<template>
    <div class="portfolio-item">
            <div class="col s12">
                <h3>{{item.title}} - {{item.year}}</h3>
                <h5>{{item.headline}}</h5>
                <div class="row">
                </div>
                <div class="carousel carousel-slider portfolio-slider">
                    <a v-for="image in item.images" :key="image" class="carousel-item" href="#one!"><img :src="image"></a>
                </div>
            </div>
            <div class="row">
                <div class="col l12">
                    <p v-if="item.link">
                        <a :href="item.link" target="_blank" class="waves-effect waves-light btn"><i class="material-icons right">link</i>Visit {{item.title}}</a>
                    </p>

                    <h3>Description</h3>

                    <p class="flow-text">{{item.desc}}</p>

                    <h3>Technical aspect</h3>
                        <p v-for="feature in item.features" :key="feature.name" class="flow-text">- {{feature.name}}</p>
                    <h3>Skills</h3>

                    <p v-for="skill in item.tags" :key="skill" class="chip black white-text">{{skill}}</p>
                </div>
            </div>
        <hr>
        </div>
</template>

<style scoped>


    ul li{
        padding-left: 10px;
    }

    h3{
        color: white;
        padding-bottom: 0;
        margin-bottom: 0;
    }

    h5{
        margin-top: 0;
        padding-top: 0;
        padding-bottom: 20;
    }

    h5, p{
        color: #cacaca;
    }


    .title{
        height: 100px;
    }

    .row.white{
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .title-portfolio span{
        font-size: 28px;
        line-height: 100px;
    }

    #disqus_thread{
        padding-top: 30px;
    }

    body{
        background: #60657a !important;
    }

    .portfolio-item{
        padding-top: 80px;

    }


    .breadcrumb:before{
        color: black;
    }



</style>

<script>

    import $ from 'jquery'
    export default {
        name: 'Portfolio',
        data () {
            return {
            }
        },
        props: ['item', 'index'],
        components: {

        },
        mounted: function () {
            $('.carousel.carousel-slider.portfolio-slider').carousel({fullWidth: true, indicators: true});

        },
        beforeMount: function(){
            var d = document, s = d.createElement('script');
            s.src = 'https://valerianpolizzi.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
            this.getPath();
            this.getPortfolioItem(this.currentLink);

        },
        methods: {

        }
    }
</script>



