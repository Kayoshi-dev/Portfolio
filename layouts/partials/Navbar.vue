<template>
    <header class="container">
        <nav class="navbar is-transparent">
            <div class="navbar-brand">
                <nuxt-link to="/" class="navbar-item">Kayoshi-dev</nuxt-link>

				<div class="navbar-burger burger" data-target="myNavbar">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div id="myNavbar" class="navbar-menu">
				<div class="navbar-end">
					<nuxt-link to="/skill" class="navbar-item">Skills</nuxt-link>
				</div>
			</div>
        </nav>
		<h1>{{ $t('hello') }}</h1>
    </header>
</template>

<style lang="scss">

</style>
