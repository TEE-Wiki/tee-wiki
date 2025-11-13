---
sidebar_position: 1
description: "Explore open-source SDKs and tools for building with TEEs including Gramine, Automata's Attestation SDKs, DStack SDK, ROFL, and SecretVM."
---

# Building with TEEs

## Open-source repositories:

* **[Gramine](https://gramineproject.io/)**: A lightweight, open-source Library OS designed to run unmodified Linux applications in TEEs. Gramine lifts essential OS interfaces into user space, making applications portable across platforms that implement a simple Platform Adaptation Layer (PAL).

* **Automata's Attestation SDKs**: Automata's suite of attestation SDKs enable onchain verification of TEE attestations across all major TEE families, including [Intel SGX](https://github.com/automata-network/automata-dcap-attestation), [Intel TDX](https://github.com/automata-network/tdx-attestation-sdk), [AMD SEV-SNP](https://github.com/automata-network/amd-sev-snp-attestation-sdk), and [AWS Nitro](https://github.com/automata-network/aws-nitro-enclave-attestation). Automata's [DCAP Dashboard](http://dcap.ata.network/) automates the  collateral upkeep and quote management required for Intel SGX and TDX attestations.

* **[DStack SDK](https://github.com/Dstack-TEE/dstack)**: The DStack SDK simplifies the steps for developers to deploy programs to a confidential VM and enables verification if an application runs inside a TEE

* **[ROFL](https://docs.oasis.io/build/rofl/quickstart)**: Run containerized apps in confidential VMs with out of the box support for decentralized policy management, key management, execution transparency and reproducible builds. Easily deploy apps on a decentralized cloud of TEE compute providers.

* **[SecretVM](https://github.com/scrtlabs/secretvm)**: SecretVM SDK includes all the components required to launch confidential Virtual Machines, including a reproducible build system for CVM artifacts, an on-chain Key Management System, and other tools

* **[Nautilus](https://github.com/MystenLabs/nautilus)**: Run resource-intensive, privacy-critical dApp workloads inside self-managed TEEs, while preserving on-chain trust via Sui Move smart contracts that verify attestations onchain. Nautilus provides a reproducible build template and runtime framework so hybrid dApps can handle private data, complex computations, and Web2 integrations in a tamper-resistant, cryptographically verifiable way.
