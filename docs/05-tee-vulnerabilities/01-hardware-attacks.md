---
title: Hardware attacks
description: "Learn about physical attacks on TEE chips including ÆPIC Leak, VoltPillager voltage fault injection, and laser fault injection, along with their mitigations."
sidebar_label: Hardware attacks
---

# Hardware attacks

These target the physical components of the chip, often requiring specialized equipment and physical access.

### [ÆPIC Leak (CVE-2022-21233)](https://aepicleak.com/)
The CPU's Advanced Programmable Interrupt Controller could expose stale data directly to untrusted software, letting attackers read secrets from SGX enclaves.

**Mitigation:** Intel microcode and SDK patches flush the APIC state.

### [VoltPillager (Voltage fault injection)](https://www.usenix.org/system/files/sec21summer_chen-zitai.pdf)
Attackers rapidly altered the power supply to SGX CPUs to bypass memory protections and read secrets from enclaves.

**Mitigation:** Modern TEEs include power integrity monitors that shut down execution on abnormal voltage behavior. VM-based TEEs (like Intel TDX) further isolate sensitive logic from these low-level attacks.

### Laser fault injection
Focused lasers were used to flip individual bits on a chip, interfering with secure operations and enabling privilege escalation.

**Mitigation:** Some secure chips integrate tamper sensors that detect physical intrusion and wipe memory if a breach is attempted.
