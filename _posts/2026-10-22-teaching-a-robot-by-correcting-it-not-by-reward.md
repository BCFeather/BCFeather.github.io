---
title: "Teaching a robot by correcting it, not by reward"
date: 2026-10-22 17:44:00 +0800
tags: [robotics, machine-learning, manipulation]
categories: [technology]
description: "A Berkeley team writing in Science Robotics in August 2025 trained real robot arms on dexterous industrial tasks in one to two hours by letting a human intervene whenever the policy failed. Why human-in-the-loop reinforcement learning may be the trick that makes real-world RL practical."
---

Reinforcement learning in simulation has produced superhuman game players and gymnastic virtual robots, but on a real robot it has always been awkward. Real arms cannot afford millions of failed attempts, a simulator's contact physics never quite matches the workshop floor, and the reward functions needed to guide learning through a long task are hard to write. A paper in Science Robotics on 20 August 2025, from Jianlan Luo, Charles Xu, Jeffrey Wu and Sergey Levine at the University of California, Berkeley, tackles the problem by changing who supplies the signal: a human corrects the robot instead of a reward function grading it.

The system is called HIL-SERL, for human-in-the-loop robot reinforcement learning. A vision-based policy learns from on-camera observations, and while it practises a task a person watches and grabs the arm to take over whenever the policy is about to fail. That intervention is not treated as a demonstration to imitate. It is used to relabel the trajectory: the human takeover marks the places where the policy's behaviour was wrong, and the policy is pushed away from those states and toward the corrected ones. The robot learns online, on the hardware, from its own attempts rather than from a prerecorded dataset.

The numbers are the point of the paper. Across a spread of dexterous tasks, including precise assembly to industrial tolerances, dynamic manipulation and coordinated work with two arms, the system reached essentially a hundred per cent success in one to two and a half hours of training. The baselines, which learn without the human-in-the-loop correction, topped out below half that rate on average. Equally telling, the policies kept working when the researchers threw disturbances at them: shoved objects, moved targets, changed lighting. A policy that has actually practised on the hardware, rather than one distilled from a simulator, absorbs those surprises.

The idea is not new in spirit; learning from human correction is an old robotics instinct. What the paper crystallizes is a recipe that finally works at real-world scale. A pretrained visual backbone supplies the perception, so the arm sees the scene rather than relying on a modelled state. The human intervention is minimal and reactive, not a full demonstration, which keeps the teacher cheap. And the reinforcement loop runs on the real robot, so there is no simulation-to-reality gap to bridge afterwards.

Why this matters is the sample-efficiency argument that has dogged robot learning. The usual choices were to burn a robot's lifetime collecting data on the bench, or to simulate exhaustively and hope the transfer holds. Human-in-the-loop correction collapses both costs: the teacher only steps in at the moments that matter, and the interaction is with the real world throughout. An afternoon of human supervision becomes enough to acquire a skill that used to take weeks.

The honest limits are the usual ones. A person still has to be present and watching, which does not scale to a factory floor by itself. The tasks are impressive but bounded, and the most delicate sub-millimetre alignments still strain vision-only systems. The approach also leans on a capable pretrained visual model, so it is not a clean return to tabula-rasa learning.

None of that blunts the central result. Robotics has been stuck between expensive demonstration data and unsafe real-world trial and error. Letting a human correct the robot while it learns, rather than script a reward, turns supervision into a sparse signal that guides exploration without scripting it. For manipulation that has to meet real tolerances, that may be the practical route to skills no one has to hand-code.
