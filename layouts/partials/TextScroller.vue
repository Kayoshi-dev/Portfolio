<template>
	<div>
		<section class="word-scrolling">
			<div class="wrapper">
				<h1>
					PHP|JAVA|HTML|JAVASCRIPT|C#|CSS
				</h1>
			</div>
		</section>

		<section class="word-scrolling">
			<div class="wrapper">
				PHP|JAVA|HTML|JAVASCRIPT|C#|CSS
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
				console.log(w);
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

<style scoped>
	.wrapper {
		display: flex;
		font-size: 15vw;
	}

</style>
