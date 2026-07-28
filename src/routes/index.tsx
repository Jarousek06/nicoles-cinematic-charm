import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Hero } from "@/components/nicole/Hero";
import { Logo } from "@/components/nicole/Logo";
import {
  About,
  Offer,
  Menu,
  Features,
  Quote,
  Gallery,
  Kids,
  Marquee,
  Reviews,
} from "@/components/nicole/Sections";
import { Contact } from "@/components/nicole/Contact";
import marble from "@/assets/marble-bg.jpg";

const TITLE = "Nicole's Coffee — Kavárna a cukrárna Štětí";
const DESC =
  "Kavárna a cukrárna Nicole's Coffee ve Štětí: výběrová káva, domácí zákusky, dorty na objednávku, pizza a dětský koutek. Viničná 692, Štětí.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: "Nicole's Coffee",
          description: DESC,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Viničná 692",
            postalCode: "411 08",
            addressLocality: "Štětí",
            addressCountry: "CZ",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "17:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday", "Sunday"],
              opens: "10:00",
              closes: "16:00",
            },
          ],
        }),
      },
    ],
  }),
});

const nav = [
  { href: "#o-nas", label: "O nás" },
  { href: "#nabidka", label: "Nabídka" },
  { href: "#menu", label: "Menu" },
  { href: "#galerie", label: "Galerie" },
  { href: "#deti", label: "Pro děti" },
  { href: "#reference", label: "Reference" },
  { href: "#kontakt", label: "Kontakt" },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${marble})` }}
      />
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-[linear-gradient(180deg,rgba(253,251,247,0.82),rgba(248,246,242,0.94))]"
      />
      <div aria-hidden className="grain-overlay" />

      <header className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between gap-6 rounded-full border border-[#c9a24b]/25 bg-white/55 px-5 py-2.5 backdrop-blur-xl sm:px-7">
          <a href="#hero" aria-label="Nicole's Coffee — domů" className="shrink-0">
            <Logo animated={false} className="h-9 sm:h-10" />
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative text-xs uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#c9a24b] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#kontakt"
            className="gold-fill rounded-full px-4 py-2 text-[0.7rem] uppercase tracking-[0.15em] text-[#2B2320] md:px-5"
          >
            Navštivte nás
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Marquee />
        <About />
        <Offer />
        <Menu />
        <Features />
        <Quote />
        <Gallery />
        <Kids />
        <Reviews />
        <Contact />
      </main>

      <footer className="tufted-velvet sheen relative mt-16 overflow-hidden border-t-2 border-[#c9a24b]/45">
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="gold-text font-display text-3xl">Nicole&rsquo;s Coffee</p>
          <div className="gold-rule mx-auto mt-6 max-w-[10rem]" />
          <p className="mt-6 text-sm text-[#f4ead0]/70">
            Viničná 692, 411 08 Štětí · Po–Pá 9:00–17:00 · So–Ne 10:00–16:00
          </p>
          <div className="mt-6 flex justify-center gap-4 text-xs uppercase tracking-[0.2em]">
            <a
              href="https://www.facebook.com/profile.php?id=61576350980109"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e9d9a8]/80 transition-colors hover:text-[#fcf6ba]"
            >
              Facebook
            </a>
            <span className="text-[#e9d9a8]/30">·</span>
            <a
              href="https://www.firmy.cz/detail/13941981-nicole-s-coffee-steti.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e9d9a8]/80 transition-colors hover:text-[#fcf6ba]"
            >
              Firmy.cz
            </a>
          </div>
          <p className="mt-8 text-xs text-[#f4ead0]/45">
            © {new Date().getFullYear()} Nicole&rsquo;s Coffee. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>

      <Toaster position="top-center" />
    </div>
  );
}
