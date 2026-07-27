import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="gold-text text-4xl leading-tight sm:text-5xl">{title}</h2>
      <div className="gold-rule mx-auto mt-6 max-w-[8rem]" />
      {subtitle ? (
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
