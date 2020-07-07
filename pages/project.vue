<template>
	<div class="section">
		<div class="container">
			<h1 class="main-title">{{$t('project.title')}}</h1>
			<h2 class="main-subtitle is-size-5">{{$t('project.subtitle')}}</h2>
			<ListProjects/>
			<Footer/>
		</div>
	</div>
</template>

<script>
    import ListProjects from "../components/projects/ListProjects";
	import Footer from "../components/shared/Footer";
	export default {
        name: "project",
		components: {Footer, ListProjects}
	}
</script>

<style scoped>

</style>
