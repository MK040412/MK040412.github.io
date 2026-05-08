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

export const publications: Publication[] = [
	{
		title: 'Ouroboros: Reinforcement-Guided Flow Matching',
		authors: 'Kang Minkyu, Chae Jeongwoo, Kim Jinho',
		venue: 'arXiv',
		year: 2025,
		link: 'https://mk040412.github.io/Ouroboros-Reinforcement-Guided-Flow-Matching/',
		image: '/images/ouroboros/Ouroboros.webp',
		tldr: 'A reinforcement-guided flow matching framework that unifies critic optimization and generative diffusion in latent space for improved text-to-image alignment.',
		highlight: true,
	},
];
