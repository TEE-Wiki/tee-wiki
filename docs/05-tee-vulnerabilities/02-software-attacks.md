---
title: Software attacks
description: 'Explore software-based attacks on TEEs like Foreshadow and SGAxe that exploit bugs in enclave firmware or runtime environments, and understand available mitigations.'
sidebar_label: Software attacks
---

# Software attacks

Bugs in enclave firmware or runtime environments can open the door to powerful attacks, even without touching the hardware.

### [Foreshadow (CVE-2018-3615)](https://access.redhat.com/security/vulnerabilities/L1TF)
Exploited speculative execution in Intel SGX to leak enclave memory, despite no software bugs in the enclave code itself.

**Mitigation:** Microcode updates can patch these vulnerabilities, while remote attestation allows systems to reject outdated or vulnerable TEEs.

### [SGAxe](https://sgaxe.com/)
Built on Foreshadow and extracted SGX attestation keys, undermining the enclave’s core trust guarantees.

**Mitigation:** Platforms must support key revocation and implement cryptoeconomic fallback mechanisms (like Multi-Prover Systems) to reduce reliance on any single enclave.
