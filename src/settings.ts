export const profile = {
	fullName: 'Kang Minkyu',
	title: '',
	institute: '',
	author_name: 'Kang Minkyu', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Vision-Language-Action (VLA)', description: 'I am interested in developing agents that can understand and interact with the world through vision and language, focusing on how they take action based on this understanding.' },
		{ title: 'Scalable Reinforcement Learning (RL)', description: 'My primary research focus is on the scalability of Reinforcement Learning, exploring how to train agents efficiently for large-scale, real-world applications.' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: '',
	linkedin: '',
	x: 'https://www.x.com/',
	github: '',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'night', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'night', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '/MK040412.github.io' // Repository name starting with /
}

export const seo = {
	default_title: 'Kang Minkyu',
	default_description: 'Personal academic website of Kang Minkyu, focusing on Vision-Language Agents and Scalable Reinforcement Learning.',
	default_image: '/images/astro-academia.png',
}