
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
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
		'@assets/ts/hoverHandler.ts',
		'@plugins/lazysizes.client.js'
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
		'@nuxt/typescript-build',
		'@aceforth/nuxt-optimized-images'
	],

	optimizedImages: {
		inlineImageLimit: -1,
		handleImages: ['png', 'svg', 'webp'],
		optimizeImages: true,
		optimizeImagesInDev: true,
		defaultImageLoader: 'img-loader',
		optipng: false,
		pngquant: {
			speed: 6,
			quality: [0.65, 0.8]
		},
		webp: {
			quality: 85
		}
	},

	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
		'@nuxtjs/bulma',
		'@nuxtjs/pwa',
		'nuxt-i18n',
		'nuxt-webfontloader'
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

	webfontloader: {
		custom: {
			families: [
				'Noto Sans JP:n3,n7',
				'Nunito:n3:n7'
			],
			urls: [
				'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap',
				'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Nunito:wght@400;700&display=swap'
			]
		}
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
		extend (config, { isDev, isClient, loaders: { vue } }) {
			if(isClient) {
				vue.transformAssetUrls.img = ['data-src', 'src'];
				vue.transformAssetUrls.source = ['data-srcset', 'srcset'];
			}
		}
	}
}
