module.exports = {
	base: '/',
	title: 'Office Tool Plus Docs',
	description: 'Official Office Tool Plus documentation.',
	head: [
		['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
		['link', { rel: 'icon', href: './assets/img/logo.ico' }]
	],
	locales: {
		'/': {
			lang: 'en-US',
			title: 'Office Tool Plus Docs',
			description: 'Office Tool Plus documentation.'
		},
		'/zh-cn/': {
			lang: 'zh-CN',
			title: 'Office Tool Plus Docs',
			description: 'Office Tool Plus 官方帮助文档。'
		}
	},
	themeConfig: {
		repo: 'YerongAI/Office-Tool',
		docsDir: 'docs',
		docsBranch: 'main',
		editLinks: true,
		smoothScroll: true,
		locales: {
			'/': {
				selectText: 'Languages',
				label: 'English',
				ariaLabel: 'Languages',
				editLinkText: 'Edit this page on GitHub',
				serviceWorker: {
					updatePopup: {
						message: "New content is available.",
						buttonText: "Refresh"
					}
				},
				nav: [
					{ text: 'Start', link: '/start/' },
					{ text: 'Deploy', link: '/deploy/' },
					{ text: 'Activate', link: '/activate/' },
					{ text: 'More', link: '/others/' },
					{ text: 'Blog (Chinese)', link: 'https://www.coolhub.top' },
					{
						text: 'Group', items: [
							{ text: 'Telegram', link: 'https://otp.landian.vip/grouplink/telegram.html' }
						]
					}
				],
				sidebar: {
					'/start/': [
						'',
						'download',
						'requirement'
					],
					'/deploy/': [
						'',
						'deploy',
						'create-iso',
						'faq'
					],
					'/activate/': [
						'',
						'faq'
					],
					'/others/': [
						'toolbox',
						'converter',
						''
					],
					'/': [
						''
					]
				}
			},
			'/zh-cn/': {
				selectText: '选择语言',
				label: '简体中文',
				editLinkText: '在 GitHub 上编辑此页',
				serviceWorker: {
					updatePopup: {
						message: "发现新内容可用.",
						buttonText: "刷新"
					}
				},
				nav: [
					{ text: '入门', link: '/zh-cn/start/' },
					{ text: '部署', link: '/zh-cn/deploy/' },
					{ text: '激活', link: '/zh-cn/activate/' },
					{ text: '更多', link: '/zh-cn/others/toolbox' },
					{ text: '官方博客', link: 'https://www.coolhub.top' },
					{
						text: '群组', items: [
							{ text: 'QQ: 481262749', link: 'https://otp.landian.vip/grouplink/qq.html' },
							{ text: 'WeChat', link: 'https://otp.landian.vip/grouplink/wechat.html' },
							{ text: 'Telegram', link: 'https://otp.landian.vip/grouplink/telegram.html' }
						]
					}
				],
				sidebar: {
					'/zh-cn/start/': [
						'',
						'requirement',
						'download'
					],
					'/zh-cn/deploy/': [
						'',
						'deploy',
						'create-iso',
						'faq'
					],
					'/zh-cn/activate/': [
						'',
						'faq'
					],
					'/zh-cn/others/': [
						'toolbox',
						'converter',
						''
					],
					'/zh-cn/': [
						''
					]
				}
			}
		}
	}
}
