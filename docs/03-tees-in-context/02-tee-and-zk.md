---
title: TEEs + ZK
description: 'Understand how TEEs and Zero-Knowledge proofs can work together, with TEEs providing soft finality and privacy for inputs while ZK offers final proof correctness.'
sidebar_label: TEE + ZK
---

# TEE + ZK

TEEs and ZK can work in tandem in a variety of scenarios:

*   TEEs offer an independent mechanism for generating proofs as a secondary check for a greater guarantee of ZK proof correctness
*   TEEs provide soft finality in the block-building process due to their lightweight nature while ZK provides the final determination of correctness, but it takes a longer time to generate the proof
*   TEEs can be used to receive private inputs and ensure that these inputs are not exposed
