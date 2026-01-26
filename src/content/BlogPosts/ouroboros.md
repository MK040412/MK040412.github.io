---
title: "Ouroboros: Reinforcement-Guided Flow Matching"
date: "2025-01-26"
tags: ["Deep Learning", "Diffusion", "Reinforcement Learning"]
excerpt: "A reinforcement-guided flow matching framework that unifies critic optimization and generative diffusion in latent space for improved text-to-image alignment."
externalLink: "https://mk040412.github.io/Ouroboros-Reinforcement-Guided-Flow-Matching/"
---

# Ouroboros: Reinforcement-Guided Flow Matching

**Authors:** Kang Minkyu, Chae Jeongwoo, Kim Jinho

![Ouroboros](/images/ouroboros/Ouroboros.webp)

## Abstract

Current text to image diffusion models still struggle to follow complex and compositional prompts, largely due to the absence of consistent signals throughout the denoising trajectory. We introduce **OUROBOROS**, a reinforcement guided flow matching framework that unifies critic optimization and generative diffusion in latent space.

Inspired by ControlNet style conditioning, our method incorporates a critic network that evaluates intermediate denoising steps via cross attention, producing reinforcement based rewards for each latent update. These reward signals are used to iteratively refine the flow trajectory, enabling robust alignment between text and image over long horizon, sparse reward scenarios.

To stabilize representation transitions across steps, we employ cross domain module inspired by ControlNet and CycleGAN, ensuring dimension consistency and cyclic regularization between encoder-decoder flows. We expect that framework achieves scalable, bi-directional optimization that dynamically corrects latent paths while maintaining generation diversity.

---

## Motivation

Even state-of-the-art models often fail to accurately interpret and reflect factual relationships in prompts. When prompts are precisely followed, the resulting images can often be distorted or broken. This highlights a significant challenge in text-to-image generation: maintaining image quality while ensuring strict adherence to complex prompt details.

### Comparison: With vs Without TIPO

#### HDM Model

| With TIPO | Without TIPO |
|:---------:|:------------:|
| ![HDM with TIPO](/images/ouroboros/HDM_wTIPO.png) | ![HDM without TIPO](/images/ouroboros/HDM_woTIPO.png) |

#### Janus Model

| With TIPO | Without TIPO |
|:---------:|:------------:|
| ![Janus with TIPO](/images/ouroboros/Janus_wTIPO.png) | ![Janus without TIPO](/images/ouroboros/Janus_woTIPO.png) |

#### RouWei Model

| With TIPO | Without TIPO |
|:---------:|:------------:|
| ![RouWei with TIPO](/images/ouroboros/RouWei_wTIPO.png) | ![RouWei without TIPO](/images/ouroboros/RouWei_woTIPO.png) |

### Prompts Used

**Prompt for images with TIPO:**

> 1girl, mejiro ardan (umamusume), umamusume, ningen mame, solo, horse ears, animal ears, horse girl, tail, long hair, horse tail, blue hair, purple eyes, full body, white background, simple background, looking at viewer, braid, shirt, black footwear, white shirt, open mouth, breasts, smile, long sleeves, crown braid, waving, boots, toes, standing, blush, long shirt, t-shirt, bra strap, alternate costume, collarbone, arm up, short, barefoot, black shorts, medium breasts, medium breast reduction A girl raising her left arm while holding an apple. A snake is crawling in front of a girl's face. The background is white and there are blue ribbons flying around the girls. There are also several apples scattered on the ground near the girl masterpiece, newest, absurdres, safe

**Prompt for images without TIPO:**

> A girl raising her left arm while holding an apple. A snake is crawling in front of a girl.

---

## Workflow

![ConfigUI Workflow](/images/ouroboros/ConfigUI_WorkFlow.png)

*The image was generated using the ConfigUI workflow.*

---

## Key Features

- **Reinforcement-Guided Flow Matching**: Unifies critic optimization and generative diffusion in latent space
- **Critic Network**: Evaluates intermediate denoising steps via cross attention
- **ControlNet-Style Conditioning**: Produces reinforcement-based rewards for each latent update
- **Cross-Domain Module**: Ensures dimension consistency and cyclic regularization
- **Long-Horizon Optimization**: Enables robust alignment over sparse reward scenarios

---

## Project Page

For more details, visit the [project page](https://mk040412.github.io/Ouroboros-Reinforcement-Guided-Flow-Matching/).
