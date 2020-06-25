<template>
	<div class="section">
		<div class="container">
			<h1 class="title is-size-1">{{$t('home.skills.title')}}</h1>
			<div class="columns">
				<div class="column">
					<h2 class="is-size-4">{{$t('home.skills.language')}}</h2>
					<label class="is-block" for="php-skill">PHP</label><progress id="php-skill" class="progress is-small" value="70" max="100">70%</progress>
					<label class="is-block" for="js-skill">JS</label><progress id="js-skill" class="progress is-small" value="65" max="100">65%</progress>
					<label class="is-block" for="csharp-skill">C#</label><progress id="csharp-skill" class="progress is-small" value="55" max="100">55%</progress>

					<h2 class="is-size-4">{{$t('home.skills.framework')}}</h2>
					<label class="is-block" for="symfony-skill">Symfony</label><progress id="symfony-skill" class="progress is-small" value="35" max="100">35%</progress>
					<label class="is-block" for="vuejs-skill">VueJS</label><progress id="vuejs-skill" class="progress is-small" value="65" max="100">65%</progress>
					<label class="is-block" for="nuxt-skill">NuxtJS</label><progress id="nuxt-skill" class="progress is-small" value="50" max="100">50%</progress>
					<label class="is-block" for="react-skill">React</label><progress id="react-skill" class="progress is-small" value="15" max="100">15%</progress>

					<h2 class="is-size-4">{{$t('home.skills.ui-ux')}}</h2>
					<label class="is-block" for="ux-skill">User Experience</label><progress id="ux-skill" class="progress is-small" value="20" max="100">20%</progress>
					<label class="is-block" for="ui-skill">User Interface</label><progress id="ui-skill" class="progress is-small" value="25" max="100">25%</progress>
					<label class="is-block" for="maquettage-skill">Maquettage</label><progress id="maquettage-skill" class="progress is-small" value="45" max="100">45%</progress>
				</div>
				<div class="column">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis commodi, delectus eaque error est eum harum ipsum magnam, molestias nostrum nulla pariatur porro provident quia sed velit voluptatem. Deleniti.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis commodi, delectus eaque error est eum harum ipsum magnam, molestias nostrum nulla pariatur porro provident quia sed velit voluptatem. Deleniti.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis commodi, delectus eaque error est eum harum ipsum magnam, molestias nostrum nulla pariatur porro provident quia sed velit voluptatem. Deleniti.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis commodi, delectus eaque error est eum harum ipsum magnam, molestias nostrum nulla pariatur porro provident quia sed velit voluptatem. Deleniti.
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Skills"
    }
</script>

<style lang="scss" scoped>
	$progress-value-background-color: #3498db;

	h2 {
		color: lighten(#9b59b6, 5%);
	}

</style>
