export const metadata = { title: "Testimonials" };

const quotes = [
  {
    text: [
      `I have found Rich Vinchesi and Olympic Advisors to be indispensable as we accelerate our growth and continue to build the value of our company. As CEO and Founder of a rapidly growing technology-enabled services firm, I needed someone who could perform a number of "CFO-like" functions that were critical in aggressively fulfilling our objectives.`,
      `These functions included the ability to think and act strategically about our business, experience in anticipating the needs of third party financing sources and reflecting our collective insights into a comprehensive business model and financial projections required during the due diligence process.`,
      `Whether helping us plan internally, or creating high impact negotiating strategies with potential partners, Rich Vinchesi has brought us a level of Finance and Business experience and savvy that has helped our company "stand out from the crowd" and be recognized for what we are truly worth. If you are thinking about accessing the growth capital markets, negotiating a partnership transaction, or trying to optimize your business model - likely in combination - I recommend that you retain Rich and his firm Olympic Advisors to ensure a highly successful outcome.`,
    ],
    name: "James Friedman",
    role: "Founder & Chief Executive Officer, ImmediateFX LLC",
  },
  {
    text: [
      `I have known Rich Vinchesi since 2010, and having spent many long hours on business models, growth strategies, customer negotiation, and exit strategy and negotiation, I feel that I can speak with confidence about Rich's capabilities, his integrity, and what it's like to work with him.`,
    ],
    leadIn: "When Rich began working with Data Garden in 2010, he promptly",
    bullets: [
      "Helped us get our books in order,",
      "Took over the weekly sales team meetings, implemented a proper sales management process, and successfully drove our sales team to roughly double monthly new business,",
      "Overhauled our Excel business model (which served as one of our critical tools for testing out the impact of different growth scenarios),",
      "Helped us standardize all of our contracts and identify which areas we were willing to negotiate, and which were showstoppers, which shortened our time to close new business",
    ],
    after: `Rich also led negotiations to sell Data Garden (including a year long negotiation with a Fortune 100 company), culminating in a successful sale of the company. We simply would not have negotiated a deal that our shareholders were happy with if Rich hadn't been leading the process. Rich brings the highest level of integrity and professional conduct to the table. On a personal level I trust Rich implicitly, and would jump at the opportunity to work with him again. I highly recommend him.`,
    name: "Jamie Sidey",
    role: "CEO & Co-Founder, Data Garden",
  },
  {
    text: [
      `I had the opportunity to meet Mr. Vinchesi and evaluate his executive management style and skills as part of a four month consulting engagement. I served as Executive Coach to the Chief Executive Officer and team, working with them as they sought to navigate through business issues critical to the survival of their company. Rich had the ability to advance persuasive arguments with both a strategic scope and also a solid foundation of financial analysis. He also demonstrated grace under pressure and emotional balance in the midst of difficult meetings. As a result of these experiences, I have referred Rich into several of our own client engagements, as he is our first choice for clients who need consulting expertise in financial executive management.`,
    ],
    name: "Dell Larcen",
    role: "Chief Executive Officer, Larcen Consulting Group",
  },
  {
    text: [
      `I'd like to thank you again for getting the financial side of the house into shape, for pulling-off deals where the other side had ten times the leverage we had, and yet you still got what we wanted, and for your incessant focus on how we could get to the financial fundamentals that would ensure our successful transition to the enterprise software business.`,
    ],
    name: "Steve Krause",
    role: "Founder, Personify, Inc.",
  },
];

export default function TestimonialsPage() {
  return (
    <article className="page copy bio-parchment">
      <h1 className="page-title">Client &amp; Partner Testimonials</h1>
      {quotes.map((quote) => (
        <section className="quote" key={quote.name}>
          <blockquote>
            {quote.text.map((paragraph, index) => (
              <p key={paragraph.slice(0, 24)}>
                {index === 0 ? "\u201C" : ""}
                {paragraph}
                {!quote.after && !quote.bullets && index === quote.text.length - 1 ? "\u201D" : ""}
              </p>
            ))}
            {quote.leadIn ? <p>{quote.leadIn}</p> : null}
            {quote.bullets ? (
              <ul>
                {quote.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {quote.after ? <p>{quote.after}&rdquo;</p> : null}
          </blockquote>
          <p className="attribution">{quote.name}</p>
          <p>{quote.role}</p>
        </section>
      ))}
    </article>
  );
}
