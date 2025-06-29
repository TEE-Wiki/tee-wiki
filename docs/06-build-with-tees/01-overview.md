---
sidebar_position: 1
description: 'This is a public resource for learning about Trusted Execution Environments (TEEs). Our aim is to provide comprehensive coverage of key concepts, research advancements, and real-world applications of TEEs.'
---

# Building with TEEs

## Open-source repositories:

* **Building with [Gramine](https://gramineproject.io/)**: A lightweight, open-source Library OS designed to run unmodified Linux applications in TEEs. Gramine lifts essential OS interfaces into user space, making applications portable across platforms that implement a simple Platform Adaptation Layer (PAL).

* **Building with [DStack SDK](https://github.com/Dstack-TEE/dstack)**: The DStack SDK simplifies the steps for developers to deploy programs to a confidential VM and enables verification if an application runs inside a TEE

* **Building with [Automata SGX SDK](https://github.com/automata-network/automata-sgx-sdk)**: The Automata SGX SDK is a Rust-based toolkit that simplifies SGX application development by integrating with Rust’s Cargo build system and enabling developers to design custom enclave interfaces and manage enclave memory precisely. The SDK implements the [Automata DCAP Attestation](https://github.com/automata-network/automata-dcap-attestation) workflow for verification of quotes onchain.

* **Building with [ROFL](https://docs.oasis.io/build/rofl/quickstart)**: Run containerized apps in confidential VMs with out of the box support for decentralized policy management, key management, execution transparency and reproducible builds. Easily deploy apps on a decentralized cloud of TEE compute providers.

* **Building with [SecretVM](https://github.com/scrtlabs/secretvm)**: SecretVM SDK includes all the components required to launch confidential Virtual Machines, including a reproducible build system for CVM artifacts, an on-chain Key Management System, and other tools
