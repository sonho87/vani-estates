"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const navItems = [
  { label: "Home",         href: "/" },
  { label: "Buy",          href: "/properties/?filter=Sale" },
  { label: "Rent",         href: "/properties/?filter=Rent" },
  { label: "New Projects", href: "/properties/?filter=New" },
  { label: "About Us",     href: "/about/" },
  { label: "Team",         href: "/about/#team" },
  { label: "Blog",         href: "/blog/" },
  { label: "Contact",      href: "/contact/" },
];

export default function SiteHeader() {
  // useSearchParams requires a Suspense boundary in Next 16 when used
  // inside a statically-rendered route. Wrap the inner that needs it.
  return (
    <Suspense fallback={<HeaderShell />}>
      <SiteHeaderInner />
    </Suspense>
  );
}

// Skeleton shown during hydration. Same chrome, no active highlight yet.
function HeaderShell() {
  return <ActualHeader pathname="" filter={null} teamInView={false} />;
}

function SiteHeaderInner() {
  const pathname = usePathname() || "";
  const searchParams = useSearchParams();
  const filter = searchParams?.get("filter") ?? null;

  // On the About page, switch the active state to "Team" when the team
  // section is visible (so scrolling subtly shifts which nav item is lit).
  const [teamInView, setTeamInView] = useState(false);
  useEffect(() => {
    if (pathname !== "/about/") {
      setTeamInView(false);
      return;
    }
    const el = document.getElementById("team");
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => setTeamInView(entries[0]?.isIntersecting ?? false),
      // Roughly: team is "active" when its top has scrolled into the upper half of the viewport
      { rootMargin: "-25% 0px -55% 0px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [pathname]);

  return <ActualHeader pathname={pathname} filter={filter} teamInView={teamInView} />;
}

function isActive(label: string, pathname: string, filter: string | null, teamInView: boolean) {
  switch (label) {
    case "Home":
      return pathname === "/";
    case "Buy":
      return pathname === "/properties/" && filter === "Sale";
    case "Rent":
      return pathname === "/properties/" && filter === "Rent";
    case "New Projects":
      return pathname === "/properties/" && filter === "New";
    case "About Us":
      return pathname === "/about/" && !teamInView;
    case "Team":
      return pathname === "/about/" && teamInView;
    case "Blog":
      return pathname.startsWith("/blog");
    case "Contact":
      return pathname === "/contact/";
    default:
      return false;
  }
}

function ActualHeader({
  pathname,
  filter,
  teamInView,
}: {
  pathname: string;
  filter: string | null;
  teamInView: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(245,240,232,0.97)" : "rgba(245,240,232,0.92)",
        borderBottom: scrolled ? "1px solid #DDD8CE" : "1px solid transparent",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.jpg"
            alt="Vani Estates"
            width={44}
            height={44}
            className="rounded-sm object-cover"
            style={{ height: 44, width: 44 }}
          />
          <span className="leading-none">
            <span
              className="block text-xl md:text-[22px]"
              style={{
                color: "#1A1410",
                fontFamily: "var(--serif)",
                fontWeight: 600,
                letterSpacing: 1,
                lineHeight: 1,
              }}
            >
              VANI ESTATES
            </span>
            <span
              className="hidden sm:block text-[9px] mt-1"
              style={{
                color: "#C9A055",
                fontFamily: "var(--sans)",
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Property Consultants
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((l) => {
            const active = isActive(l.label, pathname, filter, teamInView);
            return (
              <Link
                key={l.label}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className="text-[13px] transition relative py-2"
                style={{
                  fontFamily: "var(--sans)",
                  color: active ? "#C9A055" : "#5A4F40",
                  letterSpacing: 1,
                  borderBottom: active
                    ? "1px solid #C9A055"
                    : "1px solid transparent",
                  fontWeight: active ? 600 : 400,
                }}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact/"
            className="ml-2 text-[12px] hover:bg-[#C9A055] hover:text-white transition"
            style={{
              fontFamily: "var(--sans)",
              color: "#C9A055",
              border: "1px solid rgba(201,160,85,0.7)",
              letterSpacing: 1.5,
              textTransform: "uppercase",
              padding: "9px 18px",
            }}
          >
            List Property
          </Link>
        </nav>

        {/* Hamburger — mobile */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
        >
          <span
            className={`block h-0.5 w-6 bg-[#C9A055] transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#C9A055] transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#C9A055] transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        className={`lg:hidden bg-[#F5F0E8] border-t border-[#DDD8CE] overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-2 flex flex-col">
          {navItems.map((l) => {
            const active = isActive(l.label, pathname, filter, teamInView);
            return (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className="py-3 text-sm transition border-b border-[#DDD8CE]"
                style={{
                  fontFamily: "var(--sans)",
                  color: active ? "#C9A055" : "#5A4F40",
                  letterSpacing: 1,
                  fontWeight: active ? 600 : 400,
                }}
              >
                {l.label}
                {active && (
                  <span
                    className="ml-2 inline-block w-1.5 h-1.5 rounded-full"
                    style={{ background: "#C9A055" }}
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact/"
            onClick={() => setOpen(false)}
            className="mt-4 mb-3 bg-[#C9A055] text-white text-center text-sm font-semibold px-5 py-3 hover:bg-[#b8913e] transition"
            style={{ fontFamily: "var(--sans)", letterSpacing: 1.5, textTransform: "uppercase" }}
          >
            List Your Property
          </Link>
          <a
            href="https://wa.me/919845012548"
            target="_blank"
            onClick={() => setOpen(false)}
            className="mb-3 border border-[#25D366] text-[#25D366] text-center text-sm font-semibold px-5 py-3 hover:bg-[#25D366] hover:text-white transition"
            style={{ fontFamily: "var(--sans)", letterSpacing: 1.5, textTransform: "uppercase" }}
          >
            WhatsApp Us
          </a>
        </div>
      </nav>
    </header>
  );
}
