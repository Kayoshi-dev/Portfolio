<template>
	<div class="container">
		<div class="cards-container">
			<div class="card-project">
				<a href="#" target="_self">
					<img src="https://user-images.githubusercontent.com/28494879/80311798-0c7b7e80-87e2-11ea-90de-2ed4362b6259.png" alt="">
				</a>
			</div>
			<div class="card-project">
				<a href="#" target="_self">
					<img src="https://user-images.githubusercontent.com/28494879/82067735-67154580-96d1-11ea-9150-b297aa354709.png" alt="">
				</a>
			</div>
			<div class="card-project">
				<a href="#" target="_self">
					<img src="https://user-images.githubusercontent.com/28494879/80311798-0c7b7e80-87e2-11ea-90de-2ed4362b6259.png" alt="">
				</a>
			</div>
			<div class="card-project">
				<a href="#" target="_self">
					<img src="https://user-images.githubusercontent.com/28494879/82067735-67154580-96d1-11ea-9150-b297aa354709.png" alt="">
				</a>
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
		height: 180px;
		left: -480px;
		position: relative;

		.card-project {
			height: 215px;
			width: 24vw;
			border-radius: 15px;
			position: absolute;
			transition: .5s box-shadow;
			display: flex;
			align-items: center;

			&:hover {
				box-shadow: 0 10px 20px rgba(220,220,220,0.5);
			}

			a {
				border-radius: inherit;
				display: inline-block;
				transition: .5s transform;

				&:hover {
					transform: translateY(-5px);
				}
			}

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
