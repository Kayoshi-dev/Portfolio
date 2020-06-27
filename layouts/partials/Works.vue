<template>
	<div class="section">
		<div class="container">
			<div class="columns is-vcentered">
				<div class="column">
					<h1 class="main-title">{{$t('home.project.title')}}</h1>
				</div>
				<div class="column has-text-right">
					<nuxt-link :to="localePath('/project')" class="link-projet is-size-5">{{$t('home.project.see_more')}} &rarr;</nuxt-link>
				</div>
			</div>

			<div class="columns pb-2">
				<div class="column is-quarter react-image">
					<img class="is-left" src="~/assets/img/Youngfood.png" alt="Image d'illustration du projet Youngfood">
				</div>
				<div class="column has-text-right">
					<h1 class="is-size-1 is-uppercase has-text-weight-bold project-title">Youngfood</h1>
					<h2 class="is-size-5">{{$t('home.project.youngfood')}}</h2>
				</div>
			</div>

			<div class="columns pb-2">
				<div class="column">
					<h1 class="is-size-1 is-uppercase has-text-weight-bold project-title">Chargeon</h1>
					<h2 class="is-size-5">{{$t('home.project.chargeon')}}</h2>
				</div>
				<div class="column is-quarter react-image">
					<img class="is-left" src="https://user-images.githubusercontent.com/28494879/57990844-c20a6180-7aaa-11e9-807d-8a8e2c26a45e.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { gsap } from 'gsap';
	import ScrollTrigger from "gsap/dist/ScrollTrigger";
    export default {
        name: "CarouselProject",
		mounted() {
			gsap.registerPlugin(ScrollTrigger);

			gsap.utils.toArray('.react-image').forEach((section, index) => {
				const w = section.querySelector('img');
				const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
				gsap.fromTo(w, {  x  }, {
					x: xEnd,
					scrollTrigger: {
						trigger: section,
						scrub: 0.5
					}
				});
			});
		}
	}
</script>

<style lang="scss" scoped>
	.project-title {
		font-family: "Noto Sans JP", sans-serif;
	}

	@media screen and (max-width: 1023px) {
		.hero-body {
			padding-top: 0 !important;
		}
	}
</style>
