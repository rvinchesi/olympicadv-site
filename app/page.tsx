import Link from "next/link";

const chapters = [
  {
    kicker: "Investment banking",
    title: "Salomon Brothers",
    text: "I began my career at Salomon Brothers in New York, serving corporate clients in their pursuit of public equity and high-yield debt. Lead-managed transactions with my direct involvement raised more than $3 billion.",
  },
  {
    kicker: "Operating executive",
    title: "Chief Financial Officer",
    text: "I then served full time as CFO and COO of technology companies on the East Coast and in Silicon Valley, including Inter-Act Electronic Marketing and Personify. I built and led teams, planned and enabled growth, raised equity and debt, and oversaw SEC reporting.",
  },
  {
    kicker: "Consulting & Executive Management",
    title: "Olympic Advisors",
    text: "As Founder and CEO I work hands-on with founders on business growth and corporate finance. Consumer products, software and technology, eCommerce, and music and entertainment. Founders often say we built the company together.",
  },
  {
    kicker: "Investment Banking",
    title: "Stock Securities",
    text: "In parallel I am a Managing Director of Stock Securities, the Stamford investment bank through which I advise on sell-side mergers and acquisitions and raise capital for select clients.",
  },
];

const ranges = [
  { figure: "$0.5M", label: "Angel financings for early startups" },
  { figure: "$1–50M", label: "Series A through F preferred stock" },
  { figure: "Debt", label: "Bank / non-Bank, ABL, merchant, mezzanine, venture, and shareholder loans" },
  { figure: "$75M–$1B", label: "IPO and high-yield transactions for larger companies" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-parchment">
      <div className="hero">
        <figure className="portrait">
          <img src="/images/378_Rich_Vinchesi.jpg" alt="Richard A. Vinchesi" />
        </figure>
        <div className="hero-copy">
          <p className="eyebrow">Santa Fe, New Mexico</p>
          <h1>Richard A.<span className="name-space"> </span>Vinchesi</h1>
          <p className="roles">
            Founder &amp; CEO, Olympic Advisors
            <br />
            Managing Director, Stock Securities
          </p>
          <blockquote>
            If you have a corporate finance problem I can&apos;t solve, you are in serious trouble.
          </blockquote>
          <p>
            For over 35 years I have built businesses with founders and executives across industries
            and through various stages of growth, advising on all the elements that achieve the
            mission: optimal strategy, leadership, organization, go-to-market, sales, marketing,
            operations, exit planning, and eventual exit. I have completed dozens of equity and debt
            transactions of all shapes and sizes. Clients come for a combination that is uncommon in
            one person: investment banker, full-time chief financial officer, and hands-on consultant
            to startups and growth companies.
          </p>
          <p className="hero-links">
            <Link href="/experience">Read the biography</Link>
            <Link href="/case-studies">Selected work</Link>
          </p>
        </div>
      </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <h2>A career spanning investment banking, growth consulting, and executive management</h2>
          <p className="band-intro">
            Most advisors know one of these jobs. I have done all four, and I still do the last two
            every week.
          </p>
          <ol className="chapters">
            {chapters.map((chapter) => (
              <li key={chapter.title}>
                <p className="eyebrow">{chapter.kicker}</p>
                <h3>{chapter.title}</h3>
                <p>{chapter.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ranges">
        <div className="band-inner">
          <h2>Capital formation experience at every stage of growth</h2>
          <p className="band-intro">
            Growth companies from pre-revenue through more than $200 million in sales. Seed / Angel /
            Micro-VC / Venture Capital / Private Equity &amp; A wide variety of debt structures.
          </p>
          <ul className="range-list">
            {ranges.map((item) => (
              <li key={item.figure}>
                <strong>{item.figure}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
          <p className="industries">
            Consumer products · Software &amp; technology · eCommerce · Music &amp; entertainment
          </p>
        </div>
      </section>

      <section className="close">
        <div className="band-inner close-inner">
          <blockquote>&ldquo;Rich and I built this company together.&rdquo;</blockquote>
          <p>What founders say while on the journey and at the exit.</p>
          <p className="hero-links">
            <Link href="/testimonials">Client testimonials</Link>
            <a href="mailto:rvinchesi@olympicadv.com">Write to Rich</a>
          </p>
        </div>
      </section>
    </>
  );
}
