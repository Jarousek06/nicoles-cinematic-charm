import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Coffee, CakeSlice, Baby, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
import platter from "@/assets/platter.jpg";
import venecky from "@/assets/venecky.jpg";
import pistachio from "@/assets/pistachio.jpg";
import cakeFrozen from "@/assets/cake-frozen.jpg";
import cakeMinecraft from "@/assets/cake-minecraft.jpg";
import miniPassion from "@/assets/mini-passion.jpg";
import miniBlueberry from "@/assets/mini-blueberry.jpg";
import miniCacao from "@/assets/mini-cacao.jpg";
import juice from "@/assets/juice.jpg";
import burgers from "@/assets/burgers.jpg";
import croissants from "@/assets/croissants.jpg";
import kidsImg from "@/assets/kids.jpg";
import iconCoffee from "@/assets/icon-coffee.png";
import iconCake from "@/assets/icon-cake.png";
import iconMacaron from "@/assets/icon-macaron.png";
import iconPizza from "@/assets/icon-pizza.svg";
import iconIcecream from "@/assets/icon-icecream.svg";

export function About() {
  return (
    <section id="o-nas" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Náš příběh</p>
          <h2 className="gold-text mt-5 text-4xl leading-tight sm:text-5xl">
            Malý luxus v srdci Štětí
          </h2>
          <div className="gold-rule mt-6 max-w-[7rem]" />
          <div className="mt-7 space-y-5 text-base leading-relaxed text-foreground/75">
            <p>
              Nicole&rsquo;s Coffee je útulná kavárna, kde voní čerstvě pražená káva a vitrína se
              plní zákusky, které se dělají s láskou a poctivě. Široký výběr cukrárenských produktů,
              dorty na objednávku i něco slaného — třeba pizza.
            </p>
            <p>
              Máme dětský koutek, měkká křesla a čas, který se u nás nikam nežene. Je to místo, kam
              se rádi vracíte — na jedno espresso, na dlouhý hovor nebo na kousek dortu, který si
              zasloužíte.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            {["Výběrová káva", "Domácí zákusky", "Dětský koutek", "Rodinná atmosféra"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-[#c9a24b]/35 bg-white/70 px-4 py-1.5 text-xs tracking-wide text-foreground/80 backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="gold-fill absolute -inset-[3px] rounded-[1.6rem] opacity-80 blur-[1px]" />
            <div className="relative overflow-hidden rounded-[1.5rem] bg-card">
              <motion.img
                src={platter}
                alt="Talíř plný zákusků a dezertů Nicole's Coffee pod zlatým nápisem"
                loading="lazy"
                width={1200}
                height={1408}
                className="h-[30rem] w-full object-cover sm:h-[36rem]"
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const offer = [
  {
    icon: iconCoffee,
    title: "Káva",
    desc: "Espresso, cappuccino, filtr i ledové varianty. Vždy čerstvě namleto.",
  },
  {
    icon: iconMacaron,
    title: "Sladké zákusky",
    desc: "Denně čerstvá vitrína plná řezů, věnečků, cheesecaků a dezertů.",
  },
  {
    icon: iconCake,
    title: "Dorty na objednávku",
    desc: "Narozeniny, svatby, oslavy. Podle vaší představy, do posledního detailu.",
  },
  {
    icon: iconPizza,
    title: "Pizza & slané",
    desc: "Když máte chuť na něco pořádného. Křupavé těsto, poctivé suroviny.",
  },
  {
    icon: iconIcecream,
    title: "Něco pro děti",
    desc: "Malé porce, zmrzlina, dětské nápoje a koutek, kde je jim dobře.",
  },
];

export function Offer() {
  return (
    <section id="nabidka" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Nabídka"
          title="Galerie chutí"
          subtitle="Každý den nová vitrína. Vybírejte očima — a pak ochutnejte."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offer.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="glass-card glass-card-hover gold-ring group relative h-full rounded-[1.4rem] p-8 text-center">
                <div className="relative mx-auto h-28 w-28">
                  <div className="gold-fill absolute inset-0 rounded-full opacity-90 shadow-[0_16px_34px_-14px_rgba(179,135,40,0.6)]" />
                  <div className="absolute inset-[3px] grid place-items-center rounded-full bg-[#fdfbf7] shadow-[inset_0_2px_12px_rgba(90,70,40,0.14)]">
                    <motion.img
                      src={item.icon}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      width={640}
                      height={640}
                      className="h-16 w-16 object-contain drop-shadow-[0_8px_14px_rgba(90,70,40,0.28)]"
                      animate={{ y: [0, -7, 0] }}
                      transition={{
                        duration: 5 + i * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </div>
                <h3 className="gold-text mt-6 text-2xl">{item.title}</h3>
                <div className="gold-rule mx-auto mt-4 max-w-[3.5rem] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const menu = [
  {
    group: "Zákusky & dezerty",
    note: "Denně čerstvá vitrína plná domácích dobrot.",
    items: [
      { n: "Věneček", p: "od 45 Kč" },
      { n: "Pistáciový řez", p: "69 Kč" },
      { n: "Ovocný košíček", p: "49 Kč" },
      { n: "Mini dezert (dle nabídky)", p: "55 Kč" },
      { n: "Punčový řez / kremrole", p: "od 39 Kč" },
      { n: "Cheesecake", p: "69 Kč" },
    ],
  },
  {
    group: "Dorty na objednávku",
    note: "Dětské motivy, oslavy i svatby — přesně podle vás.",
    items: [
      { n: "Dětský motivový dort (Frozen, Minecraft…)", p: "dle domluvy" },
      { n: "Patrový / svatební dort", p: "dle domluvy" },
      { n: "Dort dle vaší fotky", p: "dle domluvy" },
    ],
  },
  {
    group: "Káva & nápoje",
    note: "Výběrová káva a čerstvé ovocné fresh.",
    items: [
      { n: "Espresso", p: "55 Kč" },
      { n: "Cappuccino", p: "69 Kč" },
      { n: "Caffè latte", p: "75 Kč" },
      { n: "Čerstvý fresh / smoothie", p: "od 69 Kč" },
      { n: "Domácí limonáda", p: "69 Kč" },
      { n: "Horká čokoláda", p: "75 Kč" },
    ],
  },
  {
    group: "Slané",
    note: "Když máte chuť na něco pořádného.",
    items: [
      { n: "Plněný croissant", p: "od 69 Kč" },
      { n: "Burger", p: "od 129 Kč" },
      { n: "Toastík se šunkou a sýrem", p: "od 45 Kč" },
      { n: "Párek v rohlíku", p: "45 Kč" },
      { n: "Pizza", p: "od 149 Kč" },
    ],
  },
  {
    group: "Alkohol",
    note: "Na oslavu i příjemné posezení.",
    items: [
      { n: "Aperol Spritz", p: "od 115 Kč" },
      { n: "Prosecco", p: "dle nabídky" },
      { n: "Víno (bílé / červené)", p: "dle nabídky" },
    ],
  },
];

export function Menu() {
  return (
    <section id="menu" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Menu"
          title="Náš ceník"
          subtitle="Výběr z toho, co u nás najdete. Kompletní nabídku rádi ukážeme na místě."
        />
        <div className="mt-16 space-y-14">
          {menu.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 0.05}>
              <div>
                <div className="mb-6">
                  <h3 className="gold-text font-display text-2xl sm:text-3xl">{g.group}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{g.note}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {g.items.map((it) => (
                    <article
                      key={it.n}
                      className="rounded-2xl border border-[#c9a24b]/25 bg-[#f6f1ea] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a24b]/60 hover:shadow-[0_16px_40px_-24px_rgba(58,32,21,0.5)]"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <h4 className="text-base font-medium text-[#3a2015]">{it.n}</h4>
                        <span className="whitespace-nowrap font-semibold text-[#96803f]">{it.p}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    Icon: Coffee,
    title: "Denně čerstvé",
    desc: "Vitrína plná čerstvých zákusků a čerstvě pražená káva každý den.",
  },
  {
    Icon: CakeSlice,
    title: "Domácí receptury",
    desc: "Pečeme poctivě, s láskou a z kvalitních surovin.",
  },
  {
    Icon: Sparkles,
    title: "Dorty na míru",
    desc: "Na oslavy, svatby i narozeniny — přesně podle vaší představy.",
  },
  {
    Icon: Baby,
    title: "Dětský koutek",
    desc: "Rodinná atmosféra a koutek, kde je dětem dobře.",
  },
];

export function Features() {
  return (
    <section className="relative px-6 py-6">
      <div className="warm-panel relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#c9a24b]/40 px-8 py-16 shadow-[0_40px_90px_-40px_rgba(58,40,25,0.5)] sm:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#6b4f28]">
            Proč k nám
          </p>
          <h2 className="font-display text-4xl leading-tight text-[#2b2018] sm:text-5xl">
            Naše přednosti
          </h2>
          <div className="gold-rule mx-auto mt-6 max-w-[8rem]" />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-[#c9a24b]/30 bg-white/85 p-7 text-center shadow-[0_16px_34px_-20px_rgba(58,40,25,0.4)] backdrop-blur">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-[#c9a24b]/50 bg-[#fdfbf7]">
                  <f.Icon className="h-6 w-6 text-[#b07d1e]" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl text-[#2b2320]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5c4a38]">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const marqueeItems = [
  "Výběrová káva",
  "Domácí zákusky",
  "Dorty na objednávku",
  "Pizza & slané",
  "Dětský koutek",
  "Rodinná atmosféra",
];

export function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="tufted-velvet relative overflow-hidden border-y-2 border-[#c9a24b]/40 py-5">
      <div className="marquee-track flex w-max items-center whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display text-lg tracking-wide text-[#f4ead0] sm:text-xl">{t}</span>
            <span className="mx-8 text-[#c9a24b]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const reviews = [
  {
    text: "Příjemné místo s milou obsluhou. Dobré zákusky a zmrzlina, venkovní posezení. Jídlo, obsluha i atmosféra na jedničku.",
    author: "Ondřej Hromádka Novák",
    source: "Google",
  },
  {
    text: "Velice elegantní a příjemná cukrárna. Krásně vybavený a čistý dětský koutek, možnost posadit se i venku. Oceňuji i nabídku bezkofeinové kávy.",
    author: "Michaela Klobásková",
    source: "Google",
  },
  {
    text: "Nádherná cukrárna, lotuskový dortík byl ten nejlepší dortík, co jsem kdy měla.",
    author: "Anna",
    source: "Google",
  },
  {
    text: "Velice příjemná kavárna/cukrárna. Čistý a vybavený dětský koutek, včetně venkovní trampolíny. Zákusky opravdu výborné, to samé platí i pro kávu.",
    author: "Dominik Todt",
    source: "Google",
  },
  {
    text: "Vynikající dorty, kafe i chlebíčky. Pěkné posezení uvnitř i venku. Jednoznačně doporučuji!",
    author: "Motor Flash",
    source: "Google",
  },
  {
    text: "Konečně modernější podnik ve Štětí. Dobré limonády a káva, milá a ochotná obsluha.",
    author: "Petr Šťastný",
    source: "Google",
  },
];

export function Reviews() {
  return (
    <section id="reference" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Reference"
          title="Co říkají hosté"
          subtitle="Hodnocení našich hostů z Googlu. Děkujeme za každé z nich."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="glass-card glass-card-hover relative h-full rounded-[1.4rem] p-8 sm:p-10">
                <span
                  aria-hidden
                  className="gold-text absolute right-6 top-2 font-display text-6xl leading-none opacity-60"
                >
                  &rdquo;
                </span>
                <div className="flex gap-1 text-[#c9a24b]" aria-label="Hodnocení 5 z 5">
                  {"★★★★★".split("").map((s, j) => (
                    <span key={j}>{s}</span>
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-relaxed text-foreground/80">
                  {r.text}
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">
                  — {r.author} · {r.source}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Quote() {
  return (
    <section className="relative px-6 py-10">
      <div className="tufted-velvet sheen relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border-2 border-[#c9a24b]/45 px-8 py-20 text-center shadow-[0_40px_90px_-40px_rgba(0,0,0,0.8)] sm:py-28">
        <Reveal>
          <p className="text-[0.7rem] uppercase tracking-[0.45em] text-[#e9d9a8]/70">
            Nicole&rsquo;s Coffee
          </p>
          <blockquote className="shimmer-text mx-auto mt-7 max-w-3xl font-display text-3xl leading-snug sm:text-5xl">
            „Nejlepší chvíle voní kávou a chutnají po čerstvém dortu.&rdquo;
          </blockquote>
          <div className="gold-rule mx-auto mt-9 max-w-[9rem]" />
          <p className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-[#f4ead0]/70">
            Poctivé suroviny, domácí receptury a klid, ve kterém si každé sousto vychutnáte. Malý
            luxus v srdci Štětí.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const gallery = [
  { src: venecky, alt: "Domácí věnečky s karamelovou polevou a šlehačkou", h: "h-[30rem]" },
  { src: juice, alt: "Čerstvé ovocné fresh nápoje na mramorovém stolku", h: "h-[24rem]" },
  { src: pistachio, alt: "Pistáciový řez s růžovými plátky a šlehačkou", h: "h-[26rem]" },
  { src: cakeFrozen, alt: "Dětský dort s ledovou princeznou na objednávku", h: "h-[32rem]" },
  { src: croissants, alt: "Plněné croissanty se šunkou, sýrem a zeleninou", h: "h-[22rem]" },
  { src: miniPassion, alt: "Mini dezerty s marakujou a malinou", h: "h-[24rem]" },
  { src: cakeMinecraft, alt: "Dětský dort s motivem Minecraft na objednávku", h: "h-[30rem]" },
  { src: miniBlueberry, alt: "Borůvkový řez s čokoládovým dekorem", h: "h-[22rem]" },
  { src: miniCacao, alt: "Čokoládový 70% dezert se zrcadlovou polevou", h: "h-[20rem]" },
  { src: burgers, alt: "Domácí burgery v sezamových houskách", h: "h-[26rem]" },
];

export function Gallery() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = gallery.length;

  const go = (d: number) => setIndex((p) => (p + d + n) % n);
  const jump = (i: number) => setIndex(i);

  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const t = setInterval(() => setIndex((p) => (p + 1) % n), 4500);
    return () => clearInterval(t);
  }, [paused, n]);

  const current = gallery[index];

  return (
    <section id="galerie" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Galerie"
          title="Chvíle u nás"
          subtitle="Zákusky, dorty a dobroty, které od nás odcházejí."
        />

        <Reveal>
          <div
            className="group relative mx-auto mt-16 max-w-4xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem] border-2 border-[#c9a24b]/40 bg-card shadow-[0_40px_90px_-40px_rgba(43,35,32,0.7)]">
              {gallery.map((g, i) => (
                <img
                  key={i}
                  src={g.src}
                  alt={g.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    opacity: i === index ? 1 : 0,
                    transform: i === index ? "scale(1)" : "scale(1.06)",
                  }}
                />
              ))}

              <span className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(20,14,8,0.55),transparent_45%)]" />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                <p
                  key={index}
                  className="font-display text-lg text-[#f6ead1] duration-700 animate-in fade-in slide-in-from-bottom-2 sm:text-xl"
                >
                  {current.alt}
                </p>
              </div>

              <button
                type="button"
                aria-label="Předchozí"
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#c9a24b]/50 bg-black/35 text-[#f0dc9a] backdrop-blur transition-all hover:bg-black/55 hover:text-white sm:left-5"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Další"
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#c9a24b]/50 bg-black/35 text-[#f0dc9a] backdrop-blur transition-all hover:bg-black/55 hover:text-white sm:right-5"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Zobrazit: ${g.alt}`}
                  aria-current={i === index}
                  onClick={() => jump(i)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    i === index
                      ? "w-8 bg-gradient-to-r from-[#c9a24b] to-[#f0dc9a]"
                      : "w-2.5 bg-[#c9a24b]/35 hover:bg-[#c9a24b]/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Kids() {
  return (
    <section id="deti" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="glass-card relative overflow-hidden rounded-[1.8rem]">
            <div className="grid items-center gap-0 lg:grid-cols-2">
              <div className="p-10 sm:p-14">
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                  Dětský koutek
                </p>
                <h2 className="gold-text mt-5 text-4xl leading-tight sm:text-5xl">
                  Rodinná kavárna
                </h2>
                <div className="gold-rule mt-6 max-w-[7rem]" />
                <p className="mt-7 text-base leading-relaxed text-foreground/75">
                  U nás si dáte kávu v klidu. Děti mají svůj koutek s hračkami a knížkami, na dosah
                  od vašeho stolu — takže máte přehled a zároveň chvíli pro sebe.
                </p>
                <p className="mt-4 text-base leading-relaxed text-foreground/75">
                  Rádi vidíme celé rodiny. A malý zákusek navíc se vždycky někde najde.
                </p>
              </div>
              <div className="relative h-72 lg:h-full lg:min-h-[26rem]">
                <img
                  src={kidsImg}
                  alt="Dětský koutek s hračkami v prosvětlené kavárně"
                  loading="lazy"
                  width={1200}
                  height={700}
                  className="h-full w-full object-cover"
                />
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(253,251,247,0.85),transparent_45%)] lg:block hidden" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}