<template>
	<div class="section skills">
		<div class="container">
			<div class="columns word-scrolling">
				<div class="column">
					<h1 class="fat-title">{{$t('home.skills.my')}}</h1>
					<h1 class="fat-title"><span>{{$t('home.skills.skills')}}</span></h1>
					<p>En tant que développeur, l'apprentissage ne se termine jamais.
						Je reste en veille constante sur les nouveautés et les technologies afin de progresser et aller toujours plus loin...</p
					>
				</div>
				<div class="column">
					<h2 class="is-size-4">{{$t('home.skills.language')}}</h2>
					<label class="is-block" for="php-skill">PHP</label><progress id="php-skill" class="progress is-small" value="70" max="100">70%</progress>
					<label class="is-block" for="js-skill">JS</label><progress id="js-skill" class="progress is-small" value="65" max="100">65%</progress>
					<label class="is-block" for="sql-skill">SQL</label><progress id="sql-skill" class="progress is-small" value="60" max="100">60%</progress>
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
			</div>
		</div>
	</div>
</template>

<script>
	import { gsap } from "gsap";
	import ScrollTrigger from "gsap/dist/ScrollTrigger";

    export default {
        name: "Skills",
		mounted() {
			gsap.registerPlugin(ScrollTrigger);

			gsap.utils.toArray('.word-scrolling').forEach((section, index) => {
				const w = section.querySelector('.column');
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
	.skills {
		background-color: #3d3d3d;
		color: white;

		.progress {
			border-radius: 0;
		}

		.fat-title {
			text-transform: uppercase;
			font-size: 4.75rem;
			font-weight: 700;
			font-family: 'Noto Sans JP', sans-serif;
			color: white;

			span {
				text-decoration: underline dashed white;
			}
		}
	}

	h2 {
		color: lighten(#9b59b6, 5%);
	}

</style>
