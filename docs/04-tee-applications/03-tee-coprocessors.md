---
title: TEE Coprocessors
description: "Understand how TEE Coprocessors handle secure, intensive computations like multi-proving, random number generation, and machine learning inference separately from the main EVM."
sidebar_label: TEE Coprocessors
---

# TEE Coprocessors 

A TEE Coprocessor handles secure, intensive computations separately from the main processor (the Ethereum Virtual Machine). 

Where Ethereum is well-suited for computations that can be handled by the EVM, TEE Coprocessors are specialized, high-performance environments designed to handle structured, repetitive, and resource-intensive tasks that require security and isolation.

Here are some tasks that the TEE Coprocessor can handle more efficiently:

*   **Multi-Provers for decentralized systems:** TEE Provers can be integrated into any decentralized system as an independent proving mechanism. Other proving systems are not immune to bugs, and adding an additional TEE Prover does not add significant overhead to computational costs.
*   **Random Number Generation (RNG):** Generating high-quality random numbers (for lotteries or games) on-chain is challenging because blockchains are deterministic. TEEs can securely generate true randomness using hardware-based random number generators (RNGs) where the results are verifiable onchain. This produces reliable randomness while maintaining security and integrity without heavy computation on the EVM.
*   **Machine learning inference:** A TEE Coprocessor enables a model to be run securely offchain within the enclave. User inputs are encrypted and decrypted only side the TEE, while the inference output is signed by the enclave and verified onchain.
