<template>
	<div class="container">
		<div class="cards-container is-hidden-touch">
			<div class="card-project">
				<img src="https://user-images.githubusercontent.com/28494879/82067735-67154580-96d1-11ea-9150-b297aa354709.png" alt="">
			</div>
			<div class="card-project">
				<img src="https://user-images.githubusercontent.com/28494879/82067735-67154580-96d1-11ea-9150-b297aa354709.png" alt="">
			</div>
			<div class="card-project">
				<img src="https://user-images.githubusercontent.com/28494879/82067735-67154580-96d1-11ea-9150-b297aa354709.png" alt="">
			</div>
			<div class="card-project">
				<img src="https://user-images.githubusercontent.com/28494879/82067735-67154580-96d1-11ea-9150-b297aa354709.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	import { gsap } from 'gsap';
    export default {
        name: "CarouselProject",
		mounted() {
        	if(process.client) {
        		//Thanks a lot to ZachSaucier and elegantseagulls on GreenSock forums
				const cardsContainer = document.querySelector(".cards-container");
				cardsContainer.innerHTML += cardsContainer.innerHTML;

				function setAnimValues() {
					const cards = gsap.utils.toArray(".card-project");
					const cardWidth = innerWidth / (cards.length / 2);

					cards.forEach((card, i) =>
						gsap.set(card, {
							x: () => i * cardWidth,
							overwrite: "auto"
						})
					);

					gsap.to(cards, {
						duration: 40,
						ease: "none",
						x: `+=${innerWidth}`,
						repeat: -1,
						modifiers: {
							x: gsap.utils.unitize(gsap.utils.wrap(-cardWidth, innerWidth * 2 - cardWidth), "px")
						},
					});
				}

				window.addEventListener("resize", setAnimValues);
				setAnimValues();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cards-container {
		//TODO: Change in future commit
		position: relative;
		left: -480px;

		.card-project {
			width: 24vw;
			border-radius: 15px;
			border: 1px dotted #4a4a4a;
			position:absolute;

			img {
				border-radius: inherit;
			}
		}
	}


	@media screen and (max-width: 1023px) {
		.hero-body {
			padding-top: 0 !important;
		}
	}
</style>
