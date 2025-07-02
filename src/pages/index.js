import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import React from 'react';
import Markdown from 'react-markdown';

const markdownContent = `
The TEE Wiki is a collaborative knowledge base focused on Trusted Execution Environments (TEEs) and their role in decentralized systems, with particular emphasis on applications in Web3. This repository is intended to serve as a shared technical resource to help standardize understanding and accelerate responsible adoption of TEE technology.


A shared effort by [Automata Network](https://ata.network/), [Flashbots](https://www.flashbots.net/), [Marlin](https://www.marlin.org/), [Oasis Network](https://oasis.net/), [Phala Network](https://phala.network/), [Poetic Technologies](https://poeticte.ch/), [Rena Labs](https://renalabs.xyz/), [Secret Network](https://scrt.network/), [SpaceComputer](https://www.spacecomputer.io/), [t1](https://www.t1protocol.com/), and [TEN Protocol](https://ten.xyz/).
`;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const imageUrl = useBaseUrl('/img/banner.jpg');
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img src={imageUrl} alt="Banner" />
        
        <p className="hero__subtitle">
          <Markdown>{markdownContent}</Markdown>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/introduction">
            Go To Wiki
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
