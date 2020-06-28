<template>
	<div class="container">
		<footer class="footer">
			<div class="content has-text-centered">
				<div class="columns is-mobile">
					<div class="column">
						<h1 class="is-size-4">{{$t('footer.sitemap')}}</h1>
						<ul>
							<li><nuxt-link :to="localePath('/')" class="link-projet">{{$t('footer.home')}}</nuxt-link></li>
							<li><nuxt-link :to="localePath('/about')" class="link-projet">{{$t('about.title')}}</nuxt-link></li>
							<li><nuxt-link :to="localePath('/project')" class="link-projet">{{$t('blog.title')}}</nuxt-link></li>
						</ul>
					</div>

					<div class="column">
						<h1 class="is-size-4">{{$t('footer.language')}}</h1>
						<ul>
							<li><nuxt-link :to="switchLocalePath('fr')" class="link-projet">{{$t('navbar.fr')}}</nuxt-link></li>
							<li><nuxt-link :to="switchLocalePath('en')" class="link-projet">{{$t('navbar.en')}}</nuxt-link></li>
							<li><nuxt-link :to="switchLocalePath('ja')" class="link-projet">{{$t('navbar.ja')}}</nuxt-link></li>
						</ul>
					</div>
				</div>

				<small class="footer-sentence">Made with 😴 and Japanese songs 🎶</small>
			</div>
		</footer>
	</div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
	.footer-sentence {
		color: lightgrey;
	}

	.container {
		border-top: 1px solid lightgrey;
	}
</style>
