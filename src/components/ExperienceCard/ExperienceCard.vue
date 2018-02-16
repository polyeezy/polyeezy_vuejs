<style scoped>

    .title{
        font-size: 24px;
    }

    .subtitle{
        font-size: 18px ;
    }

    #experiences{
        margin-bottom: 0;
    }

</style>
<template src="./ExperienceCard.tpl.html"></template>

<script>
    export default {
        name: 'experience-card',
        props: ['title', 'subtitle', 'image', 'text', 'date', 'link']
    }
</script>
