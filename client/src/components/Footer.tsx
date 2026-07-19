const Footer = () => {
  return (
    <footer className="relative mt-20 h-24 bg-accent-light py-3">
      {/* Left branding */}
      <div className="absolute left-16 top-1/2 -translate-y-1/2">
        <h2 className="text-3xl font-light">
          I Hand U
        </h2>

        <p className="mt-1 text-xs tracking-wide text-text-muted">
          Curated Vintage Collection
        </p>
      </div>

      {/* Center block */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
        <div className="flex items-center gap-4 text-sm text-text">
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

        <div className="mt-2 w-72 border-t border-accent pt-2">
          <p className="text-xs text-text">
            © 2026 I Hand U
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;