<template>
    <div class="portfolio-item">
        <div class="container">
            <div class="col s12">
                <h3>{{item.title}} - {{item.year}}</h3>
                <h5>{{item.headline}}</h5>
                <div class="row">

                </div>
                <div class="carousel carousel-slider">
                    <a v-for="image in item.images" :key="image" class="carousel-item" href="#one!"><img :src="image"></a>
                </div>
            </div>
            <div class="row">
                <div class="col l8">
                    <p class="flow-text">{{item.desc}}</p>

                    <h3>Features</h3>
                    <ul class="row">
                        <li v-for="feature in item.features" :key="feature.name"><h5 class="feature-title">- {{feature.name}}</h5></li>
                    </ul>

                </div>
                <div class="col l4">
                    <h3>Skills</h3>

                            <span v-for="skill in item.tags" :key="skill" class="chip black white-text">{{skill}}</span>

                </div>
            </div>
            <div class="row">
                <div class="col s12 white">

                </div>

            </div>
        </div>

        <div class="row white">

            <div class="container">
            </div>

        </div>



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
    }

    h5, p, .feature-title{
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
        padding-top: 100px;

    }


    .carousel{
        margin-top: 40px;
    }

    .breadcrumb:before{
        color: black;
    }


    .carousel .indicators{
        background-color: rgba(10, 10, 10, 0.1);

    }

    .carousel .indicators .indicator-item.active {
        background-color: black;
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
        props: ['item'],
        components: {

        },
        mounted: function () {


            $('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true});


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



