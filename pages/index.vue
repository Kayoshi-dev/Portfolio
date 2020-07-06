<template>
	<div>
		<main>
			<section class="hero">
				<div class="hero-body">
					<div class="container">
						<div class="columns">
							<div class="column is-7">
								<h1 class="title is-size-2">
									<span class="highlighted-purple">{{$t('home.welcome')}}</span>{{$t('home.title')}}
								</h1>
								<h2 class="subtitle is-size-4">
									{{$t('home.speech')}}
								</h2>
							</div>

							<div class="column">
								<img class="hero-image" src="~/assets/img/programmer.svg" alt="A drawing of a developper in front of a computer">
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

			<Works/>

			<Skills class="pb-5"/>

			<Contact class="pb-5"/>

			<Footer/>
		</main>
	</div>
</template>

<script>
	import Works from "../components/home/Works";
	import Skills from "../components/home/Skills";
	import Contact from "../components/home/Contact";
	import Footer from "../components/shared/Footer";

	export default {
		name: "index",
		components: {Footer, Contact, Skills, Works},
	}
</script>

<style lang="scss">
	.highlighted-purple {
		position: relative;
	}

	.highlighted-purple::after {
		position: absolute;
		left: 15px;
		content: "";
		width: 100%;
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

	.section {
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	@media screen and (max-width: 1023px) {
		.hero-body {
			padding-top: 0 !important;
		}
	}

	@media screen and (min-width: 1024px) {
		.hero-image {
			position: relative;
			top: -45px;
		}
	}
</style>
