// ============================================================
// Award Prospect Limited — Website Constants
// ============================================================

export const COMPANY = {
  nameEn: "Award Prospect Limited",
  nameZh: "澳華發展有限公司",
  tagline: "Global Sourcing & Supply Chain · Hong Kong",
  address:
    "Flat/Rm 307, Kam Hon Industrial Building, 8 Wang Kwun Road, Kowloon Bay, Hong Kong",
  email: "kevin@awardprospect.com",
  yearFounded: 2019,
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Timeline", href: "#timeline" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO = {
  eyebrow: "Global Sourcing & Supply Chain · Hong Kong",
  headline: "We Bridge Markets,\nDeliver Trust.",
  subheadline:
    "End-to-end cross-border procurement — from brand sourcing to last-mile logistics. We help the world's best products reach China's largest platforms.",
  cta1: "Explore Capabilities",
  cta2: "Get in Touch",
};

export const ABOUT = {
  title: "Built on Experience.\nDriven by Integrity.",
  story: `Founded in 2019 and headquartered in Hong Kong, Award Prospect Limited was built by seasoned foreign trade and cross-border logistics professionals who saw a better way to move goods across borders.

We partner directly with brands and authorized distributors worldwide — no grey market, no shortcuts. Every shipment comes with a complete, auditable supply chain. From ANZ health products to European and Japanese beauty, we've sourced and delivered over HKD 70 million in authentic goods for China's most demanding e-commerce platforms.`,
  stats: [
    {
      value: "2019",
      label: "Founded",
      sub: "Hong Kong headquartered, global operations",
    },
    {
      value: "HKD 70M+",
      label: "Procured",
      sub: "Cumulative cross-border procurement volume",
    },
    {
      value: "100+",
      label: "Partners",
      sub: "Stable relationships across brands, platforms & distributors",
    },
  ],
  imageCaption: "Our Hong Kong office — Kwun Tong, Kowloon Bay",
};

export const CAPABILITIES = {
  title: "What We Do",
  subtitle: "Three pillars of cross-border excellence",
  cards: [
    {
      icon: "ShoppingBag",
      title: "Global Sourcing",
      tagline: "We don't just find products. We build supply chains.",
      points: [
        "Direct from brand owners & tier-1 authorized distributors",
        "Full documentation: certificates of origin, brand authorization letters, compliance records",
        "Multi-category expertise: health & nutrition, beauty & skincare, personal care, mother & baby",
      ],
      footer: "Every product we source comes with a paper trail you can trust.",
    },
    {
      icon: "Ship",
      title: "Logistics & Warehousing",
      tagline: "Your goods, our responsibility — from port to platform.",
      points: [
        "Hong Kong warehousing with climate-controlled storage",
        "China bonded warehouse network for customs-cleared distribution",
        "Door-to-door tracking & real-time shipment visibility",
        "Cross-border freight management across sea, air & land",
      ],
      footer: "One partner. One chain. Zero blind spots.",
    },
    {
      icon: "BarChart3",
      title: "Multi-Channel Distribution",
      tagline: "We connect brands to the platforms that matter.",
      points: [
        "Tmall Global, Suning & Pinduoduo flagship partnerships",
        "Self-operated cross-border e-commerce channels",
        "Platform-specific category strategy & compliance support",
        "China market intelligence & consumer trend analysis",
      ],
      footer:
        "Your products, in front of the right customers, on the right shelves.",
    },
  ],
};

export const WHY_US = {
  title: "Why Award Prospect",
  subtitle: "Numbers don't lie. Here's what sets us apart.",
  metrics: [
    { value: 70, suffix: "M+", prefix: "HKD ", label: "Total procurement volume" },
    { value: 50, suffix: "+", prefix: "", label: "Brand partners worldwide" },
    { value: 100, suffix: "+", prefix: "", label: "Stable business partnerships" },
    {
      value: 100,
      suffix: "%",
      prefix: "",
      label: "Authorized supply chain — no grey market, ever",
    },
  ],
  badges: [
    {
      title: "Brand Authorized",
      text: "Every product sourced directly from brand owners or their officially appointed distributors. Full documentation provided.",
    },
    {
      title: "Compliance First",
      text: "Complete customs documentation, certificates of origin, and regulatory compliance for every shipment.",
    },
    {
      title: "Team You Can Trust",
      text: "Founded by foreign trade and logistics veterans with deep cross-border expertise across Asia-Pacific and Europe.",
    },
  ],
};

export const TIMELINE = {
  title: "Our Journey",
  subtitle: "From a single desk in Hong Kong to a global sourcing network.",
  nodes: [
    {
      year: "2019",
      title: "The Beginning",
      text: "Award Prospect Limited established in Hong Kong. Launched cross-border procurement focused on Australian and New Zealand health & nutrition brands — A2, Swisse, Blackmores, Bio Islands. First-year procurement: HKD 7M.",
    },
    {
      year: "2020",
      title: "The Pivot",
      text: "Recognizing shifting market dynamics in ANZ categories, we strategically expanded into beauty & skincare. Within 14 months, procured HKD 41M across brands including Estée Lauder, La Mer, Bioderma, Dior, and Shiseido. Monthly run rate: HKD 3M.",
    },
    {
      year: "2024",
      title: "Strategic Partnerships",
      text: "Deepened brand relationships into multi-year strategic agreements. Expanded distribution reach to cover all major Chinese cross-border e-commerce platforms. Built proprietary supply chain infrastructure in Hong Kong.",
    },
    {
      year: "2025+",
      title: "Global Vision",
      text: "Expanding sourcing networks into new categories and geographies. Investing in digital supply chain tools. Building the bridge between the world's best brands and Asia's most dynamic markets.",
    },
  ],
};

export const PARTNERS = {
  title: "Brands We Work With",
  subtitle:
    "Trusted by category leaders across health, beauty, and personal care.",
  row1: [
    "A2",
    "Swisse",
    "Blackmores",
    "Bio Islands",
    "Maxigenes",
    "Vaseline",
  ],
  row2: [
    "Estée Lauder",
    "La Mer",
    "Bioderma",
    "Dior",
    "Shiseido",
    "Vaseline",
  ],
};

export const CONTACT = {
  title: "Let's Talk",
  subtitle:
    "Whether you're a brand looking to enter China, or a platform seeking reliable supply — we'd love to hear from you.",
  addressLabel: "Address",
  emailLabel: "Email",
};

export const FOOTER = {
  tagline: "Global Sourcing & Cross-Border Supply Chain",
  subhead: "Hong Kong · Since 2019",
  copyright: `© ${new Date().getFullYear()} Award Prospect Limited. All rights reserved.`,
};
