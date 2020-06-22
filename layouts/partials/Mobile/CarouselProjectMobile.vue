<template>
	<div class="container">
		<div class="columns cards-container-mobile is-mobile is-3">
			<div class="column card-project-mobile is-4">
				<img src="https://user-images.githubusercontent.com/28494879/82067735-67154580-96d1-11ea-9150-b297aa354709.png" alt="">
			</div>
			<div class="column card-project-mobile is-4">
				<img src="https://user-images.githubusercontent.com/28494879/82067735-67154580-96d1-11ea-9150-b297aa354709.png" alt="">
			</div>
			<div class="column card-project-mobile is-4">
				<img src="https://user-images.githubusercontent.com/28494879/82067735-67154580-96d1-11ea-9150-b297aa354709.png" alt="">
			</div>
			<div class="column card-project-mobile is-4">
				<img src="https://user-images.githubusercontent.com/28494879/82067735-67154580-96d1-11ea-9150-b297aa354709.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "CarouselProjectMobile"
    }
</script>

<style lang="scss" scoped>
	.cards-container-mobile {
		overflow: auto;

		.card-project-mobile {
			height: 100px;
			width: 50px;
			border-radius: 15px;
		}
	}
</style>
