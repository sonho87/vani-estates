// ─────────────────────────────────────────────────────────────────────────
// NEW PROJECTS — branded-builder projects Vani Estates markets as a channel
// partner (Sobha, Prestige, Brigade, Total Environment, etc.).
//
// HOW TO PUBLISH A REAL PROJECT
//   1. Onboard the builder and get their OFFICIAL channel-partner kit
//      (images, floor plans, price sheet, RERA number, payment plans).
//   2. Upload images to Cloudinary (cloud: dskj5tocr, folder:
//      vani-estates/projects/<slug>/) and paste the URLs.
//   3. Fill the real fields: rera, priceRange, pricePerSqft, paymentPlans,
//      possession, configurations, sizeRange, investment{}, faqs[].
//   4. Set  published: true   — ONLY when rera is filled. Until then the
//      page is noindex and excluded from the sitemap (placeholder state).
//   5. NEVER copy images/floor plans/copy from builder sites or portals
//      (copyright + duplicate-content SEO penalty). Builder-supplied only.
//
// The 3 entries below are PLACEHOLDERS (published:false) demonstrating the
// layout. Replace with official data and flip published:true to promote.
// ─────────────────────────────────────────────────────────────────────────

export const projectStatuses = [
  "All",
  "Ready to Move",
  "Ongoing",
  "Upcoming",
  "Completed",
];

// ── Builder registry (drives /projects/builders/<slug>/) ─────────────────
// Track-record copy is written as an honest, general channel-partner view of
// each publicly-listed developer — no fabricated delivery statistics.
export const builders = [
  {
    slug: "sobha",
    name: "Sobha Limited",
    established: "1995",
    hq: "Bangalore",
    tagline: "Backward-integrated construction quality",
    overview:
      "Sobha Limited is one of India's most respected developers, headquartered in Bangalore and known for its backward-integrated model — it controls much of its own construction, interiors, glazing and metalwork in-house rather than sub-contracting everything. For buyers, that typically translates into consistent build quality and finish.",
    investorView:
      "Sobha's brand commands a resale and rental premium. Investors pay more per square foot up front, but the quality reputation supports exit value — which matters most for capital-gains and NRI buyers who need liquidity at resale.",
    website: "",
    featured: true,
  },
  {
    slug: "prestige",
    name: "Prestige Group",
    established: "1986",
    hq: "Bangalore",
    tagline: "One of South India's largest developers",
    overview:
      "The Prestige Group is a large, listed South-India developer with a broad portfolio across residential, commercial, retail and hospitality. Its scale and delivery history make it a default choice for many first-time investors who want a recognised name.",
    investorView:
      "Prestige's wide range means there is usually a project at most price points and stages — from pre-launch investment plays to ready-to-move homes. Strong brand recall aids resale demand in the secondary market.",
    website: "",
    featured: true,
  },
  {
    slug: "brigade",
    name: "Brigade Group",
    established: "1986",
    hq: "Bangalore",
    tagline: "Bangalore-rooted, mixed-use expertise",
    overview:
      "Brigade Group is a Bangalore-headquartered developer known for large mixed-use and township developments that combine residences with retail, offices and amenities. Its integrated communities appeal to end-users who value lifestyle infrastructure on-site.",
    investorView:
      "Brigade's township and mixed-use projects can offer strong rental demand thanks to on-site amenities and workplace proximity — useful for investors targeting yield alongside appreciation.",
    website: "",
    featured: true,
  },
  {
    slug: "total-environment",
    name: "Total Environment",
    established: "1996",
    hq: "Bangalore",
    tagline: "Design-led, nature-integrated homes",
    overview:
      "Total Environment is known for distinctive, design-led homes — brick architecture, private terrace gardens and low-density living that stands apart from the standard glass-tower template. Their projects attract a discerning, design-conscious buyer.",
    investorView:
      "The design premium is real and so is the buyer loyalty. These homes appeal to a niche that pays for distinctiveness, which can support both rental premium and resale differentiation — best suited to buyers willing to wait for possession.",
    website: "",
    featured: true,
  },
];

export const projects = [
  {
    id: 1,
    slug: "sobha-one-world-hoskote",
    name: "Sobha One World",
    builder: "Sobha Limited",
    builderSlug: "sobha",
    status: "Upcoming", // Ready to Move | Ongoing | Upcoming | Completed
    type: "Apartment",
    configurations: "2, 3 & 4 BHK",
    locality: "Hoskote",
    corridor: "East Bangalore",
    city: "Bangalore",
    published: false, // ← flip to true only after real data + RERA are added
    priceRange: "On Request",
    pricePerSqft: "On Request",
    priceValidAsOf: "",
    paymentPlans: [], // e.g. ["Construction-Linked Plan (CLP)", "10:90"]
    possession: "To be updated",
    rera: "", // builder's RERA number — mandatory before publishing
    sizeRange: "On Request",
    totalUnits: "",
    totalAcres: "",
    featured: true,
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    ],
    floorPlans: [], // { label: "3 BHK", image: "<cloudinary url>" }
    videoUrl: "", // builder walkthrough embed URL, or Amarnath's site-visit video
    overview:
      "A landmark township-style development by Sobha Limited in Hoskote, East Bangalore — designed for investors and end-users who value a trusted brand, quality construction and strong long-term appreciation. Ideal for buyers who want to invest early and move in (or exit) on completion.",
    highlights: [
      "By Sobha Limited — backward-integrated construction quality",
      "Positioned on the eastern growth corridor",
      "Brand-backed resale and rental confidence",
      "Suited to invest-now, move-or-profit-later buyers",
    ],
    amenities: [
      "Clubhouse",
      "Swimming Pool",
      "Gymnasium",
      "Landscaped Gardens",
      "Children's Play Area",
      "24x7 Security",
    ],
    connectivity: [], // e.g. ["12 min to Whitefield", "Near NH-75"]
    investment: {
      rentalYield: "", // e.g. "3.0 – 3.5% gross (locality estimate)"
      appreciationNote: "", // honest, sourced/assumption-stated
      exitTimeline: "", // e.g. "Invest at launch, exit near possession (~3-4 yrs)"
      thesis: "", // 2-3 sentence investor case
    },
    nriNote:
      "Buying from abroad? We handle video tours, Power of Attorney, NRE/NRO payments and registration, then manage the property for you after possession.",
    faqs: [], // { q, a }
    sourceNote:
      "Official details and assets to be provided by the builder. Contact Vani Estates for the current price list and brochure.",
  },
  {
    id: 2,
    slug: "total-environment-pursuit-of-a-radical-rhapsody",
    name: "Total Environment — Pursuit of a Radical Rhapsody",
    builder: "Total Environment",
    builderSlug: "total-environment",
    status: "Ongoing",
    type: "Apartment",
    configurations: "3 & 4 BHK",
    locality: "Whitefield",
    corridor: "East Bangalore",
    city: "Bangalore",
    published: false,
    priceRange: "On Request",
    pricePerSqft: "On Request",
    priceValidAsOf: "",
    paymentPlans: [],
    possession: "To be updated",
    rera: "",
    sizeRange: "On Request",
    totalUnits: "",
    totalAcres: "",
    featured: true,
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    floorPlans: [],
    videoUrl: "",
    overview:
      "Total Environment is known for nature-integrated, design-led homes with brick-and-greenery architecture that stands apart in Bangalore. A strong choice for discerning buyers who are willing to wait for possession in exchange for a distinctive, premium, brand-backed home.",
    highlights: [
      "Signature Total Environment design and build quality",
      "Premium, low-density, design-led living",
      "Strong end-user demand and rental premium",
      "Wait-for-completion buyers rewarded with brand value",
    ],
    amenities: [
      "Clubhouse",
      "Rooftop Gardens",
      "Swimming Pool",
      "Gymnasium",
      "Co-working Spaces",
      "24x7 Security",
    ],
    connectivity: [],
    investment: {
      rentalYield: "",
      appreciationNote: "",
      exitTimeline: "",
      thesis: "",
    },
    nriNote:
      "Buying from abroad? We handle video tours, Power of Attorney, NRE/NRO payments and registration, then manage the property for you after possession.",
    faqs: [],
    sourceNote:
      "Official details and assets to be provided by the builder. Contact Vani Estates for the current price list and brochure.",
  },
  {
    id: 3,
    slug: "prestige-southern-star",
    name: "Prestige Southern Star",
    builder: "Prestige Group",
    builderSlug: "prestige",
    status: "Ready to Move",
    type: "Apartment",
    configurations: "2, 3 & 4 BHK",
    locality: "Begur Road, South Bangalore",
    corridor: "South Bangalore",
    city: "Bangalore",
    published: false,
    priceRange: "On Request",
    pricePerSqft: "On Request",
    priceValidAsOf: "",
    paymentPlans: [],
    possession: "Ready to Move",
    rera: "",
    sizeRange: "On Request",
    totalUnits: "",
    totalAcres: "",
    featured: true,
    heroImage:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    ],
    floorPlans: [],
    videoUrl: "",
    overview:
      "A ready-to-move community by Prestige Group in South Bangalore — ideal for buyers who want a branded home they can occupy immediately or rent out from day one, with the assurance of a completed, RERA-delivered project.",
    highlights: [
      "By Prestige Group — a marquee South India developer",
      "Ready to move — no construction wait or risk",
      "Immediate rental income potential",
      "Established South Bangalore location",
    ],
    amenities: [
      "Clubhouse",
      "Swimming Pool",
      "Gymnasium",
      "Tennis & Sports Courts",
      "Landscaped Gardens",
      "24x7 Security",
    ],
    connectivity: [],
    investment: {
      rentalYield: "",
      appreciationNote: "",
      exitTimeline: "",
      thesis: "",
    },
    nriNote:
      "Ready to move means immediate rental income. We handle remote purchase, registration and end-to-end property management for NRI owners.",
    faqs: [],
    sourceNote:
      "Official details and assets to be provided by the builder. Contact Vani Estates for the current price list and brochure.",
  },
];

// Helpers
export const publishedProjects = () => projects.filter((p) => p.published);
export const projectsByBuilder = (builderSlug) =>
  projects.filter((p) => p.builderSlug === builderSlug);
export const getBuilder = (slug) => builders.find((b) => b.slug === slug);
