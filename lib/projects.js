// ─────────────────────────────────────────────────────────────────────────
// NEW PROJECTS — branded-builder projects Vani Estates markets as a channel
// partner (Sobha, Total Environment, Prestige, etc.).
//
// IMPORTANT — how to add a real project:
//   1. Onboard the builder as a channel partner and get their OFFICIAL
//      marketing kit (images, floor plans, price list, RERA number).
//   2. Upload images to Cloudinary (cloud: dskj5tocr, folder:
//      vani-estates/projects/<project-slug>/) and paste the URLs below.
//   3. Fill in the real rera, priceRange, possession and configurations.
//   4. Do NOT copy images/floor plans from builder websites or
//      Housing/MagicBricks — only use builder-provided assets (copyright
//      + duplicate-content SEO penalty).
//
// The entries below are PLACEHOLDERS to show the layout. Replace the
// "On Request" / "To be updated" fields and placeholder images with
// official data before promoting these pages.
// ─────────────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 1,
    slug: "sobha-one-world-hoskote",
    name: "Sobha One World",
    builder: "Sobha Limited",
    status: "Upcoming", // Ready to Move | Ongoing | Upcoming | Completed
    type: "Apartment",
    configurations: "2, 3 & 4 BHK",
    locality: "Hoskote",
    city: "Bangalore",
    priceRange: "On Request",
    possession: "To be updated",
    rera: "", // builder's RERA number — mandatory before advertising
    sizeRange: "On Request",
    featured: true,
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    ],
    floorPlans: [], // { label: "3 BHK", image: "<cloudinary url>" }
    overview:
      "A landmark township-style development by Sobha Limited in Hoskote, East Bangalore — designed for investors and end-users who value a trusted brand, quality construction and strong long-term appreciation. Ideal for buyers who want to invest early and move in (or exit) on completion.",
    highlights: [
      "By Sobha Limited — one of India's most trusted developers",
      "Strong appreciation corridor along the eastern growth belt",
      "Backed-by-brand resale and rental confidence",
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
    sourceNote:
      "Official details and assets to be provided by the builder. Contact Vani Estates for the current price list and brochure.",
  },
  {
    id: 2,
    slug: "total-environment-pursuit-of-a-radical-rhapsody",
    name: "Total Environment — Pursuit of a Radical Rhapsody",
    builder: "Total Environment",
    status: "Ongoing",
    type: "Apartment",
    configurations: "3 & 4 BHK",
    locality: "Whitefield",
    city: "Bangalore",
    priceRange: "On Request",
    possession: "To be updated",
    rera: "",
    sizeRange: "On Request",
    featured: true,
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    floorPlans: [],
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
    sourceNote:
      "Official details and assets to be provided by the builder. Contact Vani Estates for the current price list and brochure.",
  },
  {
    id: 3,
    slug: "prestige-southern-star",
    name: "Prestige Southern Star",
    builder: "Prestige Group",
    status: "Ready to Move",
    type: "Apartment",
    configurations: "2, 3 & 4 BHK",
    locality: "Begur Road, South Bangalore",
    city: "Bangalore",
    priceRange: "On Request",
    possession: "Ready to Move",
    rera: "",
    sizeRange: "On Request",
    featured: true,
    heroImage:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    ],
    floorPlans: [],
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
    sourceNote:
      "Official details and assets to be provided by the builder. Contact Vani Estates for the current price list and brochure.",
  },
];

export const projectStatuses = [
  "All",
  "Ready to Move",
  "Ongoing",
  "Upcoming",
  "Completed",
];
