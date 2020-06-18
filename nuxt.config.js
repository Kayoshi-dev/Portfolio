
export default {
	mode: 'universal',
	/*
	** Headers of the page
	*/
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },
	/*
	** Global CSS
	*/
	css: [
		'@/assets/css/main.css'
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
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
