
export default {
	mode: 'universal',
	/*
	** Headers of the page
	*/
	head: {
		title: 'Kayoshi-dev',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Bienvenue sur le portfolio de Kayoshi-dev!' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Nunito:wght@400;700&display=swap' }
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#9b59b6' },
	/*
	** Global CSS
	*/
	css: [
		'@/assets/scss/main.scss'
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		'@assets/ts/customCursor.ts',
		'@assets/ts/hoverHandler.ts'
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
		'@nuxt/typescript-build',
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
		'@nuxtjs/bulma',
		'@nuxtjs/pwa',
		'nuxt-i18n'
	],

	i18n: {
		locales: [
			{
				name: 'French',
				code: 'fr',
				iso: 'fr-FR'
			},
			{
				name: 'English',
				code: 'en',
				iso: 'en-US'
			},
			{
				name: 'Japanese',
				code: 'ja',
				iso: 'ja-JP',
			}
		],
		vueI18n: {
			fallbackLocale: 'en',
			messages: {
				fr: require('./locales/fr-FR.json'),
				en: require('./locales/en-US.json'),
				ja: require('./locales/ja-JP.json')
			}
		},
		defaultLocale: 'fr',
		langDir: 'locales/'
	},
	/*
	** Build configuration
	*/
	build: {
		postcss: {
			preset: {
				features: {
					customProperties: false
				}
			}
		},
		/*
		** You can extend webpack config here
		*/
		extend (config, ctx) {
		}
	}
}
