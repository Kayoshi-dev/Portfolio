<template>
	<div class="container">
		<div>
			<h1 class="title">
				<span class="highlighted-purple">{{$t('home.welcome')}}</span>{{$t('home.title')}}
			</h1>

			<h2 class="subtitle">
				My super cool portfolio!
			</h2>
		</div>
	</div>
</template>

<script>
	export default {
		name: "index"
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
</style>
