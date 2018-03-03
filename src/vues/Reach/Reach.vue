<style scoped>
    #reach{
        background: white;

        padding-bottom: 40px;
        padding-top: 40px;
    }
</style>
<template src="./Reach.tpl.html"></template>

<script>





    export default {
        name: 'Reach',
        data () {
            return {
                'scroll' : 0
            }
        },
        components: {

        },
        mounted: function () {

            var d = document, s = d.createElement('script');
            s.src = 'https://valerianpolizzi.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        },
        methods: {
            handleScroll(){
                this.scroll += 1;
            }
        },
        beforeMount () {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>



