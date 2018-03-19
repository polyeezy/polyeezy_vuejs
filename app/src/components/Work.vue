<template>
    <div class="section no-pad-bot portfolio" id="index-banner">
    <div class="container center-align">
        <br><br><br><br>
        <h3 class="white-text subtitle">has</h3>
        <span class="vp-button white-text">A PORTFOLIO</span>
        <br><br><br><br>


        <div class="row center">
            <button class="btn">{{this.name}}</button>
            <ul>

            </ul>

        </div>
        <br><br>

        <div class="row">
                <div class="col m4 s8 offset-s2 project">
                    <div class="card ">
                        <div class="card-image waves-effect waves-block waves-light hoverable">
                            <img class="activator " src="'+ elem.image + '">
                        </div>
                        <div class="card-content project-content">
                            <span class="card-title activator grey-text text-darken-4">'+ elem.title + '<i class="material-icons right">more_vert</i></span>
                            <div class="chip blue white-text">'+ elem.theme + '</div>
                            <div class="chip white-text green">'+ elem.year + '</div>
                        </div>'+
                        <div class="card-reveal">'
                            <span class="card-title grey-text text-darken-4">'+ elem.title + '<i class="material-icons right">close</i></span>
                            <a target="_blank" href="'+ elem.link + '" class="waves-effect waves-light btn red center-align"><i class="material-icons left">link</i>See in action</a><p>
                                elem.desc + '</p>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    </div>
</template>

<script>
    Vue.component('counter', {
        template: `
		<div>
			<button @click="counter++">{{ counter }}</button>
		</div>
	`,
        data: {
            counter: 0
        }
    });


</script>

<style scoped src="../assets/vp.css"></style>

