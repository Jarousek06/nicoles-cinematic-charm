import { useState, type FormEvent } from "react";
import { Clock, MapPin, Facebook, Globe } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionTitle } from "./Reveal";

const hours = [
  { d: "Pondělí – Pátek", t: "9:00 – 17:00" },
  { d: "Sobota – Neděle", t: "10:00 – 16:00" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    toast.success("Děkujeme! Ozveme se vám co nejdříve.");
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section id="kontakt" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Kontakt"
          title="Otevírací doba & kde nás najdete"
          subtitle="Zastavte se na kávu, nebo nám napište — dorty rádi domluvíme podle vás."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass-card glass-card-hover h-full rounded-[1.4rem] p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#b38728]" aria-hidden />
                <div>
                  <h3 className="text-xl">Adresa</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Viničná 692
                    <br />
                    411 08 Štětí
                  </p>
                </div>
              </div>

              <div className="gold-rule my-8" />

              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-[#b38728]" aria-hidden />
                <div className="w-full">
                  <h3 className="text-xl">Otevírací doba</h3>
                  <dl className="mt-3 space-y-2 text-sm">
                    {hours.map((h) => (
                      <div key={h.d} className="flex justify-between gap-6">
                        <dt className="text-muted-foreground">{h.d}</dt>
                        <dd className="font-medium tracking-wide">{h.t}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="gold-rule my-8" />

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#b38728]/40 bg-white/70 px-5 py-2.5 text-sm transition-colors hover:border-[#b38728] hover:bg-white"
                >
                  <Facebook className="h-4 w-4" aria-hidden /> Facebook
                </a>
                <a
                  href="https://www.firmy.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#b38728]/40 bg-white/70 px-5 py-2.5 text-sm transition-colors hover:border-[#b38728] hover:bg-white"
                >
                  <Globe className="h-4 w-4" aria-hidden /> Firmy.cz
                </a>
              </div>

              <div className="mt-8 overflow-hidden rounded-[1rem] border border-[#b38728]/30">
                <iframe
                  title="Mapa – Nicole's Coffee, Viničná 692, Štětí"
                  src="https://maps.google.com/maps?q=Vini%C4%8Dn%C3%A1%20692%2C%20411%2008%20%C5%A0t%C4%9Bt%C3%AD&z=16&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form
              onSubmit={onSubmit}
              className="glass-card glass-card-hover h-full rounded-[1.4rem] p-8 sm:p-10"
            >
              <h3 className="text-xl">Napište nám</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Objednávka dortu, rezervace nebo jen dotaz — ozveme se.
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Jméno
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full rounded-xl border border-[#b38728]/30 bg-white/70 px-4 py-3 text-sm outline-none transition-all focus:border-[#b38728] focus:ring-2 focus:ring-[#b38728]/25"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-[#b38728]/30 bg-white/70 px-4 py-3 text-sm outline-none transition-all focus:border-[#b38728] focus:ring-2 focus:ring-[#b38728]/25"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Zpráva
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full resize-none rounded-xl border border-[#b38728]/30 bg-white/70 px-4 py-3 text-sm outline-none transition-all focus:border-[#b38728] focus:ring-2 focus:ring-[#b38728]/25"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="gold-fill mt-8 w-full rounded-full px-8 py-3.5 text-sm font-medium tracking-wide text-[#2B2320] shadow-[0_18px_40px_-18px_rgba(179,135,40,0.8)] transition-transform duration-300 hover:scale-[1.02]"
              >
                {sent ? "Odesláno" : "Odeslat zprávu"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}