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
  {
    slug: "hoabl",
    name: "The House of Abhinandan Lodha (HoABL)",
    established: "",
    hq: "Mumbai",
    region: "Ayodhya & Goa",
    draft: true, // DRAFT until CP agreement is signed
    tagline: "Branded plotted developments in destination cities",
    overview:
      "The House of Abhinandan Lodha (HoABL) develops branded plotted land in high-growth destination cities, including Ayodhya and Goa. HoABL is a separate company from Lodha Group (Macrotech Developers). The two are not related businesses, and the Lodha Group brand belongs only to Macrotech.",
    investorView:
      "Plots are a different investment from apartments. There is no building to age, you choose when to build, and land in a city with new airports, roads and tourism can appreciate well. The trade-off is that plots earn no rent until you build, and resale depends on how the wider area develops. We explain both sides before you book.",
    website: "",
    featured: false,
  },
];

export const projects = [
  {
    id: 1,
    slug: "sobha-one-world-hoskote",
    name: "Sobha OneWorld",
    builder: "Sobha Limited",
    builderSlug: "sobha",
    status: "Ongoing", // launched, under construction, phase-wise RERA
    type: "Apartment",
    configurations: "1, 2, 3 & 4 BHK",
    locality: "Greater Whitefield (Hoskote)",
    corridor: "East Bangalore · Old Madras Road",
    city: "Bangalore",
    published: true,
    priceRange: "On Request",
    pricePerSqft: "On Request",
    priceValidAsOf: "",
    paymentPlans: [],
    possession: "On Request",
    rera: "PRM/KA/RERA/1250/304/PR/080526/008634 + 5 phases",
    sizeRange: "734 – 2,415 sq.ft.",
    totalUnits: "3,484",
    totalAcres: "48 acres",
    featured: true,
    heroImage: "/projects/sobha-one-world-hoskote/hero.jpg",
    images: [
      "/projects/sobha-one-world-hoskote/hero.jpg",
      "/projects/sobha-one-world-hoskote/retail-one-emporium.jpg",
      "/projects/sobha-one-world-hoskote/masterplan.jpg",
    ],
    floorPlans: [
      { label: "4 & 3 BHK Grande — Wing 1", image: "/projects/sobha-one-world-hoskote/floorplan-wing1.jpg" },
      { label: "3 BHK Luxe & 1 BHK — Wing 14", image: "/projects/sobha-one-world-hoskote/floorplan-wing14.jpg" },
    ],
    videoUrl: "",
    reviewSlug: "sobha-oneworld-review-2026-price-location-investment-honest-agent-take",
    overview:
      "Sobha OneWorld is a landmark 48-acre integrated township by Sobha Limited in Greater Whitefield, on Old Madras Road near Hoskote — one of East Bangalore's fastest-growing corridors. Spread across 14 wings and 3,484 residences (1 to 4 BHK), it is built around a full-size cricket stadium, five themed landscape zones and the expansive ONE CLUB. With Sobha's signature backward-integrated construction quality and a scale few projects in Bangalore can match, it suits both end-users wanting a branded lifestyle address and investors positioning early on the eastern growth belt.",
    highlights: [
      "48-acre integrated township — 14 wings, 3,484 residences",
      "By Sobha Limited — backward-integrated construction quality",
      "Full-size cricket / celebration stadium + 5 themed landscape zones",
      "On Old Madras Road, Greater Whitefield — East Bangalore IT belt",
      "Near the Bengaluru–Chennai Expressway, upcoming STRR & 43-km Purple Line metro",
      "1–4 BHK (734 – 2,415 sq.ft.) — configurations for every budget and goal",
    ],
    amenities: [
      "ONE CLUB (grand clubhouse)",
      "Cricket / Celebration Stadium",
      "Jogging & Cycling Track",
      "Running Track",
      "Leisure Pool & Kids Pool",
      "Tennis Courts",
      "Pickleball Courts",
      "Multi-Sport Court",
      "Skating Rink",
      "Yoga Lawn & Zen Courtyard",
      "Amphitheatre",
      "Wellness Gardens & Reflexology Walk",
      "Kids Play Park",
      "Pet Park",
      "Retail — One Emporium",
      "24x7 Security",
    ],
    connectivity: [
      "Orion Uptown Mall — 5 min",
      "Bearys Global Research Triangle — 5 min",
      "Brigade Signature Towers — 10 min",
      "East Point Hospital — 15 min",
      "ITPL / GR Tech Park — 25 min",
      "VR Bengaluru & Phoenix Marketcity — 25 min",
      "EPIP Zone / RMZ Infinity / KIADB Aerospace Park — 30 min",
      "Manipal & Aster Hospitals — 30 min",
    ],
    investment: {
      rentalYield: "",
      appreciationNote: "Greater Whitefield / Old Madras Road growth corridor",
      exitTimeline: "Invest during construction; exit near possession or hold for rent",
      thesis:
        "Sobha OneWorld sits on the Old Madras Road / Greater Whitefield corridor — one of East Bangalore's strongest employment and infrastructure belts, set to benefit from the Bengaluru–Chennai Expressway, the upcoming Satellite Town Ring Road and the 43-km Purple Line metro. Combined with Sobha's brand and build quality (which supports resale liquidity), an early-stage entry into a large 48-acre township can be a sound capital-appreciation play. Talk to us for a unit-specific analysis — including honest reasons to wait if that's the right call for you.",
    },
    nriNote:
      "Sobha OneWorld is a strong fit for NRI investors on the East Bangalore IT belt. We handle video tours, Power of Attorney, NRE/NRO payments and registration remotely — then manage the property for you after possession.",
    faqs: [
      {
        q: "What is the RERA number for Sobha OneWorld?",
        a: "Sobha OneWorld is registered phase-wise with Karnataka RERA: Phase 1 (Wings 1 & 2) PRM/KA/RERA/1250/304/PR/080526/008634; Phase 2 (Wings 3 & 4) …008637; Phase 3 (Wings 5 & 6) …008635; Phase 4 (Wings 7 & 8) …008636; Phase 5 (Wings 9, 10 & 11) …008638; Phase 6 (Wings 12, 13 & 14) …008639. All are verifiable on rera.karnataka.gov.in.",
      },
      {
        q: "What configurations and sizes are available?",
        a: "1 BHK (734 sq.ft.), 2 BHK Luxe (1,063) & Grande (1,204), 3 BHK Luxe (1,510) & Grande (1,735–1,838), and 4 BHK Luxe (2,096) & Grande (2,415 sq.ft.). Across 14 wings and 3,484 residences on a 48-acre township.",
      },
      {
        q: "Where exactly is Sobha OneWorld located?",
        a: "On Old Madras Road in Greater Whitefield, near Hoskote — East Bangalore. It's about 5 minutes from Orion Uptown Mall, 25 minutes from ITPL, and well-connected to the Bengaluru–Chennai Expressway, the upcoming Satellite Town Ring Road and the planned 43-km Purple Line metro extension.",
      },
      {
        q: "Can NRIs buy at Sobha OneWorld?",
        a: "Yes. We help NRIs buy remotely — video walkthroughs, Power of Attorney, NRE/NRO payments, registration — and manage the property afterwards. Message us to book a video call in your time zone.",
      },
    ],
    sourceNote:
      "Project details and imagery are from Sobha's official channel-partner kit. Contact Vani Estates for the current price list, availability and site-visit booking.",
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
  // ── HoABL DRAFTS ─────────────────────────────────────────────────────
  // All values marked TBC must be replaced from HoABL's official kit and the
  // UP / Goa RERA portals before setting draft:false + published:true.
  {
    id: 10,
    slug: "hoabl-the-sarayu-ayodhya",
    name: "The Sarayu by HoABL",
    builder: "The House of Abhinandan Lodha (HoABL)",
    builderSlug: "hoabl",
    status: "Ongoing", // TBC
    type: "Plot",
    configurations: "Residential plots",
    locality: "Ayodhya",
    corridor: "Lucknow–Gorakhpur Highway",
    city: "Ayodhya",
    state: "Uttar Pradesh",
    draft: true,
    published: false,
    seoTitle: "The Sarayu by HoABL, Ayodhya: Plot Prices, RERA, Location",
    seoDescription:
      "The Sarayu by HoABL in Ayodhya: plot sizes, price list, UP RERA details, location near Ram Mandir and an honest investment view. Free consultation.",
    priceRange: "TBC",
    pricePerSqft: "TBC",
    priceValidAsOf: "",
    paymentPlans: [],
    possession: "TBC",
    rera: "", // TBC: verify on up-rera.in
    sizeRange: "TBC",
    totalUnits: "",
    totalAcres: "", // TBC: reports range 25 to 75 acres
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    images: [],
    floorPlans: [],
    videoUrl: "",
    overview:
      "The Sarayu is a branded plotted development by The House of Abhinandan Lodha (HoABL) in Ayodhya, Uttar Pradesh, named after the Sarayu river. It sits on the Lucknow–Gorakhpur highway side of the city, a short drive from the Ram Mandir and Ayodhya airport. The development is planned with a luxury hotel partner and club facilities. It suits buyers who want a plot in Ayodhya as a long-term investment, a second home or a family connection to the city.",
    highlights: [
      "Branded plotted development by HoABL in Ayodhya",
      "A short drive from the Ram Mandir and Ayodhya airport (TBC: exact times)",
      "Planned luxury hotel and club facilities (TBC: from brochure)",
      "Build your own home, or hold the plot as a land investment",
    ],
    amenities: [],
    connectivity: [],
    investment: {
      rentalYield: "No rent until you build",
      appreciationNote: "Ayodhya airport, roads and pilgrimage tourism",
      exitTimeline: "Long-term hold, 5+ years",
      thesis:
        "Ayodhya has seen heavy public investment since 2020: an international airport, a redeveloped railway station, wider roads and a large rise in visitors. Land in a well-planned, branded layout is the simplest way to take part in that growth. Be clear about the other side too. A plot earns nothing until you build, prices have already risen a lot, and resale depends on demand in a smaller city. We give you both views and help you decide.",
    },
    nriNote:
      "NRIs and OCIs can buy residential plots in India (not agricultural land) under FEMA rules, paying from NRE or NRO accounts. We help with video walkthroughs, documents and Power of Attorney, so you don't need to travel to book.",
    faqs: [
      {
        q: "Is The Sarayu a Lodha Group project?",
        a: "No. The Sarayu is by The House of Abhinandan Lodha (HoABL), which is a separate company from Lodha Group (Macrotech Developers). The Lodha Group brand belongs only to Macrotech.",
      },
      {
        q: "Can NRIs buy a plot at The Sarayu?",
        a: "Yes. Under FEMA rules NRIs and OCIs can buy residential plots in India, as long as it is not agricultural land, plantation or a farmhouse. Payment must come from an NRE or NRO account or through normal banking channels.",
      },
      {
        q: "What is the price of plots at The Sarayu?",
        a: "Prices change by plot size and phase. Message us on WhatsApp for the current price list and availability, shared from HoABL's official sheet.",
      },
    ],
    sourceNote:
      "Project details are being confirmed with HoABL. Contact Vani Estates for the official brochure, current price list and RERA details.",
  },
  {
    id: 11,
    slug: "hoabl-one-goa",
    name: "One Goa by HoABL",
    builder: "The House of Abhinandan Lodha (HoABL)",
    builderSlug: "hoabl",
    status: "Ongoing", // TBC
    type: "Plot",
    configurations: "Residential villa plots",
    locality: "North Goa", // TBC: Bicholim per listings
    corridor: "North Goa",
    city: "Goa",
    state: "Goa",
    draft: true,
    published: false,
    seoTitle: "One Goa by HoABL, North Goa: Plot Prices, RERA, Location",
    seoDescription:
      "One Goa by HoABL in North Goa: villa plot sizes, price list, Goa RERA details, location and an honest investment view for Bangalore and NRI buyers.",
    priceRange: "TBC",
    pricePerSqft: "TBC",
    priceValidAsOf: "",
    paymentPlans: [],
    possession: "TBC",
    rera: "", // TBC: verify on rera.goa.gov.in (listings disagree)
    sizeRange: "TBC", // listings suggest ~1,539 to 1,851 sq ft
    totalUnits: "",
    totalAcres: "",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80",
    images: [],
    floorPlans: [],
    videoUrl: "",
    overview:
      "One Goa is a branded plotted development by The House of Abhinandan Lodha (HoABL) in North Goa. It offers villa plots for buyers who want to build a holiday home or hold land in Goa, one of India's most popular second-home markets. North Goa has new road links and the Mopa international airport, which has made the area easier to reach for weekend visits from Bangalore.",
    highlights: [
      "Branded villa plots by HoABL in North Goa",
      "Build a holiday home on your own timeline",
      "North Goa, served by the Mopa international airport (TBC: distance)",
      "Popular second-home market for Bangalore and NRI buyers",
    ],
    amenities: [],
    connectivity: [],
    investment: {
      rentalYield: "Holiday-rental income once built",
      appreciationNote: "North Goa infrastructure and second-home demand",
      exitTimeline: "Medium to long-term hold",
      thesis:
        "Goa has steady demand from people who want a holiday home they can also rent out. A villa plot lets you build when it suits you, rather than paying for a finished villa up front. The other side: you earn nothing until you build, building costs are extra, and holiday-rental income depends on location and management. We give you an honest view of both.",
    },
    nriNote:
      "NRIs and OCIs can buy residential plots in Goa (not agricultural land) under FEMA rules. We help with video walkthroughs, documents and Power of Attorney, so you can book without travelling.",
    faqs: [
      {
        q: "Is One Goa a Lodha Group project?",
        a: "No. One Goa is by The House of Abhinandan Lodha (HoABL), a separate company from Lodha Group (Macrotech Developers). The Lodha Group brand belongs only to Macrotech.",
      },
      {
        q: "Can I build a holiday home on a One Goa plot and rent it out?",
        a: "Usually yes, subject to the project's building guidelines and Goa's rules for holiday rentals. Ask us for the official guidelines from HoABL before you book.",
      },
      {
        q: "What is the price of plots at One Goa?",
        a: "Prices depend on plot size and phase. Message us on WhatsApp for the current price list from HoABL's official sheet.",
      },
    ],
    sourceNote:
      "Project details are being confirmed with HoABL. Contact Vani Estates for the official brochure, current price list and RERA details.",
  },
];

// Helpers
export const publishedProjects = () => projects.filter((p) => p.published);
// Drafts (draft:true) are built but hidden: not listed anywhere, noindex,
// not in the sitemap. Used to prepare projects before the CP agreement.
export const listedProjects = () => projects.filter((p) => !p.draft);
export const listedBuilders = () => builders.filter((b) => !b.draft);
export const projectsByBuilder = (builderSlug) =>
  projects.filter((p) => p.builderSlug === builderSlug);
export const getBuilder = (slug) => builders.find((b) => b.slug === slug);
