import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Evgenij Zabolotskih</span>
        </h1>

        <p className="hero-tagline">
          Senior staff platform engineer. I design and operate the systems other
          engineers depend on.
          <br />
          Lead Platform Developer at{' '}
          <a href="https://www.indykite.ai" className="hero-highlight">
            IndyKite
          </a>
          .
          <br />
          Co-founder of{' '}
          <a href="https://ice-markets.com" className="hero-highlight">
            ICE Markets Ltd
          </a>{' '}
          since 2015.
        </p>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About
          </Link>
          <Link href="/resume" className="button button-secondary">
            Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
