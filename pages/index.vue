<template>
	<div>
		<main>
			<section class="hero">
				<div class="hero-body">
					<div class="container">
						<h1 class="title is-size-2">
							<span class="highlighted-purple">{{$t('home.welcome')}}</span>{{$t('home.title')}}
						</h1>
						<div class="columns">
							<div class="column">
								<h2 class="subtitle is-size-4">
									{{$t('home.speech')}}
								</h2>
							</div>
						</div>

						<svg width="100%" height="200" fill="none">
							<defs>
								<pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="19" patternUnits="userSpaceOnUse">
									<rect x="0" y="0" width="4" height="4" fill="currentColor" class="has-text-grey-lighter"></rect>
								</pattern>
							</defs>
							<rect width="100%" height="200" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"></rect>
						</svg>
					</div>
				</div>
			</section>

			<div class="section">
				<div class="container">
					<div class="columns">
						<div class="column">
							<h1 class="title is-size-3">{{$t('home.project.title')}}</h1>
						</div>
						<div class="column has-text-right">
							<nuxt-link :to="localePath('/project')" class="link-projet is-size-5">{{$t('home.project.see_more')}} &rarr;</nuxt-link>
						</div>
					</div>
				</div>
			</div>

			<CarouselProject class="is-hidden-touch"/>
			<CarouselProjectMobile class="is-hidden-desktop"/>

		</main>
	</div>
</template>

<script>
	import CarouselProject from "../layouts/partials/CarouselProject";
	import CarouselProjectMobile from "../layouts/partials/Mobile/CarouselProjectMobile";
	export default {
		name: "index",
		components: {CarouselProjectMobile, CarouselProject}
	}
</script>

<style lang="scss">
	.highlighted-purple::after {
		position: absolute;
		left: 15px;
		content: "";
		width: 128px;
		height: 25px;
		background-color: lighten(#9b59b6, 20%);
		z-index: -3;
		transform: translate(-15px);
		top: 10px;
	}

	main {
		.hero-body {
			padding: 6rem 1rem 0 1rem;
		}
	}

	.link-projet {
		color: lighten(#9b59b6, 5%);
		font-weight: 700;
		vertical-align: center;
		transition: .5s all;
	}

	.section {
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	@media screen and (max-width: 1023px) {
		.hero-body {
			padding-top: 0 !important;
		}
	}
</style>
