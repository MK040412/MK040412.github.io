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
		title: 'Project Weasel',
		date: '2026-05-09',
		excerpt:
			'A research initiative on making Vision-Language-Action (VLA) models genuinely useful in the real world. The main project, the W series, tackles the core problems VLAs face today and aims toward agents with real autonomy; sub-projects explore important VLA-adjacent topics. Sub-projects so far: W0 (an open VLA for long-horizon tasks), MineMate (multi-agent emergence with humans), and Mean Collapse in VLA (memory-based steering).',
		link: 'https://mk040412.github.io/Project-Weasel/',
		image: '/weasel-logo.png',
		tags: ['VLA', 'Agents', 'Reinforcement Learning'],
		highlight: true,
	},
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
