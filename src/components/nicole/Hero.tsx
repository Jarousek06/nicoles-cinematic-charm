import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import marble from "@/assets/marble-bg.jpg";
import iconCoffee from "@/assets/icon-coffee.png";
import iconCake from "@/assets/icon-cake.png";
import iconCroissant from "@/assets/icon-croissant.png";
import iconMacaron from "@/assets/icon-macaron.png";

function Floating({
  src,
  alt,
  className,
  delay = 0,
  duration = 7,
}: {
  src: string;
  alt: string;
  className: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.img
      src={src}
      alt={alt}
      aria-hidden
      width={640}
      height={640}
      className={`pointer-events-none absolute select-none drop-shadow-[0_25px_35px_rgba(90,70,40,0.18)] ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1, y: [0, -18, 0], rotate: [-3, 3, -3] }}
      transition={{
        opacity: { duration: 1.2, delay },
        scale: { duration: 1.2, delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: duration * 1.6, repeat: Infinity, ease: "easeInOut", delay },
      }}
    />
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-[-10%]" style={{ y: bgY }}>
        <img
          src={marble}
          alt=""
          aria-hidden
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55),rgba(248,246,242,0.9))]" />

      <Floating
        src={iconCoffee}
        alt=""
        delay={0.2}
        className="left-[4%] top-[22%] w-24 sm:w-36 lg:left-[10%] lg:w-44"
      />
      <Floating
        src={iconCake}
        alt=""
        delay={0.6}
        duration={8}
        className="right-[5%] top-[18%] w-20 sm:w-32 lg:right-[11%] lg:w-40"
      />
      <Floating
        src={iconCroissant}
        alt=""
        delay={1}
        duration={9}
        className="bottom-[14%] left-[10%] hidden w-24 sm:block lg:left-[18%] lg:w-32"
      />
      <Floating
        src={iconMacaron}
        alt=""
        delay={1.4}
        duration={6.5}
        className="bottom-[16%] right-[9%] hidden w-20 sm:block lg:right-[17%] lg:w-28"
      />

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-[0.7rem] uppercase tracking-[0.45em] text-muted-foreground sm:text-xs"
        >
          Štětí · od srdce
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="shimmer-text mt-6 text-5xl leading-[1.05] sm:text-7xl lg:text-8xl"
        >
          Nicole&rsquo;s Coffee
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="gold-rule mx-auto mt-8 max-w-sm"
        />

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg"
        >
          Kavárna &amp; cukrárna ve Štětí — káva, zákusky a chvíle, které chutnají.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#nabidka"
            className="gold-fill w-full rounded-full px-8 py-3.5 text-sm font-medium tracking-wide text-[#2B2320] shadow-[0_18px_40px_-18px_rgba(179,135,40,0.8)] transition-transform duration-300 hover:scale-[1.04] sm:w-auto"
          >
            Prohlédnout nabídku
          </a>
          <a
            href="#kontakt"
            className="w-full rounded-full border border-[#b38728]/50 bg-white/60 px-8 py-3.5 text-sm font-medium tracking-wide text-foreground backdrop-blur transition-all duration-300 hover:border-[#b38728] hover:bg-white/85 sm:w-auto"
          >
            Kde nás najdete
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.6, duration: 1 }, y: { duration: 2.4, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground"
      >
        scroll
      </motion.div>
    </section>
  );
}