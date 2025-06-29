---
title: AI Agents
sidebar_label: AI Agents
---

# AI Agents 

AI Agents often handle sensitive user data, perform mission-critical tasks and, in some cases, manage user funds. This dual responsibility makes Trusted Execution Environments (TEEs) particularly well-suited for AI Agent applications due to two critical properties:

### Privacy Through Hardware Isolation

AI Agents receive substantial amounts of user data, including personal information, preferences, and behavioral patterns. TEEs provide complete isolation of this data from the hardware owner or any other processes running on the system. The enclave creates a secure boundary where user data is encrypted and can only be accessed by the authorized AI Agent code. Even if the hardware owner has root access to the system, they cannot access the data or computations happening within the TEE. This hardware-level isolation ensures that user privacy is maintained regardless of the trustworthiness of the infrastructure provider.

### Verifiability Through Attestation

When AI Agents manage user funds or make other critical decisions, users need assurance that the correct, unmodified code is running. TEE attestation reports provide cryptographic proof of the exact code and configuration running within the enclave. Users can verify these attestation reports to establish the provenance of the AI Agent's source code before entrusting it with their data or funds. This creates a trustless environment where users don't need to trust the hardware owner or service provider—they can cryptographically verify that the expected AI Agent code is executing in a genuine TEE environment.

The combination of privacy and verifiability makes TEEs uniquely positioned to enable AI Agents that can handle sensitive user data while maintaining the trustless properties that are essential for decentralized applications.
