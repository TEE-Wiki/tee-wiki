import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import React from 'react';

import styles from './styles.module.css';

const featureItems = [
  {
    title: 'Architecture Playbook',
    description:
      'Compare SGX enclaves, VM-based TEEs like TDX and SEV, Nitro-style hypervisors, TrustZone deployments, and bespoke approaches to align your threat model with the right isolation strategy.',
    link: '/docs/tee-types/overview',
    linkLabel: 'Review TEE models',
    icon: () => (
      <svg viewBox="0 0 64 64" className={styles.featureIcon} aria-hidden="true">
        <path
          d="M8 20l24-12 24 12v24L32 56 8 44V20z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M20 26l12 6 12-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Build-Ready Tooling',
    description:
      'Dive into the open-source SDKs and deployment frameworks that streamline packaging workloads, managing attestation flows, and operating confidential runtimes from prototype to production.',
    link: '/docs/build-with-tees/overview',
    linkLabel: 'Explore the toolchain',
    icon: () => (
      <svg viewBox="0 0 64 64" className={styles.featureIcon} aria-hidden="true">
        <circle cx="20" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="44" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M24 30l12 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M40 18l-4-4-6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48 12l-8 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Hybrid Privacy Stack',
    description:
      'Use the TEE versus ZK, MPC, and FHE comparison to architect layered systems that balance verifiability, latency, and developer ergonomics across mixed trust assumptions.',
    link: '/docs/tees-in-context/comparison',
    linkLabel: 'Plan hybrid designs',
    icon: () => (
      <svg viewBox="0 0 64 64" className={styles.featureIcon} aria-hidden="true">
        <path
          d="M12 20l20-8 20 8v12c0 11-7.5 21.1-20 26-12.5-4.9-20-15-20-26V20z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M32 24v14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="32" cy="44" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

function FeatureCard({title, description, link, linkLabel, Icon}) {
  return (
    <article className={styles.featureCard}>
      <div className={styles.iconWrapper}>
        <Icon />
      </div>
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureDescription}>{description}</p>
      <Link className={styles.featureLink} to={link}>
        {linkLabel}
        <span aria-hidden="true" className={styles.linkArrow}>
          →
        </span>
      </Link>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureGrid}>
          {featureItems.map(({icon: Icon, ...feature}) => (
            <FeatureCard key={feature.title} Icon={Icon} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
