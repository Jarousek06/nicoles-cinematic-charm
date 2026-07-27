import { motion } from "framer-motion";
import { Reveal, SectionTitle } from "./Reveal";
import aboutImg from "@/assets/about-cafe.jpg";
import kidsImg from "@/assets/kids.jpg";
import gal1 from "@/assets/gal-1.jpg";
import gal2 from "@/assets/gal-2.jpg";
import gal3 from "@/assets/gal-3.jpg";
import gal4 from "@/assets/gal-4.jpg";
import gal5 from "@/assets/gal-5.jpg";
import iconCoffee from "@/assets/icon-coffee.png";
import iconCake from "@/assets/icon-cake.png";
import iconCroissant from "@/assets/icon-croissant.png";
import iconMacaron from "@/assets/icon-macaron.png";

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
                className="rounded-full border border-[#b38728]/35 bg-white/70 px-4 py-1.5 text-xs tracking-wide text-foreground/80 backdrop-blur"
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
                src={aboutImg}
                alt="Interiér kavárny Nicole's Coffee s mramorovým pultem a zlatými detaily"
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
    icon: iconCake,
    title: "Sladké zákusky",
    desc: "Denně čerstvá vitrína plná řezů, věnečků, cheesecaků a dezertů.",
  },
  {
    icon: iconMacaron,
    title: "Dorty na objednávku",
    desc: "Narozeniny, svatby, oslavy. Podle vaší představy, do posledního detailu.",
  },
  {
    icon: iconCroissant,
    title: "Pizza & slané",
    desc: "Když máte chuť na něco pořádného. Křupavé těsto, poctivé suroviny.",
  },
  {
    icon: iconCake,
    title: "Něco pro děti",
    desc: "Malé porce, dětské nápoje a koutek, kde je jim dobře.",
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

export function Quote() {
  return (
    <section className="relative px-6 py-10">
      <div className="dark-marble marble-veins sheen relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#b38728]/30 px-8 py-20 text-center shadow-[0_40px_90px_-40px_rgba(0,0,0,0.8)] sm:py-28">
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
  { src: gal2, alt: "Patrový dort se zlatými perlami na mramorovém stojanu", h: "h-[30rem]" },
  { src: gal1, alt: "Šálek kávy s latte art na mramorovém stolku", h: "h-[22rem]" },
  { src: gal4, alt: "Vitrína plná barevných zákusků a věnečků", h: "h-[26rem]" },
  { src: gal3, alt: "Křupavá pizza margherita na mramorovém stole", h: "h-[20rem]" },
  { src: gal5, alt: "Slavnostní dort se zlatým zdobením a růžemi", h: "h-[28rem]" },
  { src: gal1, alt: "Detail kávy servírované ve skleněném šálku", h: "h-[24rem]" },
];

export function Gallery() {
  return (
    <section id="galerie" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Galerie"
          title="Chvíle u nás"
          subtitle="Fotografie z kavárny, vitríny a dortů, které od nás odcházejí."
        />
        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={(i % 3) * 0.1}>
              <figure className="group relative overflow-hidden rounded-[1.3rem] border border-[#b38728]/25 shadow-[0_20px_50px_-30px_rgba(43,35,32,0.6)]">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className={`w-full ${g.h} object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110`}
                />
                <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(to_top,rgba(43,35,32,0.35),transparent_55%)]" />
              </figure>
            </Reveal>
          ))}
        </div>
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