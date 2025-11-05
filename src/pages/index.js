import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import React, {useMemo, useState} from 'react';

import {contributors as contributorData} from '@site/src/data/contributors';
import styles from './index.module.css';

function HeroLogo({contributor}) {
  const {name, website, logo} = contributor;
  const [showImage, setShowImage] = useState(Boolean(logo));
  const logoUrl = logo ? useBaseUrl(logo) : null;

  return (
    <Link
      className={styles.heroLogoItem}
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} website`}>
      {showImage && logoUrl ? (
        <img
          src={logoUrl}
          alt=""
          loading="lazy"
          onError={() => setShowImage(false)}
        />
      ) : (
        <span aria-hidden="true">{name.charAt(0).toUpperCase()}</span>
      )}
    </Link>
  );
}

function ContributorTile({contributor}) {
  const {name, website, logo, description} = contributor;
  const [showImage, setShowImage] = useState(Boolean(logo));
  const logoUrl = logo ? useBaseUrl(logo) : null;

  return (
    <Link
      className={styles.contributorTile}
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} website`}>
      {showImage && logoUrl ? (
        <img
          src={logoUrl}
          alt={`${name} logo`}
          loading="lazy"
          onError={() => setShowImage(false)}
          className={styles.contributorLogo}
        />
      ) : (
        <span className={styles.contributorFallback} aria-hidden="true">
          {name.charAt(0).toUpperCase()}
        </span>
      )}
      <span className={styles.contributorName}>{name}</span>
      {description ? (
        <span className={styles.contributorDescription}>{description}</span>
      ) : null}
    </Link>
  );
}

function HeroSection() {
  const contributorCount = contributorData.length;
  // Duplicate multiple times for truly seamless infinite scroll
  const duplicatedContributors = useMemo(
    () => [...contributorData, ...contributorData, ...contributorData, ...contributorData],
    [],
  );

  return (
    <header className={styles.heroSection}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
            <Heading as="h1" className={styles.heroTitle}>
              TEE Wiki
            </Heading>
            <p className={styles.heroSubtitle}>
              A collaborative knowledge base for trusted execution environments, curated by the tee.fyi
              community to accelerate responsible adoption across Web3 and beyond.
            </p>
            <div className={styles.ctaGroup}>
              <Link
                className={clsx('button button--primary button--lg', styles.ctaPrimary)}
                to="/docs/category/introduction">
                <span>Get Started</span>
              </Link>
              <Link
                className={clsx('button button--outline button--lg', styles.ctaSecondary)}
                href="https://github.com/TEE-Wiki/tee-wiki"
                target="_blank"
                rel="noopener noreferrer">
                <span>Contribute</span>
              </Link>
            </div>
        </div>
        <div className={styles.logoScrollWrapper}>
          <div className={styles.logoScrollTrack}>
            {duplicatedContributors.map((contributor, idx) => (
              <div key={`${contributor.name}-${idx}`} className={styles.logoScrollItem}>
                <HeroLogo contributor={contributor} />
              </div>
            ))}
          </div>
        </div>
        <p className={styles.heroSupport}>
          Supported by <strong>{contributorCount}</strong> contributing members—and growing.
          <Link className={styles.heroSupportLink} to="#contributors">
            Meet the community
          </Link>
        </p>
      </div>
    </header>
  );
}

function GitHubContributorsSection() {
  const [allContributors, setAllContributors] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    fetch('https://api.github.com/repos/TEE-Wiki/tee-wiki/contributors?per_page=100')
      .then(r => r.json())
      .then(data => {
        // Shuffle to avoid showing only top contributors
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        setAllContributors(shuffled);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const displayedContributors = showAll ? allContributors : allContributors.slice(0, 12);
  const hasMore = allContributors.length > 12;

  return (
    <section className={styles.statsSection} id="contributors">
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Built by the Community
        </Heading>
        <p className={styles.sectionSubtitle}>
          Meet the developers and researchers contributing to the TEE Wiki knowledge base.
        </p>
        {loading ? (
          <div className={styles.contributorsLoading}>Loading contributors...</div>
        ) : (
          <>
            <div className={styles.contributorsGrid}>
              {displayedContributors.map((contributor) => (
                <Link
                  key={contributor.id}
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contributorCard}>
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    className={styles.contributorAvatar}
                  />
                  <div className={styles.contributorName}>{contributor.login}</div>
                </Link>
              ))}
            </div>
            {hasMore && !showAll && (
              <div className={styles.showMoreWrapper}>
                <button
                  className={clsx('button button--secondary button--lg', styles.showMoreButton)}
                  onClick={() => setShowAll(true)}>
                  Show all {allContributors.length} contributors
                </button>
              </div>
            )}
          </>
        )}
        <div className={styles.statsActions}>
          <Link
            className={clsx('button button--primary button--lg', styles.statsButton)}
            href="https://github.com/TEE-Wiki/tee-wiki"
            target="_blank"
            rel="noopener noreferrer">
            <span>View on GitHub</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="TEE Wiki at tee.fyi is a shared knowledge base accelerating responsible use of trusted execution environments.">
      <HeroSection />
      <main>
        <HomepageFeatures />
        <GitHubContributorsSection />
      </main>
    </Layout>
  );
}
