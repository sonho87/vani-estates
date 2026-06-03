// Cloudflare Pages Function: runs only on requests to "/"
// Handles 301 redirects from the old React SPA URLs:
//   /?property=N → /properties/<slug>/
//   /?article=N  → /blog/<slug>/
// Falls through to the static index.html otherwise.

const properties = {
  "1": "3-bhk-flat-mantri-woodlands-arakere",
  "2": "2-bhk-flat-asha-kiran-apartment-basavanagudi",
  "3": "2-bhk-for-rent-majestic-fortune-jp-nagar",
  "4": "35-bhk-independent-house-jayanagar-4th-t-block",
  "5": "2-bhk-flat-vani-apartments-jayanagar-3rd-east-block",
  "6": "4-bhk-luxury-condovilla-maratt-pimento-jp-nagar",
  "7": "4-bhk-ultra-luxury-vaishnavi-terraces-jp-nagar",
  "8": "commercial-warehouse-pattabhirama-nagar-jayanagar",
  "9": "2-bhk-flat-sohum-isiri-whitefield",
  "10": "1-bhk-flat-godrej-nurture-electronic-city",
  "11": "4-bhk-independent-house-vijaya-nivas-bilekahalli",
  "12": "3-bhk-flat-mahaveer-sitara-jp-nagar-7th-phase",
  "13": "3-bhk-apartment-for-rent-total-environment-learning-to-fly-jp-nagar-6th-phase",
};

const articles = {
  "1": "why-jayanagar-is-bangalores-most-sought-after-neighbourhood-for-homebuyers-in-2026",
  "2": "complete-guide-to-buying-property-in-south-bangalore-in-2026",
  "3": "flat-vs-independent-house-in-jayanagar-which-is-a-better-investment-in-2026",
  "4": "jp-nagar-property-guide-2026-best-phases-prices-investment-potential",
  "5": "banashankari-real-estate-guide-why-smart-buyers-are-looking-here-in-2026",
  "6": "how-to-get-your-property-documents-verified-in-bangalore-a-complete-checklist",
  "7": "bbmp-vs-bda-plots-in-bangalore-what-every-buyer-must-know",
  "8": "best-real-estate-agent-in-jayanagar-bangalore-what-to-look-for-when-choosing",
  "9": "top-10-things-to-check-before-buying-a-resale-flat-in-bangalore",
  "10": "property-price-trends-in-south-bangalore-2026-jayanagar-jp-nagar-banashankari-btm-layout-compared",
  "11": "best-blocks-for-residential-properties-in-jayanagar-2026-guide",
  "12": "commercial-property-in-jayanagar-why-returns-outperform-bank-interest",
  "13": "independent-house-vs-apartment-in-jayanagar-where-should-you-invest",
  "14": "jp-nagar-phase-7-and-8-south-bangalores-new-real-estate-hotspots",
  "15": "3-bhk-rental-trends-in-jp-nagar-2026-market-report",
  "16": "a-buyers-guide-to-maratt-pimento-luxury-properties-in-jp-nagar",
  "17": "how-to-get-your-e-khata-in-bangalore-dont-fall-for-scams-2026-guide",
  "18": "banashankari-3rd-stage-vs-6th-stage-where-should-you-invest-in-2026",
  "19": "basavanagudi-real-estate-2026-balancing-heritage-charm-with-modern-returns",
  "20": "mantri-woodlands-review-2026-a-green-oasis-on-bannerghatta-road",
  "21": "inside-vaishnavi-terraces-jp-nagars-premier-ultra-luxury-address",
  "22": "bangalores-second-airport-how-the-proposed-kanakapura-road-sites-will-shift-real-estate",
  "23": "namma-metro-phase-3-bangalore-business-corridor-the-2026-game-changers",
  "24": "2-bhk-flats-for-sale-in-jayanagar-under-1-crore-complete-2026-buyers-guide",
  "25": "best-gated-communities-in-jp-nagar-2026-pricing-amenities-investment-returns",
  "26": "property-registration-charges-in-karnataka-2026-complete-cost-breakdown",
  "27": "whitefield-vs-jp-nagar-in-2026-where-should-it-professionals-buy",
  "28": "senior-living-in-south-bangalore-best-localities-for-retirees-in-2026",
  "29": "how-to-verify-khata-ec-and-title-documents-before-buying-property-in-bangalore",
  "30": "apartment-vs-independent-house-in-bangalore-2026-which-is-the-better-investment",
  "31": "top-7-mistakes-first-time-home-buyers-make-in-bangalore-and-how-to-avoid-them",
  "32": "rental-yield-comparison-best-areas-to-buy-for-rental-income-in-south-bangalore-2026",
  "33": "banashankari-6th-stage-real-estate-guide-2026-the-next-big-investment-hotspot",
  "34": "real-estate-investing-in-bangalore-2026-how-to-build-wealth-through-property-without-making-costly-mistakes",
  "35": "justdial-for-real-estate-can-you-really-trust-online-listings-an-honest-guide-for-bangalore-property-buyers",
};

function redirect(origin, path) {
  return new Response(null, {
    status: 301,
    headers: { Location: `${origin}${path}` },
  });
}

export async function onRequestGet(context) {
  const url = new URL(context.request.url);

  const property = url.searchParams.get("property");
  if (property && properties[property]) {
    return redirect(url.origin, `/properties/${properties[property]}/`);
  }

  const article = url.searchParams.get("article");
  if (article && articles[article]) {
    return redirect(url.origin, `/blog/${articles[article]}/`);
  }

  // No matching query — serve the static homepage from out/index.html
  return context.next();
}
