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
					<figure>
						<picture>
							<source :data-srcset="require(`@/assets/img/Youngfood.png?webp`)" type="image/webp" srcset="">
							<source :data-srcset="require(`@/assets/img/Youngfood.png`)" type="image/png" srcset="">
							<img class="project-image lazyload" :data-src="require(`@/assets/img/Youngfood.png`)" src="" alt="Image d'illustration du projet Youngfood">
						</picture>
					</figure>
				</div>
				<div class="column has-text-right">
					<h1 class="is-size-1 is-size-3-touch is-uppercase has-text-weight-bold project-title">Youngfood</h1>
					<h2 class="is-size-5">{{$t('home.project.youngfood')}}</h2>
				</div>
			</div>

			<div class="columns pb-2">
				<div class="column">
					<h1 class="is-size-1 is-size-3-touch is-uppercase has-text-weight-bold project-title">Chargeon</h1>
					<h2 class="is-size-5">{{$t('home.project.chargeon')}}</h2>
				</div>
				<div class="column is-quarter react-image">
					<figure>
						<picture>
							<source :data-srcset="require(`@/assets/img/Chargeon.png?webp`)" type="image/webp" srcset="">
							<source :data-srcset="require(`@/assets/img/Chargeon.png`)" type="image/png" srcset="">
							<img class="project-image lazyload" :data-src="require(`@/assets/img/Chargeon.png`)" src="" alt="Image d'illustration du projet Chargeon">
						</picture>
					</figure>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { gsap } from 'gsap';
	import ScrollTrigger from "gsap/dist/ScrollTrigger";
    export default {
        name: "Works",
		mounted() {
        	//via gsap example
			gsap.registerPlugin(ScrollTrigger);

			let proxy = { skew: 0 },
				skewSetter = gsap.quickSetter(".project-image", "skewY", "deg"),
				clamp = gsap.utils.clamp(-20, 20);

			ScrollTrigger.create({
				onUpdate: (self) => {
					let skew = clamp(self.getVelocity() / -1500);
					if (Math.abs(skew) > Math.abs(proxy.skew)) {
						proxy.skew = skew;
						gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
					}
				}
			});

			gsap.set(".project-image", {transformOrigin: "left center", force3D: true});
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
