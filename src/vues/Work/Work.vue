<style scoped>

    #work{
        background: #60657a;

        padding-bottom: 40px;
        padding-top: 40px;

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

    import Projects from '../../assets/data/projects';
    import Valer from '../../assets/images/portfolio/valerian.png';

    import BardeWebAppImg from '../../assets/images/portfolio/barde-webapp.png';
    import BardeIoAppImg from '../../assets/images/portfolio/bardeio.png';
    import Comparatif from '../../assets/images/portfolio/comparatif.png';
    import Covoit from '../../assets/images/portfolio/covoit.png';
    import intro from '../../assets/images/portfolio/intro.png';
    import isReport from '../../assets/images/portfolio/is-report.png';
    import MPC from '../../assets/images/portfolio/mpc_kanye.png';
    import Prolinked from '../../assets/images/portfolio/prolinked.png';
    import ReportSochic from '../../assets/images/portfolio/report-sochic.png';
    import Rpro from '../../assets/images/portfolio/rpro.png';
    import Sochic from '../../assets/images/portfolio/sochic.png';
    import StockManager from '../../assets/images/portfolio/stock-manager.png';
    import Streetr from '../../assets/images/portfolio/streetr-landing.png';
    import StreetrProto from '../../assets/images/portfolio/streetr-proto.png';
    import Dadzcover from '../../assets/images/portfolio/screenshot-2.png'
    import KanyeTo from '../../assets/images/portfolio/screenshot.png'
    import Closet from '../../assets/images/portfolio/screenshot-1.png'

    import $ from 'jquery';

    export default {
        name: 'work',
        data () {
            return {
                projects : Projects,
                images : [Valer, Streetr, StreetrProto, BardeWebAppImg, isReport, Covoit, Rpro, Comparatif, BardeIoAppImg, Prolinked, StockManager, ReportSochic
                , Sochic, KanyeTo, Closet, intro, MPC, Dadzcover, MPC]
            }
        },
        components: {

        },
        mounted: function () {
            var max = 0;
            $('.project-content').each(function(){
                max = max < $(this).height() ? $(this).height() : max;
            });
            $('.project-content').each(function(){
                $(this).height(max);
            });
        },
        methods: {}
    }
</script>



