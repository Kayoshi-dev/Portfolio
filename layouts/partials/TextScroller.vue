<template>
	<div>
		<section class="word-scrolling">
			<div class="wrapper">
				<h1 class="scrolling-title">
					PHP|HTML|JS|C#|CSS
				</h1>
			</div>
		</section>
	</div>
</template>

<script>
	import { gsap } from "gsap";
	import ScrollTrigger from "gsap/dist/ScrollTrigger";

    export default {
        name: "TextScroller",
		mounted() {
        	gsap.registerPlugin(ScrollTrigger);

			gsap.utils.toArray('.word-scrolling').forEach((section, index) => {
				const w = section.querySelector('.wrapper');
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
	.wrapper {
		display: flex;
		font-size: 15vw;

		.scrolling-title {
			font-family: 'Noto Sans JP', sans-serif;
		}
	}

</style>
