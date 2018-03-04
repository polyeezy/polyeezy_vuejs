<template>
    <div id="portfolio-item">
        <div class="container">
            <div class="col s12">
                <h3>{{currentItem[0].title}} - {{currentItem[0].year}}</h3>
                <h5>{{currentItem[0].headline}}</h5>
                <div class="row">

                </div>
                <div class="carousel carousel-slider">
                    <a v-for="image in currentItem[0].images" :key="image" class="carousel-item" href="#one!"><img :src="image"></a>
                    <a v-for="image in currentItem[0].images" :key="image" class="carousel-item" href="#one!"><img :src="image"></a>
                </div>
            </div>
            <div class="row">
                <div class="col l8">
                    <h3>Description</h3>

                    <p class="flow-text">{{currentItem[0].desc}}</p>

                    <h3>Features</h3>
                    <ul class="row">
                        <li v-for="feature in currentItem[0].features" :key="feature.name"><h5 class="feature-title">- {{feature.name}}</h5></li>
                    </ul>

                </div>
                <div class="col l4">
                    <h3>Skills</h3>
                    <ul>
                        <li>
                            <span v-for="skill in currentItem[0].tags" :key="skill" class="chip black white-text">{{skill}}</span>
                        </li>
                    </ul>

                </div>
            </div>
            <div class="row">
                <div class="col s12 white">

                </div>

            </div>
        </div>

        <div class="row white">

            <div class="container">
                <div id="disqus_thread"></div>
            </div>

        </div>



    </div>
</template>

<style>

    ul li{
        padding-left: 10px;
    }

    h3, .feature-title{
        color: white;
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

    #portfolio-item{
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

    import Portfolio from '../../assets/data/portfolio/projects'
    import $ from 'jquery'
    export default {
        name: 'Portfolio',
        data () {
            return {
                Portfolio : Portfolio,
                currentItem : {},
                currentLink : ""
            }
        },
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
            getPath(){
                this.currentLink = this.$route.params.portfolio;
            },
            getPortfolioItem(link){
                this.currentItem = Portfolio.filter(function (item) {
                    return item.link.match(link);
                });
                console.log(this.currentItem);
            }
        }
    }
</script>



