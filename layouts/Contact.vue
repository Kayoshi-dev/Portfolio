<template>
    <div class="section contact">
		<div class="container">
			<div class="columns">
				<div class="column is-half">
					<h1 class="main-title">{{$t('home.contact.title')}}</h1>
					<h2 class="is-size-5 main-subtitle">{{$t('home.contact.subtitle')}}</h2>
				</div>
			</div>
			<section class="hero">
				<div class="hero-body">
					<div class="container has-text-centered">
						<h1 class="is-size-3">
							{{$t('home.contact.email')}} :
						</h1>
						<a class="button is-outlined" href="mailto:maxime.jme@gmail.com">
							EMAIL
						</a>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style lang="scss" scoped>

</style>
