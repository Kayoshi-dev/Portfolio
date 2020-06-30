<template>
	<div class="section">
		<div class="container">
			<div class="columns">
				<div class="column is-half">
					<h1 class="main-title">{{$t('home.skills.title')}}</h1>
					<h2 class="is-size-5 main-subtitle">
						{{$t('home.skills.subtitle')}}
					</h2>
				</div>
			</div>
			<div class="columns is-mobile has-text-centered">
				<div class="column">
					<img class="logo lazyload" :data-src="require(`@/assets/img/php.svg`)" alt="Logo de Symfony">
				</div>
				<div class="column">
					<img class="logo lazyload" :data-src="require(`@/assets/img/vuejs.svg`)" alt="Logo de Symfony">
				</div>
				<div class="column">
					<img class="logo lazyload" :data-src="require(`@/assets/img/symfony.svg`)" alt="Logo de Symfony">
				</div>
				<div class="column">
					<img class="logo lazyload" :data-src="require(`@/assets/img/nuxt.svg`)" alt="Logo de Symfony">
				</div>
			</div>
			<div class="columns">
				<div class="column">
					<h2 class="is-size-4 progress-title">{{$t('home.skills.language')}}</h2>
					<label class="is-block" for="php-skill">PHP</label><progress id="php-skill" class="progress is-small" value="70" max="100">70%</progress>
					<label class="is-block" for="js-skill">JS</label><progress id="js-skill" class="progress is-small" value="50" max="100">50%</progress>
					<label class="is-block" for="sql-skill">SQL</label><progress id="sql-skill" class="progress is-small" value="45" max="100">45%</progress>
					<label class="is-block" for="csharp-skill">C#</label><progress id="csharp-skill" class="progress is-small" value="55" max="100">55%</progress>
				</div>

				<div class="column">
					<h2 class="is-size-4 progress-title">{{$t('home.skills.framework')}}</h2>
					<label class="is-block" for="symfony-skill">Symfony</label><progress id="symfony-skill" class="progress is-small" value="35" max="100">35%</progress>
					<label class="is-block" for="vuejs-skill">VueJS</label><progress id="vuejs-skill" class="progress is-small" value="65" max="100">65%</progress>
					<label class="is-block" for="nuxt-skill">NuxtJS</label><progress id="nuxt-skill" class="progress is-small" value="50" max="100">50%</progress>
					<label class="is-block" for="react-skill">React</label><progress id="react-skill" class="progress is-small" value="15" max="100">15%</progress>
				</div>

				<div class="column">
					<h2 class="is-size-4 progress-title">{{$t('home.skills.misc')}}</h2>
					<label class="is-block" for="ux-skill">{{$t('home.skills.ux')}}</label><progress id="ux-skill" class="progress is-small" value="20" max="100">20%</progress>
					<label class="is-block" for="ui-skill">{{$t('home.skills.ui')}}</label><progress id="ui-skill" class="progress is-small" value="25" max="100">25%</progress>
					<label class="is-block" for="maquettage-skill">{{$t('home.skills.modeling')}}</label><progress id="maquettage-skill" class="progress is-small" value="45" max="100">45%</progress>
					<label class="is-block" for="seo-skill">SEO</label><progress id="seo-skill" class="progress is-small" value="20" max="100">20%</progress>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Skills",
    }
</script>

<style lang="scss" scoped>
	.continue-title {
		position: relative;
		top: -25px;
	}

	.progress-title {
		color: #9b59b6;
	}

	.logo {
		height: 60px;
		opacity: .5;
		transition: .4s;

		&:hover {
			opacity: 1;
		}
	}
</style>
