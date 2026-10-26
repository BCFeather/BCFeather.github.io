---
title: "Reading thousands of phage genes in one experiment"
date: 2026-10-18 10:26:00 +0800
tags: [biology, microbiology, phage]
categories: [science]
description: "An ETH-led team writing in *Nature Microbiology* in September built HIDEN-SEQ, a way to mutate almost every gene of a bacteriophage at once and read out which ones matter against each bacterial defence. A genome-wide map of viral fitness, built in a single experiment."
---

Bacteriophages, the viruses that eat bacteria, are among the most genetically diverse things alive, and most of what they carry is a mystery. Even phage T4, studied for seventy years, still has well over a hundred genes with no known function. A method described in *Nature Microbiology* in September, by Dorentina Humolli, Alexander Harms and colleagues at ETH Zürich, Basel and Lausanne, sets out to read that dark matter in a single experiment rather than gene by gene.

The problem the team solves is how to mutate a phage genome densely enough to ask what every gene does. Their method, HIDEN-SEQ, adapts a trick from bacterial genetics called transposon-insertion sequencing to viruses. A transposon, the mariner element Himar1, is inserted at random into the phage genome wherever it finds a TA site. To make the library selectable, the transposon carries an anti-CRISPR gene, while the host bacterium arms a CRISPR-Cas13a system that suppresses any phage that did not take up the transposon. The survivors are, en masse, a population of tens of thousands of differently mutated phages.

Then the experiment is simple to describe and powerful in effect. The researchers sequence where the transposons sit, and they compare the abundance of each mutant before and after the phage population is grown under a chosen condition. If a gene tolerates many insertions, it is dispensable. If its mutants vanish, the gene is required. Because the same library can be reused against different bacteria, the screen turns into a map of which viral gene matters when.

On T4, with its 168-kilobase genome and nearly three hundred genes, the library reached insertions at 97.2 per cent of available TA sites. Grown on ordinary *Escherichia coli*, 190 genes turned out to be dispensable, and the essentiality map reproduced decades of conventional T4 genetics, a strong check that the noisy, parallel method was seeing real biology. The interesting results came when the library met bacterial defences. The rIIA and rIIB genes became essential against the RexAB system, dmd against a toxin-antitoxin system, and a previously uncharacterized gene, tk.4, emerged as essential when T4 faced the DarTG2 defence. Structural similarity to a macrodomain in *Mycobacterium tuberculosis* let the team rename the protein AdfM and propose that it strips ADP-ribose modifications off the viral DNA.

The team then took the method to two less-studied phages, Bas37 and Bas54. In Bas54, a 136-kilobase virus with 227 predicted genes, the library reached 91.6 per cent saturation, and 145 genes could be disrupted without killing the virus. Tellingly, of the 44 genes that looked essential, 15 had no functional annotation at all. Even the core machinery of a poorly understood phage is, it turns out, a third unknown.

The most clinically suggestive move was to grow the phages against real clinical isolates of uropathogenic *E. coli* from patients, rather than the lab strain. Different isolates called on different viral countermeasures, and across the study the method exposed new phage factors acting against six distinct bacterial defence systems, five of them on genes with no known function.

For phage therapy, which wants to know why a phage works against one patient's bacterium and not another, that is the whole game. A method that turns a viral genome into thousands of parallel fitness experiments does not just catalog genes. It shows, for the first time at scale, exactly which bits of a phage a hospital strain can disable.
