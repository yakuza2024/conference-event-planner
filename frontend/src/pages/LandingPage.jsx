function LandingPage({ onStart }) {
  return (
    <main className="landing-page">
      <header className="landing-topbar">
        <a className="wordmark wordmark-light-mode" href="#home">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span>Gather<span className="wordmark-light">well</span></span>
        </a>
        <span className="landing-top-note">THOUGHTFUL EVENTS, BEAUTIFULLY PLANNED</span>
      </header>

      <section className="landing-hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> A BETTER WAY TO GATHER</div>
          <h1>Bring people<br />together. <em>Beautifully.</em></h1>
          <p>From the first welcome to the last goodbye, the best events make every detail feel effortless. Let’s make yours one to remember.</p>
          <button type="button" className="start-button" onClick={onStart}>
            Plan your event <span aria-hidden="true">→</span>
          </button>
          <div className="hero-proof"><span className="proof-star" aria-hidden="true">✳</span> Thoughtfully planned. Ready for anything.</div>
        </div>

        <div className="hero-art">
          <div className="art-glow" />
          <div className="art-frame">
            <img className="hero-product-image" src="/images/venue-hero.jpg" alt="Sunlit modern conference room with a long table and chairs" />
          </div>
          <div className="art-caption"><span>01</span> A space for every possibility</div>
          <div className="art-stamp">GOOD<br />THINGS<br />GATHER <span>✳</span></div>
        </div>
      </section>

      <footer className="landing-footer">
        <span>GATHERWELL CONVENTION CENTER</span>
        <div><span>SPACES</span><span>EXPERIENCES</span><span>MEMORIES</span></div>
        <span>MADE FOR COMING TOGETHER</span>
      </footer>
    </main>
  )
}

export default LandingPage
