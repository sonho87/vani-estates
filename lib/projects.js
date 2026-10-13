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
    locality: "Tihura Manjha, Sadar, Ayodhya",
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
    possession: "RERA completion date 14 May 2027",
    rera: "UP RERA UPRERAPRJ954926/03/2024 (The Sarayu-2)",
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
      "Widely reported buyers include Amitabh Bachchan (Business Today, January 2024)",
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
        q: "What is the RERA number of The Sarayu?",
        a: "The Sarayu-2 is registered with UP RERA under UPRERAPRJ954926/03/2024, valid from 2 March 2024 to 14 May 2027. The promoter is HOABL Realtech Private Limited, and the project is at Mauza Tihura Manjha, Tehsil Sadar, Ayodhya. You can verify it on up-rera.in.",
      },
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
    name: "One Goa – The Crescendo by HoABL",
    builder: "The House of Abhinandan Lodha (HoABL)",
    builderSlug: "hoabl",
    status: "Ongoing",
    type: "Plot",
    configurations: "1,539 sq ft villa land (143 sq m)",
    locality: "Carapur, Bicholim, North Goa",
    corridor: "North Goa · 40 min from Mopa Airport",
    city: "Goa",
    state: "Goa",
    draft: true,
    published: true,
    seoTitle: "One Goa The Crescendo by HoABL, Bicholim: ₹99.9 L Villa Plots, RERA",
    seoDescription:
      "One Goa The Crescendo by HoABL in Bicholim, North Goa: 1,539 sq ft villa land at ₹99.9 lakh all-inclusive, 10:15:75 plan, Goa RERA PRGO03252427.",
    priceRange: "₹99.9 lakh all-inclusive (was ₹1.20 Cr)",
    pricePerSqft: "About ₹6,490 / sq ft",
    priceValidAsOf: "Festive offer, October 2026. Limited period, can change.",
    paymentPlans: [
      "10% within 60 days of booking",
      "15% on receipt of OC or March 2027, whichever is later",
      "75% on initiation of possession or July 2027, whichever is later",
    ],
    possession: "Plots Dec 2026 · Clubhouse Mar 2027",
    rera: "Goa RERA PRGO03252427 (P3) · PRGO05242232 (P1) · PRGO05242234 (P2)",
    sizeRange: "1,539 sq ft (143 sq m)",
    totalUnits: "",
    totalAcres: "About 90 acres",
    featured: true,
    heroImage: "/projects/hoabl-one-goa/hero.jpg",
    images: [
      "/projects/hoabl-one-goa/hero.jpg",
      "/projects/hoabl-one-goa/villa-plots.jpg",
      "/projects/hoabl-one-goa/clubhouse.jpg",
      "/projects/hoabl-one-goa/lazy-river.jpg",
      "/projects/hoabl-one-goa/miros-hospitality.jpg",
    ],
    floorPlans: [],
    videoUrl: "",
    overview:
      "One Goa – The Crescendo is the final phase of One Goa, a branded villa-land development by The House of Abhinandan Lodha (HoABL) at Carapur, Bicholim in North Goa. It spreads across about 90 acres next to 150+ acres of forest, with a 17+ acre central zone built around Ivory Sands Marina, a man-made sea and beach, and a 40,000 sq ft clubhouse designed by Enzyme APD. The development is serviced by Miros Hotels & Resorts. Plots are 1,539 sq ft, with G+1 villas allowed, and are about 40 minutes from Mopa International Airport. It suits buyers who want a Goa holiday home they can build and rent out, or land they can hold for the long term.",
    highlights: [
      "1,539 sq ft villa land at ₹99.9 lakh all-inclusive, down from ₹1.20 crore (festive offer)",
      "Easy 10:15:75 payment plan: only 10% now, 75% at possession",
      "Ivory Sands Marina: a man-made sea and beach inside the development",
      "40,000 sq ft clubhouse by Enzyme APD, serviced by Miros Hotels & Resorts",
      "About 90 acres, 6,000+ trees, 40+ amenities, next to 150+ acres of forest",
      "Optional 2-floor villa built for you, about ₹60 to 70 lakh (estimate, final quote in writing)",
      "Plot, villa build, holiday rental and resale managed end to end by Vani Estates with HoABL",
    ],
    amenities: [
      "Ivory Sands Marina (man-made sea & beach)",
      "Multi-tiered clubhouse (40,000 sq ft)",
      "Lazy river & waterfall",
      "Private cabanas & beach spa",
      "Open-air café & alfresco dining",
      "Amphitheatre & celebration lawn",
      "Rock climbing & paintball",
      "Skating rink & multipurpose courts",
      "Mini golf",
      "Zen, aroma & labyrinth gardens",
      "Forest observatory & star gazing",
      "Children's play area",
      "10+ km tree-lined avenues",
      "24x7 security",
    ],
    connectivity: [
      "Mopa International Airport: 32 km, about 40 min",
      "Mapusa: 24 km, about 30 min",
      "Divar Island: 15 km, about 20 min",
      "Basilica of Bom Jesus, Old Goa: 25 km, about 25 min",
      "Assagao: 30 km, about 40 min",
      "Near NH-66 (Mumbai–Goa highway) and State Highway 1",
    ],
    investment: {
      rentalYield: "Holiday-rental income once your villa is built and registered",
      appreciationNote: "Mopa airport, NH-66 upgrade, Bicholim bypass (due 2026)",
      exitTimeline: "Hold 5+ years, or build and rent",
      thesis:
        "Goa has steady demand for holiday homes that can also be rented out, and North Goa is now easier to reach with the Mopa airport and the upgraded Mumbai–Goa highway. At ₹99.9 lakh all-inclusive with 75% payable only at possession, One Goa is an easy entry into a large branded layout with clear plots, roads, water and power. G+1 villas are allowed at FSI 0.8, so a 1,539 sq ft plot can take a villa of about 1,230 sq ft. A quality 2-floor villa costs roughly ₹60 to 70 lakh, putting the total at about ₹1.6 to 1.7 crore. The honest part: Bicholim is inland, so the beach experience is the project's own man-made one. Rental income and future prices are not guaranteed. They depend on demand, management and how the area grows. We show you a worked example with real nightly rates from nearby villas before you decide.",
    },
    nriNote:
      "NRIs and OCIs can buy this villa land under FEMA rules, paying from NRE or NRO accounts. HoABL runs the presentation over video call, so you can book from abroad without visiting. We handle documents, Power of Attorney, villa construction and rental management for you.",
    faqs: [
      {
        q: "What is the price at One Goa – The Crescendo?",
        a: "During the current festive offer, 1,539 sq ft (143 sq m) of villa land is ₹99.9 lakh all-inclusive, down from ₹1.20 crore. The all-inclusive price is subvention-linked. Offers are for a limited period and HoABL can change them, so WhatsApp us to confirm today's price.",
      },
      {
        q: "What is the payment plan?",
        a: "10% within 60 days of booking, 15% on receipt of the occupancy certificate or March 2027 (whichever is later), and 75% on initiation of possession or July 2027 (whichever is later). Banks finance up to 50 to 60% of the agreement value.",
      },
      {
        q: "How much do I pay to book?",
        a: "You can block a plot with a ₹45,000 application amount. HoABL states it is refundable if you choose not to proceed. Read the application form terms before you pay.",
      },
      {
        q: "What is the RERA number of One Goa?",
        a: "One Goa is registered with Goa RERA in three phases: P1 PRGO05242232 and P2 PRGO05242234 (valid to 31 March 2029), and P3 (The Crescendo) PRGO03252427 (valid 10 March 2025 to 31 March 2029). The promoter is HOABL Impactum Land Private Limited (formerly Errichter Infra Private Limited). You can verify these on rera.goa.gov.in.",
      },
      {
        q: "When is possession?",
        a: "As per HoABL, plot possession is planned for December 2026 and the clubhouse and amenities for March 2027.",
      },
      {
        q: "Can I build a villa and how big?",
        a: "Yes. G+1 (ground plus one floor) villas are allowed at an FSI of 0.8, which means about 1,230 sq ft of built-up area on a 1,539 sq ft plot. Vani Estates coordinates construction with HoABL. A quality 2-floor villa typically costs about ₹60 to 70 lakh, and we give you the final quote in writing before work starts.",
      },
      {
        q: "Can I rent the villa on Airbnb?",
        a: "Yes, once it is built. Holiday rentals in Goa must be registered with Goa's tourism department. We can manage registration, listing, guests and upkeep. Income depends on season, nightly rates and occupancy, so we show you a realistic estimate rather than a promise.",
      },
      {
        q: "Is there a real beach at Bicholim?",
        a: "Bicholim is inland Goa. The beach at One Goa is Ivory Sands Marina, a man-made sea and beach inside the development, shared by residents of One Goa P1, P2 and P3. The nearest natural beaches are a drive away.",
      },
      {
        q: "Are there maintenance charges?",
        a: "Yes. Clubhouse maintenance is ₹8 per sq ft, as per HoABL. Ask us for the full list of charges before you book.",
      },
      {
        q: "Is One Goa a Lodha Group project?",
        a: "No. HoABL states in its own material that The House of Abhinandan Lodha was established in 2020 and is not in any manner associated with Lodha or Lodha Group (Macrotech Developers).",
      },
    ],
    sourceNote:
      "Details are from HoABL's official channel-partner kit and Goa RERA certificates (October 2026). Images are artist's impressions from the official brochure. One Goa P1, P2 and P3 are presently mortgaged with Vistra ITCL (India) Limited, as disclosed by the promoter. Sale is subject to the application form and agreement for sale. Government taxes and charges are extra where applicable.",
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
