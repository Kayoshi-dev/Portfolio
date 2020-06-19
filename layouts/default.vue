<template>
	<div>
		<Navbar/>
		<nuxt />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from './partials/Navbar.vue'
export default Vue.extend({
	components: {
		Navbar
	}
})
</script>

<style>
	html {
		font-size: 16px;
		word-spacing: 1px;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		box-sizing: border-box;
	}
</style>
