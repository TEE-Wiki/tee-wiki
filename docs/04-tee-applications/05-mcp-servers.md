---
title: MCP Servers
sidebar_label: MCP Servers
---

# MCP Servers 

MCP (Model Context Protocol) Servers are specialized services that provide AI models with access to external data sources, tools, and APIs. They act as intermediaries between AI models and various data repositories, enabling models to retrieve real-time information, execute actions, and access contextual data that enhances their capabilities.

## Why TEEs are Beneficial for MCP Servers

MCP Servers are frequently responsible for processing confidential user information, executing essential operations, and sometimes overseeing financial assets. Because of these high-stakes roles, Trusted Execution Environments (TEEs) are an excellent fit for MCP Server deployments, offering two key advantages:

### Data Protection 

MCP Servers receive substantial amounts of user data, including personal information, preferences, and behavioral patterns. TEEs provide complete isolation of this data from the hardware owner or any other processes running on the system. The enclave creates a secure boundary where user data is encrypted and can only be accessed by the authorized MCP Server code. Even if the hardware owner has root access to the system, they cannot access the data or computations happening within the TEE. This hardware-level isolation ensures that user privacy is maintained regardless of the trustworthiness of the infrastructure provider.

### Verifiability

Much like with AI agents, with MCP Servers users also need assurance that the correct, unmodified code is running. TEE attestation reports provide cryptographic proof of the exact code and configuration running within the enclave. Users can verify these attestation reports to establish the provenance of the MCP Server's source code before entrusting it with their data or funds. This creates a trustless environment where users don't need to trust the hardware owner or service provider—they can cryptographically verify that the expected MCP Server code is executing in a genuine TEE environment.

### Key Protection and Collision Prevention

A critical advantage of using TEEs for MCP Servers is the ability to keep cryptographic keys completely unknown to the server operators. When MCP Servers handle sensitive operations like financial transactions or data access, they often require cryptographic keys for authentication and encryption. In traditional setups, these keys must be accessible to the server operators, creating a significant security risk.

TEEs solve this problem by allowing keys to be generated and stored within the secure enclave, where they are never exposed to the host system or its operators. The keys can be used for cryptographic operations within the TEE, but their actual values remain hidden from anyone outside the enclave. This prevents the risk of key collision—where malicious operators could potentially access, copy, or misuse the keys to impersonate the MCP Server or access unauthorized data.

The combination of data protection, verifiability, and key protection makes TEEs uniquely positioned to enable secure MCP Servers that can handle sensitive operations while maintaining the trustless properties essential for decentralized applications.

