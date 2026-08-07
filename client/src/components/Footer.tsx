const Footer = () => {
  return (
    <footer className="mt-20 bg-accent-light px-4 py-6 lg:relative lg:h-24 lg:px-0 lg:py-3">
      {/* Left branding */}
      <div className="text-center lg:absolute lg:left-16 lg:top-1/2 lg:-translate-y-1/2 lg:text-left">
        <h2 className="text-2xl font-light lg:text-3xl">I Hand U</h2>

        <p className="mt-1 text-xs tracking-wide text-text-muted">
          Curated Vintage Collection
        </p>
      </div>

      {/* Center block */}
      <div className="mt-5 flex flex-col items-center text-center lg:absolute lg:left-1/2 lg:top-1/2 lg:mt-0 lg:-translate-x-1/2 lg:-translate-y-1/2">
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-text lg:gap-4">
          <a
            href="https://www.instagram.com/ihand.u.myclothes/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-accent"
          >
            Instagram
          </a>

          <span className="text-accent">|</span>

          <span>Athens, Greece</span>
        </div>

        <div className="mt-2 w-full max-w-72 border-t border-accent pt-2">
          <p className="text-xs text-text">© 2026 I Hand U</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
