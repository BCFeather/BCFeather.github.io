---
title: "NVIDIA stacks seven chips for the agentic era"
date: 2026-04-13 09:50:00 +0800
tags: [nvidia, chips, ai-infrastructure, gpu]
categories: [news]
description: "At GTC on 16 March NVIDIA put a seven-chip platform called Vera Rubin into production, built around racks of 72 Rubin GPUs. The build-out behind the next generation of large models."
---

At the company's GTC conference on 16 March, NVIDIA announced that its next computing platform, Vera Rubin, had moved from roadmap promise to something it described as in full production: seven new chips designed to work together as one machine for the age of agentic artificial intelligence. The announcement was the annual rite of a company that has, for several years now, defined the shape of the industry around it, and the details matter because the shape it drew is the one the next generation of large models will be built inside.

The centrepiece is a rack called the Vera Rubin NVL72. It packs seventy-two of the new Rubin GPUs together with thirty-six of a new family of Vera CPUs, connected by the company's sixth-generation NVLink, so that the whole rack behaves as a single coherent computer rather than a stack of separate servers. The headline numbers are the efficiency claims: training a large mixture-of-experts model with one quarter as many GPUs as the previous Blackwell generation, and up to ten times more inference throughput per watt at a tenth of the cost per token. Those are the sorts of figures that, if they hold, change the arithmetic of running very large systems.

The platform is deliberately wider than a GPU. Alongside the Rubin GPU and the Vera CPU sit a new networking switch, a high-speed Ethernet connection, a storage accelerator built around a BlueField processor and, newly integrated, an inference accelerator from Groq. The pitch is that a modern AI workload is not just training; it is post-training, test-time scaling and then long-running agentic inference, and each phase leans on a different part of the machine. NVIDIA's answer is to build all of them into one codesigned system, so that a customer buys a rack, or a row of racks, rather than a bag of parts.

The strategic point is the shift in scale. The industry has moved from individual chips, to servers, to racks, and now, with Vera Rubin, to configurable collections of racks called pods that act as one supercomputer. The company talked openly of AI factories, drawing the parallel deliberately: a facility that turns electricity and raw data into model training, at a scale that wants the same kind of fixed-power planning as a power station. It even announced software to let data centres flex their power draw to the grid, a response to the quiet fact that the build-out is now bumping into electrical supply.

The ecosystem list was long and familiar: the big cloud providers, a ring of specialist compute clouds, and the system manufacturers who will build the actual boxes. Customers are promised products built on the platform starting in the second half of the year. The usual caveats apply. The efficiency claims are the company's own, rack-level numbers that will survive contact with real workloads in due course, and the cycle of announcements has a history of outrunning the supply it promises.

But the direction is plain. The next year of large-model development is going to run on machines like this, and the build-out, not the model release, is the event that sets what is possible. The chip has, in effect, become a building.
