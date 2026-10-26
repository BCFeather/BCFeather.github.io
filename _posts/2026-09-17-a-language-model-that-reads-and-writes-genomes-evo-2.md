---
title: "A Language Model That Reads and Writes Genomes: Evo 2"
date: 2026-09-17 08:58:00 +0800
tags: [biology, synthetic-biology, genomics]
categories: [science]
description: "Evo 2, a DNA foundation model trained on nine trillion base pairs and published in Nature in March 2026, designs whole genomes from scratch at single-letter resolution. What it means that writing life is starting to look like generating text."
---

Large language models learn statistics over text, and from those statistics emerge the ability to summarize, translate and compose. DNA is also a sequence, written in four letters rather than twenty-six, and the same modelling instinct has been turned on genomes for several years. On 4 March 2026 the results arrived in Nature. A team at the Arc Institute, working with NVIDIA, Stanford and the University of California, Berkeley, published Evo 2, a biological foundation model trained on nine trillion DNA base pairs drawn from across all domains of life, and showed that it can both read genomes and write them.

The scale is the headline. Evo 2 has forty billion parameters and a context window of one million tokens, long enough to ingest an entire small genome at single-letter resolution rather than reading it in fragments. It was trained on a curated atlas of real genomes spanning bacteria, archaea and eukaryotes, so the statistical patterns it learns are the patterns of actual living things rather than of a single organism. Near-linear scaling of compute and memory with context length is the engineering detail that makes the megabase window feasible at all.

What the model can do with that capacity splits into two halves. The first is reading. Without any task-specific fine-tuning, Evo 2 predicts the functional effect of genetic variation: whether a mutation is pathogenic, from obscure non-coding changes to clinically important variants in BRCA1. This is the kind of judgment that normally requires a trained specialist model per task, and the paper's claim is that a single foundation model already does it as a generalist. That matters because most human variation sits in the non-coding genome, where interpretation has lagged.

The second half is writing, and it is the more startling claim. Given a functional brief, Evo 2 designs novel genome sequences that no organism has ever carried. The paper includes a de novo genome roughly a million base pairs long, modelled on Mycoplasma genitalium, one of the simplest cells known. The team did not just edit an existing genome; they generated a whole one from the model's learned distribution, in the lineage of the synthetic-cell efforts that aim to reboot a designed chromosome inside a host.

The distance between design and life deserves to be stated plainly. A model that emits a plausible million-letter sequence has produced a candidate genome, not a working organism. Whether that sequence actually supports a cell depends on wetware nobody has built yet, and the authors are careful to call the designs a step rather than a finished creation. The leap from a plausible sequence to a self-replicating cell is exactly the part that remains hard. Still, moving from micro-edits to whole-genome generation is a real change of scale, and it is the synthetic-biology equivalent of going from paraphrasing sentences to composing entire documents.

The strategic significance is in the generality. Earlier genomic AI was built around a single organism or a single task. Evo 2 treats the whole tree of life as training material and offers a tool that predicts, designs and analyses across domains. If that generalist habit holds, the work shifts synthetic biology from hand-engineering each construct toward specifying what a sequence should do and letting the model propose the sequence.

It is early. Designed genomes still have to be assembled, tested and shown to function, and the gap between a learned distribution and a living system is not closed by a bigger context window. But the direction is unmistakable: the activity once called genetic engineering is starting to look like generative design, and the editor of record is becoming a language model.
