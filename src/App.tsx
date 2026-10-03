import { useEffect, useRef } from 'react';

const WHATSAPP_URL = "https://wa.me/212600000000?text=Hi%20Mohcine%2C%20I%27m%20interested%20in%20a%20landing%20page!";

function App() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // ===== Intersection Observer for Scroll Reveals =====
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-scale');
    revealElements.forEach((el) => observer.observe(el));

    // ===== Sticky Header Glass Effect =====
    const header = headerRef.current;
    const handleScroll = () => {
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('glass-scrolled');
          header.classList.remove('glass');
        } else {
          header.classList.remove('glass-scrolled');
          header.classList.add('glass');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // ===== Magnetic Button Effect =====
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    magneticBtns.forEach((btn) => {
      const button = btn as HTMLElement;
      button.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = button.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left - rect.width / 2;
        const y = mouseEvent.clientY - rect.top - rect.height / 2;
        button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
      });
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-white relative overflow-hidden">
      {/* Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* Background Elements */}
      <div className="bg-grid fixed inset-0 pointer-events-none"></div>
      <div className="radial-glow top-[-200px] left-1/2 -translate-x-1/2 fixed"></div>

      {/* ===== HEADER ===== */}
      <header
        ref={headerRef}
        className="glass fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl md:text-2xl font-bold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            <span className="text-white">Mohcine</span>
            <span className="gradient-text"> Ibriz</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow magnetic-btn px-5 py-2.5 rounded-full text-sm font-semibold text-white inline-flex items-center gap-2"
          >
            Let's Talk
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </nav>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20">
        {/* Floating particles */}
        <div className="particle" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
        <div className="particle" style={{ top: '60%', left: '85%', animationDelay: '2s' }}></div>
        <div className="particle" style={{ top: '30%', left: '70%', animationDelay: '4s' }}></div>
        <div className="particle" style={{ top: '75%', left: '20%', animationDelay: '1s' }}></div>
        <div className="particle" style={{ top: '45%', left: '50%', animationDelay: '3s' }}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 badge-pulse mb-8">
            <span className="text-sm md:text-base font-medium text-purple-300">
              🚀 High-Converting Web Developer & Conversion Specialist
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="hero-heading reveal reveal-delay-1 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="gradient-text-hero">I Build High-Converting Landing Pages</span>
            <br />
            <span className="text-white/90">That Turn Clicks Into</span>{' '}
            <span className="gradient-text-hero">Revenue.</span>
          </h1>

          {/* Sub-headline */}
          <p className="reveal reveal-delay-2 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop losing potential customers to slow, poorly designed pages. I help e-commerce brands and businesses scale with lightning-fast, conversion-optimized landing pages.
          </p>

          {/* CTA Buttons */}
          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow magnetic-btn px-8 py-4 rounded-full text-base font-semibold text-white inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Let's Build Your Page
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
            <a
              href="#offer"
              className="btn-outline magnetic-btn px-8 py-4 rounded-full text-base font-semibold text-purple-300 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              View Benefits
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider max-w-4xl mx-auto"></div>

      {/* ===== ABOUT SECTION ===== */}
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Who Am <span className="gradient-text">I</span>?
            </h2>
          </div>
          <div className="reveal reveal-delay-1">
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              Hey, I'm <span className="text-white font-semibold">Mohcine Ibriz</span>. I don't just write code—I engineer digital experiences designed to sell. While most developers focus only on how a website looks, my obsession is{' '}
              <span className="text-purple-400 font-semibold">conversion, speed, and performance</span>.
            </p>
          </div>
          <div className="reveal reveal-delay-2 mt-6">
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              Combining modern tech stacks with a deep understanding of digital psychology, I build bulletproof landing pages that capture attention instantly and drive relentless sales. If you're tired of mediocre designs and want a high-performance asset that actually works for your business, you're in the right place.
            </p>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider max-w-4xl mx-auto"></div>

      {/* ===== OFFER SECTION ===== */}
      <section id="offer" className="relative py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2
              className="reveal text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Simple, Transparent, &{' '}
              <span className="gradient-text">High-Impact</span>
            </h2>
          </div>

          {/* Pricing Card */}
          <div className="reveal-scale max-w-lg mx-auto">
            <div className="card-glow rounded-2xl p-8 md:p-10 relative">
              {/* Card Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/20 mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7"/>
                        <stop offset="100%" stopColor="#6366f1"/>
                      </linearGradient>
                    </defs>
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold mb-3"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  The High-Converting Landing Page
                </h3>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  A custom-engineered, ultra-fast landing page built to turn your traffic into paying customers. No fluff, just pure performance.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-10">
                <FeatureItem text="Custom Hero Section engineered for high conversions" />
                <FeatureItem text="Ultra-fast architecture & clean code" />
                <FeatureItem text="100% Mobile-responsive & SEO-ready" />
                <FeatureItem text="Integrated direct WhatsApp CTA button for instant leads" />
                <FeatureItem text="Fast turnaround time" />
              </div>

              {/* CTA Button */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow magnetic-btn w-full px-8 py-4 rounded-xl text-base font-semibold text-white inline-flex items-center justify-center gap-2"
              >
                Claim Your Landing Page
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-zinc-500 text-sm md:text-base mb-2">
            Built with passion & high performance by{' '}
            <span className="text-zinc-300 font-medium">Mohcine Ibriz</span>.
          </p>
          <p className="text-zinc-600 text-xs md:text-sm">
            © 2026 All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// ===== Feature Item Component =====
function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className="check-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <span className="text-zinc-300 text-sm md:text-base group-hover:text-white transition-colors duration-300">
        {text}
      </span>
    </div>
  );
}

export default App;
