import Link from "next/link";

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
      <article className="page copy bio-parchment">
      <h1 className="page-title">Richard A. Vinchesi</h1>
      <img className="bio-photo" src="/images/378_Rich_Vinchesi.jpg" alt="Richard A. Vinchesi" />
      <div>
          <h2 className="role">CEO and Founder</h2>
          <p>
            <strong>
              Mr. Vinchesi has over 35 years of experience in corporate finance and executive
              management, having served variously as CFO, COO, Investment Banker, and CEO of an
              advisory services firm. Throughout his career, Mr. Vinchesi has raised money for
              companies and clients at every stage of growth, including Angel financings of $0.5
              million for small startups, Series A/B/C/D/E/F preferred stock financings between $1
              and $50 million for accelerating growth companies, a wide range of debt instruments,
              and IPO and high-yield transactions of $75 million to $1 billion for large and growing
              companies. See <Link href="/case-studies">Case Studies</Link>
            </strong>
          </p>
          <p>
            <strong>
              Mr. Vinchesi is Founder and CEO of Olympic Advisors, Inc., now in its 25th year, and a
              Managing Director of Stock Securities. He advises growth companies across the USA and
              Canada in consumer products, software and technology, eCommerce, and music and
              entertainment as they seek growth capital, negotiate strategic partnerships, build
              operations, and pursue sale transactions to strategic and private equity buyers.
            </strong>
          </p>
          <p>
            <strong>
              Prior to founding Olympic Advisors, Mr. Vinchesi served as Chief Financial Officer
              and Chief Operating Officer of several technology companies on both the East Coast
              and in Silicon Valley, including Inter-Act Electronic Marketing, Inc., and Personify,
              Inc., both of which were consumer promotion technology and analytics companies. In
              these Executive capacities, he recruited and led teams, implemented business
              strategies and changes, and negotiated and raised numerous equity financings. Mr.
              Vinchesi also oversaw SEC reporting of required regulatory filings.
            </strong>
          </p>
          <p>
            <strong>
              Prior to his executive management experiences, Mr. Vinchesi was an Investment Banker
              at Salomon Brothers Inc in New York City, specializing in bringing many first-time
              issuers to the public equity and high yield debt markets. Total capital raised with
              his direct involvement exceeded $3 billion in lead-managed transactions. At Salomon
              Brothers, Mr. Vinchesi covered a diverse universe of industries including Media,
              Telecommunications, and Paper and Forest Products.
            </strong>
          </p>
      </div>
      <p>
        <strong>
          Mr. Vinchesi holds a Masters in Management (MBA) from the J.L. Kellogg Graduate School of
          Management at Northwestern University, and a Bachelor of Science from the Stern School of
          Business at New York University.
        </strong>
      </p>
      <p>
        <strong>
          Mr. Vinchesi has also served as an Adjunct Professor at New York University, teaching
          &quot;Principles of Financial Modeling&quot;.
        </strong>
      </p>
    </article>
  );
}
