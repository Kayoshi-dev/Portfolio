<template>
	<header class="container">
		<nav class="navbar is-transparent">
			<div class="navbar-brand">
				<nuxt-link to="/" class="navbar-item">Kayoshi-dev</nuxt-link>

				<div class="navbar-burger burger" data-target="myNavbar" @click="isOpen = !isOpen" :class="{ 'is-active': isOpen }">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div id="myNavbar" class="navbar-menu" :class="{ 'is-active': isOpen }">
				<div class="navbar-end">
					<nuxt-link to="/about" class="navbar-item">{{$t('about.title')}}</nuxt-link>
					<nuxt-link to="/blog" class="navbar-item">{{$t('blog.title')}}</nuxt-link>
					<nuxt-link to="/project" class="navbar-item">{{$t('project.title')}}</nuxt-link>
					<div class="vertical-divider"></div>
					<div class="control has-icons-left navbar-item">
						<div class="select is-small">
							<select>
								<option selected class="fr-option">Français</option>
								<option class="en-option">English</option>
								<option class="jp-option">日本</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script lang="ts">
	import Vue from 'vue'
	// import FrFlag from '~/assets/img/fr_flag.svg';

	export default Vue.extend({
		data() {
			let isOpen: boolean = false;
			return {
				isOpen
			}
		}
	})
</script>

<style lang="scss">

	header {
		padding: 3rem 1.5rem 3rem 1.5rem;

		.navbar {
			background-color: transparent;

			.navbar-item, .navbar-link {
				color: #4a4a4a;
				padding-left: 1rem;
				padding-right: 1rem;
			}
		}
	}

	@media screen and (max-width: 1023px) {
		.navbar-menu {
			background-color: white ;
			box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
			padding: 0.5rem 0;
		}
	}

	select {
		.fr-option {
			background: url("~@/assets/img/fr_flag.svg") left center repeat;
		}
	}
</style>
