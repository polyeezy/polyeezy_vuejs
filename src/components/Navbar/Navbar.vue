<template src="./Navbar.tpl.html"></template>

<style scoped src="./Navbar.css"></style>

<script>
    import $ from 'jquery'

    export default {
        name: 'navbar',
        data () {
            return {
            }
        },
        components: {
        },
        mounted: function () {

            $('.scrollspy').scrollSpy({
                scrollOffset: 60
            });

            $(".button-collapse").sideNav();

        },
        methods: {
            initNavbar(){
            },
            addShadowNav(){
                $('nav').removeClass('z-depth-0');
                $('nav').addClass('z-depth-2');
            },
            removeShadowNav(){
                $('nav').removeClass('z-depth-2');
                $('nav').addClass('z-depth-0');
            }
        }
    }

    var lastScroll = $(document).scrollTop();
    $(window).scroll(function() {
        var newScroll = $(document).scrollTop();
        if (lastScroll > 400){
            $('nav').removeClass('z-depth-0');
            $('nav').addClass('z-depth-2');
        }else{
            $('nav').removeClass('z-depth-2');
            $('nav').addClass('z-depth-0');
        }
        lastScroll = newScroll;
    });

</script>

