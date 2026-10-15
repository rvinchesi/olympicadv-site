export const metadata = { title: "Selected Clients" };

type Client = {
  name: string;
  logo?: string;
  logoFill?: boolean;
  logoBoost?: boolean;
  description: string;
  note?: string;
};

const ecommerceClients: Client[] = [
  {
    name: "FCP Euro",
    logo: "/images/fcp-euro.png",
    description: "Automotive Aftermarket Parts for European car enthusiasts",
    note: "$36mm Preferred Stock; $12 mm mezzanine loan",
  },
  {
    name: "Earth Breeze",
    logo: "/images/earth-breeze.png",
    logoBoost: true,
    description: "Eco-friendly laundry and household cleaning products",
  },
  {
    name: "TMPL8",
    logo: "/images/tmpl8.png",
    logoBoost: true,
    description: "Hair longevity and wellness",
  },
];

const retailClients: Client[] = [
  {
    name: "Miss Jones Baking Co.",
    logo: "/images/miss-jones-baking.webp",
    description: "Organic baking mixes and frostings",
  },
  {
    name: "Vitruvi",
    logo: "/images/175_Vitruvi_logo.jpeg",
    logoFill: true,
    description: "Premium Air Care products",
  },
  {
    name: "Torie & Howard",
    logo: "/images/236_T_H_Logo.jpg",
    description: "Organic hard and chewy candy",
    note: "Acquired by American Licorice",
  },
  {
    name: "Dog Gone Smart",
    logo: "/images/221_D.GS.jpg",
    description: "Innovative pet products",
  },
];

const softwareClients: Client[] = [
  {
    name: "Artist Growth",
    logo: "/images/212_Artist_Growth_logo.jpg",
    description: "Event & Project Management for the entertainment industry",
  },
  {
    name: "CultureConnect",
    logo: "/images/culture-connect.png",
    logoFill: true,
    description: "Museum patron engagement platform",
    note: "Acquired by Axiell Group",
  },
  {
    name: "Data Garden",
    logo: "/images/238_Data_Garden_Logo.jpg",
    description: "Retailer consumer brand analytics",
    note: "Acquired by SPINS",
  },
  {
    name: "ImmediateFX",
    logo: "/images/78_Picture1.jpg",
    logoFill: true,
    description: "Marketing Mix Modeling",
    note: "Acquired by Symphony Technology Group",
  },
  {
    name: "Aris Global",
    logo: "/images/275_Aris_Global_logo.jpg",
    description: "Pharmacovigilance software",
    note: "$20 million minority investment",
  },
  {
    name: "Digital ReLab",
    logo: "/images/100_Digital_ReLab.jpg",
    description: "Intelligent digital asset management",
  },
  {
    name: "LUMA Institute",
    logo: "/images/378_LUMA_logo.jpg",
    description: "Human centered design",
  },
];

function ClientRow({ clients }: { clients: Client[] }) {
  return (
    <div className="client-row">
      {clients.map((client) => (
        <section className="client-col" key={client.name}>
          <div className="logo-frame">
            {client.logo ? (
              <img
                src={client.logo}
                alt={client.name}
                className={
                  [client.logoFill ? "logo-fill" : "", client.logoBoost ? "logo-boost" : ""]
                    .filter(Boolean)
                    .join(" ") || undefined
                }
              />
            ) : (
              <span>{client.name}</span>
            )}
          </div>
          <p className="client-blurb">{client.description}</p>
          {client.note ? <p className="client-note">{client.note}</p> : null}
        </section>
      ))}
    </div>
  );
}

export default function CaseStudiesPage() {
  return (
    <article className="page copy services bio-parchment">
      <h1 className="page-title">Selected Clients</h1>
      <h2 className="section-title">eCommerce</h2>
      <ClientRow clients={ecommerceClients} />
      <h2 className="section-title">Traditional Retail</h2>
      <ClientRow clients={retailClients} />
      <h2 className="section-title">Software Clients</h2>
      <ClientRow clients={softwareClients} />
    </article>
  );
}
