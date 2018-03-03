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

(function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    import Portfolio from '../../assets/data/portfolio'


    import $ from 'jquery';

    export default {
        name: 'work',
        data () {
            return {
                categories : {},
                allProjects : {},
                portfolio: Portfolio
            }
        },
        components: {

        },
        mounted: function () {



            this.setCategory("WEB")
            $('ul.tabs').tabs();

            var max = 0;
            $('.project-content').each(function(){
                max = max < $(this).height() ? $(this).height() : max;
            });
            $('.project-content').each(function(){
                $(this).height(max);
            });
        },
        methods: {
            setCategory(cat) {

                this.categories = Portfolio.portfolio.categories.filter(function (item) {
                    console.log(item);
                    return item.name.match(cat)
                })

            }

        }
    }
</script>



