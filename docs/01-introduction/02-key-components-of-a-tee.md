---
sidebar_position: 2
description: "Explore the three fundamental components of TEEs: memory isolation, secure execution, and remote attestation, and understand how they work together to provide security."
---

# Key components of a TEE

- **Memory isolation**: Data and applications running inside the enclave cannot be accessed or modified by external software or hardware components, including the host OS or hypervisor. Isolation is primarily enforced through memory encryption, protecting enclave memory from unauthorized access and tampering. This enables TEEs to secure operations even within otherwise untrusted systems, such as a cloud server, where potentially multiple tenants share resources.

- **Secure execution**: A TEE ensures that all code within the enclave runs in a secure and tamper-resistant manner. Only authorized applications are permitted to operate within the enclave, mitigating risks of unauthorized code execution. This isolation also applies to the data that the code processes, as it remains encrypted when not in use, significantly reducing the risk of data exposure.

- **Remote attestation**: A unique aspect of a TEE is the ability to generate cryptographic proofs that verify the integrity of the TEE and the code running inside it. Remote attestation allows external systems to confirm the authenticity and state of a TEE, building trust in the results produced by the enclave. The attestation report or quote is signed using an attestation key provisioned by the hardware vendor.
