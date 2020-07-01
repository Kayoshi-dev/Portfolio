<template>
	<div class="columns">
		<div class="column">
			<div class="card">
				<div class="card-image">
					<figure class="image is-4by3">
						<img class="lazyload" src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
					</figure>
				</div>
				<div class="card-content">
					<div class="media">
						<div class="media-content">
							<p class="title is-4">Youngfood</p>
						</div>
					</div>

					<div class="content">
						Une plateforme en ligne permettant la reservation de la cantine pour ses enfants.
						Phasellus nec iaculis mauris. <a>@bulmaio</a>.
						<a href="#">#css</a> <a href="#">#responsive</a>
						<br>
						<time datetime="2020">Début 2020</time>
						<div class="tags">
							<span class="tag is-primary is-light">Symfony</span>
							<span class="tag is-success is-light">VueJS</span>
							<span class="tag is-link is-light">Docker</span>
							<span class="tag is-warning is-light">MySQL</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="column">
			<div class="card">
				<div class="card-image">
					<figure class="image is-4by3">
						<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
					</figure>
				</div>
				<div class="card-content">
					<div class="media">
						<div class="media-content">
							<p class="title is-4">John Smith</p>
						</div>
					</div>

					<div class="content">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Phasellus nec iaculis mauris. <a>@bulmaio</a>.
						<a href="#">#css</a> <a href="#">#responsive</a>
						<br>
						<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
						<div class="tags">
							<span class="tag is-success is-light">C#</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="column">
			<div class="card">
				<div class="card-image">
					<figure class="image is-4by3">
						<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
					</figure>
				</div>
				<div class="card-content">
					<div class="media">
						<div class="media-content">
							<p class="title is-4">John Smith</p>
							<p class="subtitle is-6">@johnsmith</p>
						</div>
					</div>

					<div class="content">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Phasellus nec iaculis mauris. <a>@bulmaio</a>.
						<a href="#">#css</a> <a href="#">#responsive</a>
						<br>
						<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "ListProjects"
    }
</script>

<style lang="scss" scoped>
	.card {
		transition: .5s all;

		&:hover {
			box-shadow: 0 10px 20px rgba(220,220,220,0.5);
			transform: translateY(-5px);
		}
	}

</style>
