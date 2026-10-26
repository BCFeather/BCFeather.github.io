---
title: "Learning to reason in 13 parameters"
date: 2026-04-03 09:24:00 +0800
tags: [machine-learning, reasoning, lora, reinforcement-learning]
categories: [technology]
description: "A team writing in arXiv in early February trained an 8-billion-parameter model to near its ceiling on GSM8K by tuning only 13 numbers. The result reframes how much of post-training is really necessary."
---

Post-training a large language model to reason usually means updating a great many numbers. Reinforcement learning from rewards, supervised fine-tuning, low-rank adapters: each approach spends a budget of trainable parameters and treats that budget as a cost of doing business. A paper posted to *arXiv* on 4 February, by John X. Morris, Niloofar Mireshghallah, Mark Ibrahim and Saeed Mahloujifar, asks a blunt question: how small can the adapter actually be? Their answer is smaller than almost anyone expected.

The method is called TinyLoRA. Conventional low-rank adaptation inserts a pair of thin matrices into each layer and trains their product; even a rank of one is bounded below by the model's own hidden dimension, so the adapter still costs thousands of parameters per layer. The new parameterization refuses that lower bound altogether. By separating the direction of the update from its magnitude and then scaling both to the point where the adapter is a single learned number per insertion, the authors shrink the trainable set until it becomes almost comically small.

The headline result is the number itself. Tuning an 8-billion-parameter Qwen2.5 with only 13 trained parameters in bf16, a total of twenty-six bytes, the model reached 91 per cent accuracy on GSM8K. That is not a toy benchmark run on a small model; it is a frontier-size language model recovering most of the reasoning gain from a handful of floating-point values. Across a harder suite, including AIME, AMC and MATH500, the same recipe recovered roughly 90 per cent of the performance improvement while training about a thousand times fewer parameters than a full adapter would.

The more interesting finding is about the algorithm, not the budget. The team ran the same experiment with supervised fine-tuning and it fell apart: models trained by imitation needed updates between a hundred and a thousand times larger to reach the same performance. Only reinforcement learning, with a reward signal and policy gradients, could push a change that tiny all the way through the network. The implication is that reasoning is not learned by storing more information in the weights. It is learned by nudging the existing computation in a consistent direction, and a reward signal supplies that direction far more efficiently than a hundred imitated demonstrations.

Why this matters is the accounting it forces on the field. If a twenty-six-byte adapter buys back most of the reasoning uplift, then the heavy machinery of large fine-tuning runs is buying something that may be mostly overhead. The practical uses are not hard to imagine: personalizing a model on a device with a megabyte of memory, adapting a frontier model for a niche task without a full training run, or auditing exactly what changed when a model is tuned, because the thing that changed is small enough to read.

The honest limits are visible. The result is about recovering an already-trained model's latent ability, not teaching it something it never knew. Thirteen parameters cannot carry new knowledge; they can only tilt the model toward using what it already has. And the experiments concentrate on mathematical reasoning, a narrow corner of competence, so the generalization to long writing or open dialogue is not yet established.

Even so, the paper lands as a small provocation. The instinct, for years, has been that better reasoning needs more parameters, more data and more compute. TinyLoRA suggests the opposite: that a capable model already knows how to reason, and the whole job of post-training may be to point it, with remarkable precision, in the right direction.
