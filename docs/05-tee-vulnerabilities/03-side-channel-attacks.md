---
title: Side-channel attacks
description: 'Discover side-channel attacks like WireTap, SGX-Step, and CacheZoom that infer secrets by observing TEE behavior through timing, power, and electromagnetic emissions.'
sidebar_label: Side-channel attacks
---

# Side-channel attacks

These attacks don’t break the enclave directly, they infer secrets by watching its behavior, such as timing differences or physical emissions.

### [WireTap (Physical bus-snooping hardware attack)](https://wiretap.fail/)
WireTap inserts a custom DDR4 interposer between the CPU and DRAM to capture encrypted memory traffic from Intel SGX enclaves. By analyzing these physical signals, attackers exploit deterministic memory encryption in Intel’s Total Memory Encryption (TME) to recover plaintext patterns. This enables the extraction of the SGX Quoting Enclave’s ECDSA signing key, allowing the creation of forged attestation quotes that verify as genuine.

**Mitigation:**
* Rotate attestation keys frequently and limit their exposure.
* Use multi-prover or distributed attestation to reduce single-machine trust assumptions.

### [SGX‑Step (Interrupt‑driven single‑stepping attack)](https://github.com/jovanbulck/sgx-step)
SGX‑Step is an open‑source framework that lets an untrusted OS raise high‑frequency APIC timer interrupts, effectively single‑stepping an enclave one instruction at a time, debugger-like. By precisely measuring where each **Asynchronous Enclave Exit (AEX)** occurs, an attacker can: reconstruct fine‑grained control‑flow, defeat in‑enclave ASLR, mount data‑oriented or branch‑shadowing attacks that extract secrets such as key‑dependent branches and memory indices.

**Mitigation:**  
* Detect or rate‑limit frequent AEX events inside the enclave and abort if a threshold is exceeded.
* Adopt constant‑time, data‑oblivious code paths so that observing instruction‑level control‑flow leaks no secret‑dependent behaviour.
* Long‑term: hardware extensions such as **AEX‑Notify** let trusted enclave code run immediately after every interrupt, blocking precise single‑stepping in commodity CPUs.


### [CacheZoom (Timing-based attack)](https://eprint.iacr.org/2017/618.pdf)
By carefully measuring how long certain memory operations took, attackers reconstructed secret access patterns in SGX.

**Mitigation:** Developers can use constant-time algorithms and memory obfuscation techniques like ORAM to reduce timing leaks.

### Power & EM analysis
Observing power draw or electromagnetic signals during enclave execution can reveal cryptographic keys or sensitive data.

**Mitigation:** Injecting noise, isolating sensitive workloads, and rotating keys regularly can make these attacks infeasible in practice.
