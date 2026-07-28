import logoMask from "@/assets/logo-mask.png";

/**
 * Nicole's Coffee logo rendered as a transparent gold shape.
 * The black-on-white source is turned into a CSS mask so the mark is
 * background-free and filled with a shimmering gold gradient — works on
 * light marble and dark panels alike.
 */
export function Logo({
  className,
  animated = true,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <span
      aria-hidden
      className={`block aspect-[541/694] ${animated ? "logo-gold" : "gold-fill"} ${className ?? ""}`}
      style={{
        WebkitMaskImage: `url(${logoMask})`,
        maskImage: `url(${logoMask})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}
