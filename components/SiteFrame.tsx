import Link from "next/link";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/case-studies", label: "Client Examples" },
  { href: "/testimonials", label: "Testimonials" },
];

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="site">
      <header className="topbar">
        <Link href="/" className="wordmark">
          Olympic Advisors
        </Link>
        <nav className="nav" aria-label="Primary">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div>
          <p className="wordmark footer-mark">Olympic Advisors, Inc.</p>
          <p>3201 Zafarano Drive, Suite C547 · Santa Fe, NM 87507</p>
        </div>
        <div>
          <p>
            <a href="tel:12039184077">(203) 918-4077</a>
          </p>
          <p>
            <a href="mailto:rvinchesi@olympicadv.com">rvinchesi@olympicadv.com</a>
          </p>
          <p>
            <a href="https://www.olympicadv.com">www.olympicadv.com</a>
          </p>
        </div>
        <p className="disclaimer">
          All securities transactions are through Stock Securities LLC, member of{" "}
          <a href="https://www.finra.org" target="_blank" rel="noreferrer">
            FINRA
          </a>
          {" / "}
          <a href="https://www.sipc.org" target="_blank" rel="noreferrer">
            SIPC
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
