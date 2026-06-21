import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataPath = join(__dirname, "..", "lib", "data.js");

const newBlogs = [
  {
    id: 36,
    title:
      "NRI Guide to Buying Property in Bangalore (2026): RERA, Taxes, Power of Attorney & Home Loans",
    date: "June 14, 2026",
    category: "NRI Guide",
    excerpt:
      "A practical, step-by-step guide for Non-Resident Indians buying property in Bangalore — what you can buy, FEMA & RERA rules, taxes, repatriation, home loans, and how to buy safely from abroad.",
    content: `Bangalore remains one of the most popular cities for NRIs to invest in Indian real estate — strong rental demand, steady appreciation, and a familiar home base for families. But buying from abroad comes with rules that resident buyers never think about. After 35 years of helping families — including many NRI clients — buy in South Bangalore, here is our complete, no-jargon guide for 2026.

**What an NRI Can and Cannot Buy**

Under FEMA (Foreign Exchange Management Act) regulations, an NRI or OCI cardholder can freely buy:
- Residential property (apartments, independent houses, villas)
- Commercial property (offices, shops, warehouses)

You are **not** permitted to buy:
- Agricultural land
- Plantation property
- Farmhouses

There is no limit on the number of residential or commercial properties you can own.

**How You Must Pay**

All payments for the purchase must be made in Indian Rupees through normal banking channels — using funds in your **NRE, NRO, or FCNR account**, or via inward remittance from abroad. You cannot pay in foreign currency or through a foreign bank account directly.

**RERA — Your Biggest Protection**

Always insist on a RERA-registered project and a RERA-registered agent. RERA (Real Estate Regulatory Authority) protects buyers from delayed projects, false promises and diversion of funds. You can verify any project or agent on rera.karnataka.gov.in. Vani Estates is RERA registered: PRM/KA/RERA/1251/310/AG/250523/005790.

**Documents You Will Need**

- Valid passport and OCI/PIO card (if applicable)
- PAN card (mandatory for property registration and tax)
- Overseas address proof
- Recent photographs
- NRE/NRO bank account details
- Power of Attorney (if you cannot be present — see below)

**Power of Attorney (PoA) — Buying Without Flying Down**

Most NRIs cannot be physically present for every step. A **registered Power of Attorney** lets a trusted person in India (often a family member) sign documents and complete registration on your behalf. Key points:
- Execute the PoA at the Indian Embassy/Consulate in your country, or in India
- Get it attested/apostilled as required, then adjudicated and stamped in Karnataka
- Keep the PoA specific and limited to the transaction — never give an open-ended general PoA to someone you don't fully trust

**Taxes & TDS You Should Know**

- **TDS on purchase**: When you buy from a resident seller, 1% TDS applies if the value exceeds ₹50 lakh. If you buy from another NRI, higher TDS rules apply.
- **Stamp duty & registration**: In Karnataka, budget roughly 5% stamp duty plus cess and 1% registration charge on the property value. These are the same for NRIs and residents.
- **Rental income**: Taxable in India. If you rent it out, the tenant must deduct TDS (typically 30% plus surcharge) before paying rent to an NRI.
- **Capital gains**: Apply when you sell. Long-term gains (held over 24 months) get indexation benefits.

Tax rules change — always confirm current rates with a chartered accountant before you transact.

**Home Loans for NRIs**

Indian banks and housing-finance companies readily offer home loans to NRIs, usually up to 80% of the property value. EMIs must be paid from your NRE/NRO account or via inward remittance. You'll need income proof from abroad, passport, visa/work permit, and often a Power of Attorney holder in India.

**Repatriation — Getting Your Money Back Out**

You can repatriate sale proceeds of up to **two residential properties**, subject to conditions, and within the overall limit of **USD 1 million per financial year** from your NRO account. You'll need Form 15CA/15CB certified by a CA. Plan repatriation early — it's smoother when documented from day one.

**How to Buy Safely From Abroad — Our Process**

1. Tell us your budget, preferred localities and purpose (end-use vs investment)
2. We shortlist RERA-verified options and send you videos, floor plans and documents
3. We do legal due diligence — title, EC, Khata, approvals — before you commit
4. We coordinate the PoA, registration and bank formalities
5. After purchase, we can manage the property for you (tenants, rent, maintenance) so you never have to worry from abroad

**Common Mistakes NRIs Make**

- Skipping legal verification because the builder "seemed reputable"
- Giving a general Power of Attorney to a distant relative
- Forgetting that rental income and capital gains are taxable in India
- Not factoring in TDS and repatriation paperwork
- Buying purely on a glossy brochure without a physical or video inspection

**Why South Bangalore Works for NRIs**

Jayanagar, JP Nagar, Banashankari and Basavanagudi offer the rare combination of established infrastructure, strong resale value, reliable rental demand and a community feel — ideal whether you're investing or planning to return home one day.

Thinking of buying from abroad? Talk to us — we've guided NRI families through this exact process for decades. WhatsApp +91 98450 12548 or visit vaniestates.com/contact.`,
    slug: "nri-guide-to-buying-property-in-bangalore-2026-rera-taxes-power-of-attorney-home-loans",
  },
  {
    id: 37,
    title:
      "Property Management for NRIs: How to Rent Out & Maintain Your Bangalore Home From Abroad (2026)",
    date: "June 14, 2026",
    category: "NRI Guide",
    excerpt:
      "Owning a flat in Bangalore while living abroad? Here's how NRIs can rent out, maintain and protect their property remotely — tenants, rent collection, TDS, repairs, and what a property manager actually handles.",
    content: `For many NRIs, the hardest part of owning property in Bangalore isn't buying it — it's looking after it from 5,000 miles away. An empty flat deteriorates, tenants need a local point of contact, rent has to be collected, and maintenance dues pile up. This is exactly why professional property management exists. Here's everything an NRI needs to know in 2026.

**Why an Empty Flat Is a Liability**

A locked, unattended apartment in Bangalore faces real risks: seepage and mould during the monsoon, dust and pest damage, plumbing leaks that go unnoticed for months, association notices that turn into penalties, and — in rare cases — encroachment or unauthorised use. A managed, tenanted property is almost always healthier than an empty one.

**Renting Out Your Property — The NRI Way**

1. **Set the right rent**: We benchmark against current rents for similar flats in your locality so you neither overprice (long vacancy) nor underprice
2. **Find genuine tenants**: Advertising, shortlisting, background and reference checks
3. **Draft a watertight rental agreement**: Registered, with a clear security deposit, lock-in, maintenance responsibilities and exit terms
4. **Police verification**: Mandatory tenant verification, handled for you
5. **Handover with inventory**: A documented inventory and condition report at move-in protects your deposit claims later

**The TDS Rule Every NRI Landlord Must Know**

When a tenant pays rent to an NRI, the tenant is legally required to **deduct TDS (usually 30% plus applicable surcharge and cess)** before paying you, and deposit it with the government, filing Form 15CA where needed. This is different from resident landlords. A good property manager ensures this is handled correctly so you don't face notices later. Rent should be credited to your **NRO account**. Always confirm current TDS rates with your CA.

**Collecting & Repatriating Rent**

- Rent is collected and deposited into your NRO account
- You can repatriate up to USD 1 million per financial year from the NRO account, with Form 15CA/15CB from a CA
- Keep clean records of rent received and TDS deducted — it makes both your Indian tax filing and repatriation far easier

**What a Property Manager Actually Does for You**

- Sources and screens tenants
- Collects rent and shares monthly statements
- Conducts periodic inspections with photo reports
- Coordinates repairs and maintenance (with your approval on cost)
- Tracks and pays property tax, water, electricity and association dues
- Acts as the local point of contact for the tenant
- Handles move-in / move-out, deposit settlement and re-letting

**Maintenance: The Hidden Cost of Remote Ownership**

Even a tenanted flat needs upkeep. Typical recurring items:
- Annual servicing of taps, drains and waterproofing before monsoon
- Repainting between tenancies
- Pest control
- Servicing of common amenities (if it's an apartment with shared facilities)
- Replacing ageing fixtures, geysers, and fittings

A manager batches these efficiently and gets you fair local pricing — far cheaper than emergency repairs arranged in panic from abroad.

**Protecting Your Property Legally**

- Keep the Khata, property tax receipts and association NOC up to date
- Maintain valid property insurance
- Never give an open-ended Power of Attorney — keep it specific
- Ensure rental agreements are properly registered, not just notarised
- Keep digital copies of every document accessible from anywhere

**What It Costs**

Property management fees are typically a percentage of the monthly rent, agreed in a written contract. For most NRIs, the peace of mind — knowing rent arrives, the flat is inspected, and problems are handled — far outweighs the cost. You can read more on our dedicated page: vaniestates.com/property-management.

**Our NRI Promise**

We treat your property as if it were our own. You get regular updates by WhatsApp and email, transparent statements, and a single trusted point of contact who has been working these neighbourhoods for 35 years. Whether your flat is in Jayanagar, JP Nagar, Banashankari or Basavanagudi, we've got it covered.

Living abroad and worried about your Bangalore property? Let's talk. WhatsApp +91 98450 12548 and we'll share our property management contract and process.`,
    slug: "property-management-for-nris-rent-out-maintain-bangalore-home-from-abroad-2026",
  },
  {
    id: 38,
    title:
      "First-Time Home Buyer's Guide to South Bangalore (2026): Budget, Home Loan, Documents & Registration",
    date: "June 14, 2026",
    category: "Buyer's Guide",
    excerpt:
      "Buying your first home in Jayanagar, JP Nagar or Banashankari? This step-by-step 2026 guide covers budgeting, home loan eligibility, the documents to verify, stamp duty, and the full registration process.",
    content: `Buying your first home is exciting — and a little overwhelming. There are loans to understand, documents to verify, and a registration process that can feel like a maze. At Vani Estates, we've guided first-time buyers through it for 35 years. Here's the clear, practical roadmap for South Bangalore in 2026.

**Step 1: Fix Your Real Budget (Not Just the Sticker Price)**

The flat's price is only part of the cost. Budget for:
- **Down payment**: Banks fund up to 80%, so keep 20% ready
- **Stamp duty & registration**: Roughly 5% stamp duty plus cess and 1% registration in Karnataka
- **GST**: Applicable on under-construction properties (not on ready-to-move resale)
- **Brokerage, legal and documentation charges**
- **Interiors, furnishing and moving costs**
- **An emergency buffer** of a few months' EMI

A good rule: your EMI should ideally stay under 40% of your monthly take-home income.

**Step 2: Check Your Home Loan Eligibility Early**

Get a pre-approval before you start seriously shortlisting. Banks look at:
- Your income and employment stability
- Existing EMIs and credit card dues
- Your **CIMS/CIBIL credit score** (aim for 750+)
- Age and remaining working years

A pre-approval tells you your real budget and makes you a stronger negotiator.

**Step 3: Choose the Right Locality**

South Bangalore offers distinct flavours:
- **Jayanagar**: Established, green, excellent connectivity and resale value
- **JP Nagar**: Family-friendly, strong rental demand, newer projects in phases 7-9
- **Banashankari**: Value-for-money with rising appreciation, good metro access
- **Basavanagudi**: Heritage charm, central, strong community

Visit at different times of day, check water supply, traffic, and proximity to schools, hospitals and metro.

**Step 4: Verify These Documents — Non-Negotiable**

Never pay an advance before verifying:
- **Mother Deed & Sale Deed**: Unbroken chain of ownership
- **Encumbrance Certificate (EC)**: At least 30 years, confirming no loans or legal dues
- **Khata (A-Khata preferred)**: Property is on municipal records and taxable
- **Property tax receipts**: Paid and up to date
- **Approved building plan**: Sanctioned by BBMP/BDA, no deviations
- **Occupancy Certificate (OC)**: For apartments, proof the building is legally fit to occupy
- **RERA registration**: For under-construction projects

When in doubt, have a property lawyer review the title. It costs a little; it saves you from disasters.

**Step 5: Negotiate Smartly**

Know the going rate per square foot in the locality. Factors that justify negotiation: floor, facing, age of building, pending repairs, and how urgently the seller needs to sell. A local agent who knows true transaction prices (not just asking prices) is invaluable here.

**Step 6: The Registration Process**

1. **Agreement to Sell**: Terms, price and timeline agreed in writing
2. **Loan sanction & disbursement**: Bank releases funds
3. **Pay stamp duty & registration fees** (online via Kaveri portal in Karnataka)
4. **Sale Deed registration**: At the Sub-Registrar's office, with both parties (or PoA holders) present, biometrics and witnesses
5. **Collect the registered Sale Deed** and update Khata to your name (Khata transfer)

**Step 7: After You Buy**

- Transfer the Khata to your name
- Update property tax records
- Get the electricity and water connections transferred
- Keep every document — physical and digital copies

**First-Timer Mistakes to Avoid**

- Falling in love with a flat before checking the title
- Stretching the EMI to the absolute limit
- Ignoring the Occupancy Certificate
- Trusting verbal promises instead of written agreements
- Skipping the locality "time-of-day" visit

**How We Help First-Time Buyers**

We don't just show you flats — we verify them, negotiate for you, coordinate your loan and lawyer, and walk you through registration. For a first-timer, having a 35-year veteran on your side turns a stressful process into a confident one.

Ready to buy your first home in South Bangalore? Call us at +91 98450 12548 or visit vaniestates.com/properties to start browsing.`,
    slug: "first-time-home-buyers-guide-south-bangalore-2026-budget-home-loan-documents-registration",
  },
  {
    id: 39,
    title:
      "Rental Property Maintenance in Bangalore: The Landlord's Checklist to Protect Your Investment (2026)",
    date: "June 14, 2026",
    category: "Property Management",
    excerpt:
      "Whether you live in Bangalore or abroad, proper maintenance protects your rental income and property value. Here's a complete landlord's maintenance checklist — monsoon prep, between-tenancy work, and who pays for what.",
    content: `A rental property is an income asset — and like any asset, it needs maintenance to keep performing. Neglect it and you face longer vacancies, lower rent, unhappy tenants and falling value. Stay on top of it and your property stays in demand for years. Here's the complete maintenance playbook we use for landlords across South Bangalore.

**Who Pays for What — The Golden Rule**

Disputes almost always come from unclear responsibilities. A good rental agreement should spell this out, but the typical split is:

**Landlord pays for:**
- Structural repairs (walls, roof, waterproofing)
- Major plumbing and electrical faults
- Ageing fixtures and fittings reaching end of life
- Repainting between tenancies
- Property tax and major appliance replacement (geyser, etc.)

**Tenant pays for:**
- Day-to-day upkeep and minor consumables (bulbs, tap washers)
- Damage caused by misuse or negligence
- Monthly utility bills
- Routine cleaning

Make this explicit in the agreement — it prevents 90% of conflicts.

**The Monsoon Checklist (Do This Before June)**

Bangalore's monsoon is the single biggest threat to property condition:
- Inspect and clear all drains and gutters
- Check waterproofing on terraces, balconies and bathrooms
- Look for early signs of seepage on ceilings and external walls
- Service window seals to prevent leaks
- Trim overhanging branches near the building
- Test the sump, overhead tank and motor

A few thousand rupees of prevention saves lakhs in water-damage repair.

**Between-Tenancy Checklist (The Make-or-Break Window)**

The gap between tenants is your chance to refresh the property and command higher rent:
- Repaint walls (or at least patch and touch up)
- Deep clean, including kitchen and bathrooms
- Pest control treatment
- Service or replace taps, flushes and worn fittings
- Check all electrical points, switches and the DB board
- Service the geyser, fans and any provided appliances
- Replace damaged door/window hardware
- Update the inventory and condition report with photos

A clean, freshly painted flat rents faster and at a better price — vacancy is the most expensive thing a landlord pays for.

**Annual Maintenance Tasks**

- Full plumbing check
- Electrical safety inspection
- Pest control (twice a year is ideal in Bangalore)
- Waterproofing review
- Repainting of high-wear areas
- Servicing of common amenities (for apartments)

**Keep the Paperwork Healthy Too**

- Property tax paid and receipts filed
- Khata up to date
- Association maintenance dues cleared
- Property insurance renewed
- Rental agreement registered and current

**Maintaining a Property You Rarely Visit**

If you're an NRI or live in another city, remote maintenance is where most landlords struggle. The solution is a local manager who:
- Inspects the property on a schedule and sends photo reports
- Catches small problems before they become expensive
- Coordinates trusted local plumbers, electricians and painters at fair prices
- Handles the tenant's day-to-day requests so you're not woken at 2am by a leak
- Keeps all dues and paperwork current

We cover this in detail on our property management page: vaniestates.com/property-management.

**The Cost of Skipping Maintenance**

- A small leak ignored for a monsoon → ₹50,000+ in ceiling and wall repair
- A flat that "looks tired" → ₹3,000-5,000 less rent every month, for years
- An unhappy tenant → early exit and a costly vacancy
- Deferred repainting → a property that feels old and rents below market

Maintenance isn't a cost — it's protection of your rental income and your capital value.

**How We Help Landlords**

From a single rental flat to a portfolio, we handle inspections, repairs, tenant requests and dues so your property stays in top condition and rents reliably. You get transparent updates and fair local pricing, backed by 35 years of relationships with the right people on the ground.

Want your rental property professionally maintained? WhatsApp +91 98450 12548 and we'll share our maintenance and management plan.`,
    slug: "rental-property-maintenance-bangalore-landlord-checklist-protect-investment-2026",
  },
];

// Read the file, insert new entries just before the closing `];` of the
// blogs array (which is the final `];` in the file since blogs is the
// last export).
let src = readFileSync(dataPath, "utf8");

const marker = src.lastIndexOf("\n];");
if (marker === -1) {
  console.error("Could not find end of blogs array.");
  process.exit(1);
}

const insertion =
  ",\n" +
  newBlogs
    .map((b) => {
      // JSON.stringify gives correct escaping for quotes, newlines, unicode.
      const entry = {
        id: b.id,
        title: b.title,
        date: b.date,
        category: b.category,
        excerpt: b.excerpt,
        content: b.content,
        slug: b.slug,
      };
      // Pretty-print with 2-space indent, then indent the whole block by 2.
      const json = JSON.stringify(entry, null, 2)
        .split("\n")
        .map((line) => "  " + line)
        .join("\n");
      return json;
    })
    .join(",\n");

src = src.slice(0, marker) + insertion + src.slice(marker);
writeFileSync(dataPath, src);
console.log("Inserted", newBlogs.length, "new blog entries (ids 36-39).");
