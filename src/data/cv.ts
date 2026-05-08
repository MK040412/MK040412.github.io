export type Publication = {
	title: string;
	authors: string;
	venue: string;
	year: string | number;
	link?: string;
	arxiv?: string;
	code?: string;
	tldr?: string;
	image?: string;
	highlight?: boolean;
};

export type BlogPost = {
	title: string;
	date: string;
	excerpt: string;
	link: string;
	image?: string;
	tags?: string[];
	highlight?: boolean;
};

export const publications: Publication[] = [];

export const blogPosts: BlogPost[] = [
	{
		title: 'Ouroboros: Reinforcement-Guided Flow Matching',
		date: '2026-01-26',
		excerpt:
			'A reinforcement-guided flow matching framework that unifies critic optimization and generative diffusion in latent space for improved text-to-image alignment.',
		link: 'https://mk040412.github.io/Ouroboros-Reinforcement-Guided-Flow-Matching/',
		image: '/images/ouroboros/Ouroboros.webp',
		tags: ['Deep Learning', 'Diffusion', 'Reinforcement Learning'],
	},
];
