import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { a as Coffee, c as ChevronLeft, i as Facebook, l as CakeSlice, n as MapPin, o as Clock, r as Globe, s as ChevronRight, t as Sparkles, u as Baby } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CBuNyTCz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var marble_bg_default = "/assets/marble-bg-yOiFhmaC.jpg";
var logo_mask_default = "/assets/logo-mask-Ch2aAhu6.png";
/**
* Nicole's Coffee logo rendered as a transparent gold shape.
* The black-on-white source is turned into a CSS mask so the mark is
* background-free and filled with a shimmering gold gradient — works on
* light marble and dark panels alike.
*/
function Logo({ className, animated = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": true,
		className: `block aspect-[541/694] ${animated ? "logo-gold" : "gold-fill"} ${className ?? ""}`,
		style: {
			WebkitMaskImage: `url(${logo_mask_default})`,
			maskImage: `url(${logo_mask_default})`,
			WebkitMaskRepeat: "no-repeat",
			maskRepeat: "no-repeat",
			WebkitMaskPosition: "center",
			maskPosition: "center",
			WebkitMaskSize: "contain",
			maskSize: "contain"
		}
	});
}
var icon_coffee_default = "/assets/icon-coffee-CNzx52kv.png";
var icon_cake_default = "/assets/icon-cake-9rKDeCGB.png";
var icon_croissant_default = "/assets/icon-croissant-CqUaHicr.png";
var icon_macaron_default = "/assets/icon-macaron-DtH5U099.png";
function Floating({ src, alt, className, delay = 0, duration = 7 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
		src,
		alt,
		"aria-hidden": true,
		width: 640,
		height: 640,
		className: `pointer-events-none absolute select-none drop-shadow-[0_25px_35px_rgba(90,70,40,0.18)] ${className}`,
		initial: {
			opacity: 0,
			scale: .85
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: [
				0,
				-18,
				0
			],
			rotate: [
				-3,
				3,
				-3
			]
		},
		transition: {
			opacity: {
				duration: 1.2,
				delay
			},
			scale: {
				duration: 1.2,
				delay
			},
			y: {
				duration,
				repeat: Infinity,
				ease: "easeInOut",
				delay
			},
			rotate: {
				duration: duration * 1.6,
				repeat: Infinity,
				ease: "easeInOut",
				delay
			}
		}
	});
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
	const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
	const fade = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		id: "hero",
		className: "relative flex min-h-[100svh] items-center justify-center overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "sheen absolute inset-[-10%]",
				style: { y: bgY },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: marble_bg_default,
					alt: "",
					"aria-hidden": true,
					width: 1920,
					height: 1280,
					className: "h-full w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.5),rgba(248,246,242,0.88))]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(20,14,8,0.28))]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "gold-aura pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[36rem] -translate-x-1/2 -translate-y-1/2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Floating, {
				src: icon_coffee_default,
				alt: "",
				delay: .2,
				className: "left-[4%] top-[22%] w-24 sm:w-36 lg:left-[10%] lg:w-44"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Floating, {
				src: icon_cake_default,
				alt: "",
				delay: .6,
				duration: 8,
				className: "right-[5%] top-[18%] w-20 sm:w-32 lg:right-[11%] lg:w-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Floating, {
				src: icon_croissant_default,
				alt: "",
				delay: 1,
				duration: 9,
				className: "bottom-[14%] left-[10%] hidden w-24 sm:block lg:left-[18%] lg:w-32"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Floating, {
				src: icon_macaron_default,
				alt: "",
				delay: 1.4,
				duration: 6.5,
				className: "bottom-[16%] right-[9%] hidden w-20 sm:block lg:right-[17%] lg:w-28"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y: contentY,
					opacity: fade
				},
				className: "relative z-10 mx-auto max-w-3xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 14
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: .1
						},
						className: "text-[0.7rem] uppercase tracking-[0.45em] text-muted-foreground sm:text-xs",
						children: "Štětí · od srdce"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 24,
							scale: .96,
							filter: "blur(8px)"
						},
						animate: {
							opacity: 1,
							y: 0,
							scale: 1,
							filter: "blur(0px)"
						},
						transition: {
							duration: 1.4,
							delay: .25,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "mx-auto h-52 drop-shadow-[0_14px_30px_rgba(150,110,40,0.35)] sm:h-64 lg:h-72" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Nicole’s Coffee — Cukrárna a kavárna Štětí"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { scaleX: 0 },
						animate: { scaleX: 1 },
						transition: {
							duration: 1.2,
							delay: .9
						},
						className: "gold-rule mx-auto mt-8 max-w-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 18
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: .7
						},
						className: "mx-auto mt-8 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg",
						children: "Kavárna & cukrárna ve Štětí — káva, zákusky a chvíle, které chutnají."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 18
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: .95
						},
						className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#nabidka",
							className: "gold-fill w-full rounded-full px-8 py-3.5 text-sm font-medium tracking-wide text-[#2B2320] shadow-[0_18px_40px_-18px_rgba(179,135,40,0.8)] transition-transform duration-300 hover:scale-[1.04] sm:w-auto",
							children: "Prohlédnout nabídku"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#kontakt",
							className: "w-full rounded-full border border-[#c9a24b]/50 bg-white/60 px-8 py-3.5 text-sm font-medium tracking-wide text-foreground backdrop-blur transition-all duration-300 hover:border-[#c9a24b] hover:bg-white/85 sm:w-auto",
							children: "Kde nás najdete"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: {
					opacity: 1,
					y: [
						0,
						10,
						0
					]
				},
				transition: {
					opacity: {
						delay: 1.6,
						duration: 1
					},
					y: {
						duration: 2.4,
						repeat: Infinity
					}
				},
				className: "absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground",
				children: "scroll"
			})
		]
	});
}
function Reveal({ children, delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y: 32
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .9,
			delay,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		children
	});
}
function SectionTitle({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "mx-auto max-w-2xl text-center",
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "gold-text text-4xl leading-tight sm:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mx-auto mt-6 max-w-[8rem]" }),
			subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-base leading-relaxed text-muted-foreground",
				children: subtitle
			}) : null
		]
	});
}
var platter_default = "/assets/platter-CgtO7TOo.jpg";
var venecky_default = "/assets/venecky-Bvynm4lb.jpg";
var pistachio_default = "/assets/pistachio-BD3GsAxl.jpg";
var cake_frozen_default = "/assets/cake-frozen-CUm5E-ff.jpg";
var cake_minecraft_default = "/assets/cake-minecraft-Bu-hFfZN.jpg";
var mini_passion_default = "/assets/mini-passion-B0JB084g.jpg";
var mini_blueberry_default = "/assets/mini-blueberry-Bp5x0SL6.jpg";
var mini_cacao_default = "/assets/mini-cacao-gxGwamKE.jpg";
var juice_default = "/assets/juice-ttSE9vmA.jpg";
var burgers_default = "/assets/burgers-Bm779m94.jpg";
var croissants_default = "/assets/croissants-DgmnHYYu.jpg";
var kids_default = "/assets/kids-a20xnXUT.jpg";
var icon_pizza_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%20fill='none'%3e%3cdefs%3e%3clinearGradient%20id='cheese'%20x1='200'%20y1='240'%20x2='360'%20y2='560'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23FFE28C'/%3e%3cstop%20offset='0.5'%20stop-color='%23F7C24E'/%3e%3cstop%20offset='1'%20stop-color='%23E8A430'/%3e%3c/linearGradient%3e%3clinearGradient%20id='crust'%20x1='140'%20y1='210'%20x2='500'%20y2='290'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23EDB874'/%3e%3cstop%20offset='1'%20stop-color='%23CB8536'/%3e%3c/linearGradient%3e%3cradialGradient%20id='pep'%20cx='0.38'%20cy='0.34'%20r='0.75'%3e%3cstop%20offset='0'%20stop-color='%23EC6248'/%3e%3cstop%20offset='0.7'%20stop-color='%23CE3A26'/%3e%3cstop%20offset='1'%20stop-color='%23A62518'/%3e%3c/radialGradient%3e%3cfilter%20id='soft'%20x='-40%25'%20y='-40%25'%20width='180%25'%20height='180%25'%3e%3cfeGaussianBlur%20stdDeviation='12'/%3e%3c/filter%3e%3c/defs%3e%3c!--%20drop%20shadow%20--%3e%3cellipse%20cx='322'%20cy='560'%20rx='150'%20ry='28'%20fill='%236E4E22'%20opacity='0.20'%20filter='url(%23soft)'/%3e%3c!--%20cheese%20slice%20body%20--%3e%3cpath%20d='M138%20274%20Q320%20234%20502%20274%20L346%20542%20Q320%20570%20294%20542%20Z'%20fill='url(%23cheese)'/%3e%3c!--%20warm%20inner%20shading%20near%20the%20tip%20--%3e%3cpath%20d='M300%20470%20Q320%20540%20340%20470%20L346%20542%20Q320%20570%20294%20542%20Z'%20fill='%23DF9A2C'%20opacity='0.45'/%3e%3c!--%20sauce%20peek%20under%20the%20crust%20--%3e%3cpath%20d='M152%20272%20Q320%20236%20490%20272'%20stroke='%23DC6C34'%20stroke-width='11'%20stroke-linecap='round'%20fill='none'%20opacity='0.75'/%3e%3c!--%20crust%20(rounded,%203D-ish)%20--%3e%3cpath%20d='M140%20266%20Q320%20214%20500%20266'%20stroke='url(%23crust)'%20stroke-width='54'%20stroke-linecap='round'%20fill='none'/%3e%3cpath%20d='M152%20252%20Q320%20208%20488%20252'%20stroke='%23F6D9A2'%20stroke-width='15'%20stroke-linecap='round'%20fill='none'%20opacity='0.65'/%3e%3c!--%20pepperoni%20--%3e%3cg%3e%3ccircle%20cx='248'%20cy='336'%20r='31'%20fill='url(%23pep)'/%3e%3cellipse%20cx='238'%20cy='326'%20rx='11'%20ry='7'%20fill='%23FF9A7E'%20opacity='0.55'/%3e%3ccircle%20cx='392'%20cy='322'%20r='28'%20fill='url(%23pep)'/%3e%3cellipse%20cx='383'%20cy='313'%20rx='10'%20ry='6'%20fill='%23FF9A7E'%20opacity='0.55'/%3e%3ccircle%20cx='322'%20cy='436'%20r='30'%20fill='url(%23pep)'/%3e%3cellipse%20cx='313'%20cy='427'%20rx='10'%20ry='6'%20fill='%23FF9A7E'%20opacity='0.55'/%3e%3c/g%3e%3c!--%20basil%20bits%20--%3e%3cg%20fill='%234E9A3E'%3e%3cellipse%20cx='316'%20cy='330'%20rx='12'%20ry='7'%20transform='rotate(-24%20316%20330)'/%3e%3cellipse%20cx='196'%20cy='404'%20rx='11'%20ry='6'%20transform='rotate(18%20196%20404)'/%3e%3cellipse%20cx='388'%20cy='404'%20rx='10'%20ry='6'%20transform='rotate(-14%20388%20404)'/%3e%3c/g%3e%3c!--%20glossy%20specular%20highlight%20over%20the%20cheese%20--%3e%3cellipse%20cx='258'%20cy='322'%20rx='120'%20ry='58'%20fill='%23FFFFFF'%20opacity='0.10'%20filter='url(%23soft)'/%3e%3c/svg%3e";
var icon_icecream_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%20fill='none'%3e%3cdefs%3e%3clinearGradient%20id='cone'%20x1='250'%20y1='360'%20x2='360'%20y2='590'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23EAB669'/%3e%3cstop%20offset='1'%20stop-color='%23C9822F'/%3e%3c/linearGradient%3e%3cradialGradient%20id='pink'%20cx='0.4'%20cy='0.35'%20r='0.72'%3e%3cstop%20offset='0'%20stop-color='%23FCCBDB'/%3e%3cstop%20offset='1'%20stop-color='%23F19BB7'/%3e%3c/radialGradient%3e%3cradialGradient%20id='cream'%20cx='0.4'%20cy='0.35'%20r='0.72'%3e%3cstop%20offset='0'%20stop-color='%23FFF6E1'/%3e%3cstop%20offset='1'%20stop-color='%23F2D9A2'/%3e%3c/radialGradient%3e%3cradialGradient%20id='mint'%20cx='0.4'%20cy='0.35'%20r='0.72'%3e%3cstop%20offset='0'%20stop-color='%23CDEBC4'/%3e%3cstop%20offset='1'%20stop-color='%239FD08F'/%3e%3c/radialGradient%3e%3cradialGradient%20id='cherry'%20cx='0.38'%20cy='0.34'%20r='0.75'%3e%3cstop%20offset='0'%20stop-color='%23EC6248'/%3e%3cstop%20offset='0.7'%20stop-color='%23CE3A26'/%3e%3cstop%20offset='1'%20stop-color='%23A62518'/%3e%3c/radialGradient%3e%3cclipPath%20id='coneClip'%3e%3cpath%20d='M250%20358%20L390%20358%20L320%20592%20Z'/%3e%3c/clipPath%3e%3cfilter%20id='soft'%20x='-40%25'%20y='-40%25'%20width='180%25'%20height='180%25'%3e%3cfeGaussianBlur%20stdDeviation='12'/%3e%3c/filter%3e%3c/defs%3e%3c!--%20drop%20shadow%20--%3e%3cellipse%20cx='322'%20cy='596'%20rx='120'%20ry='22'%20fill='%236E4E22'%20opacity='0.20'%20filter='url(%23soft)'/%3e%3c!--%20cone%20--%3e%3cpath%20d='M250%20358%20L390%20358%20L320%20592%20Z'%20fill='url(%23cone)'/%3e%3cg%20clip-path='url(%23coneClip)'%20stroke='%239C6220'%20stroke-width='6'%20opacity='0.45'%20stroke-linecap='round'%3e%3cline%20x1='170'%20y1='350'%20x2='330'%20y2='610'/%3e%3cline%20x1='210'%20y1='350'%20x2='370'%20y2='610'/%3e%3cline%20x1='250'%20y1='350'%20x2='410'%20y2='610'/%3e%3cline%20x1='290'%20y1='350'%20x2='450'%20y2='610'/%3e%3cline%20x1='470'%20y1='350'%20x2='310'%20y2='610'/%3e%3cline%20x1='430'%20y1='350'%20x2='270'%20y2='610'/%3e%3cline%20x1='390'%20y1='350'%20x2='230'%20y2='610'/%3e%3cline%20x1='350'%20y1='350'%20x2='190'%20y2='610'/%3e%3c/g%3e%3c!--%20cone%20top%20rim%20--%3e%3cellipse%20cx='320'%20cy='360'%20rx='72'%20ry='15'%20fill='%23D9A24E'/%3e%3c!--%20scoops%20--%3e%3ccircle%20cx='320'%20cy='338'%20r='82'%20fill='url(%23pink)'/%3e%3ccircle%20cx='266'%20cy='300'%20r='52'%20fill='url(%23mint)'/%3e%3ccircle%20cx='320'%20cy='258'%20r='66'%20fill='url(%23cream)'/%3e%3c!--%20glossy%20highlights%20--%3e%3cellipse%20cx='290'%20cy='312'%20rx='26'%20ry='15'%20fill='%23FFFFFF'%20opacity='0.30'/%3e%3cellipse%20cx='300'%20cy='238'%20rx='20'%20ry='12'%20fill='%23FFFFFF'%20opacity='0.35'/%3e%3cellipse%20cx='250'%20cy='286'%20rx='15'%20ry='9'%20fill='%23FFFFFF'%20opacity='0.30'/%3e%3c!--%20cherry%20--%3e%3cpath%20d='M322%20212%20Q330%20178%20350%20166'%20stroke='%236E8B3D'%20stroke-width='7'%20fill='none'%20stroke-linecap='round'/%3e%3ccircle%20cx='320'%20cy='212'%20r='21'%20fill='url(%23cherry)'/%3e%3cellipse%20cx='312'%20cy='205'%20rx='6'%20ry='4'%20fill='%23FF9A7E'%20opacity='0.6'/%3e%3c/svg%3e";
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "o-nas",
		className: "relative mx-auto max-w-6xl px-6 py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-14 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.35em] text-muted-foreground",
					children: "Náš příběh"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "gold-text mt-5 text-4xl leading-tight sm:text-5xl",
					children: "Malý luxus v srdci Štětí"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-6 max-w-[7rem]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 space-y-5 text-base leading-relaxed text-foreground/75",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Nicole’s Coffee je útulná kavárna, kde voní čerstvě pražená káva a vitrína se plní zákusky, které se dělají s láskou a poctivě. Široký výběr cukrárenských produktů, dorty na objednávku i něco slaného — třeba pizza." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Máme dětský koutek, měkká křesla a čas, který se u nás nikam nežene. Je to místo, kam se rádi vracíte — na jedno espresso, na dlouhý hovor nebo na kousek dortu, který si zasloužíte." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-9 flex flex-wrap gap-3",
					children: [
						"Výběrová káva",
						"Domácí zákusky",
						"Dětský koutek",
						"Rodinná atmosféra"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-[#c9a24b]/35 bg-white/70 px-4 py-1.5 text-xs tracking-wide text-foreground/80 backdrop-blur",
						children: t
					}, t))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .15,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-fill absolute -inset-[3px] rounded-[1.6rem] opacity-80 blur-[1px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-[1.5rem] bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
							src: platter_default,
							alt: "Talíř plný zákusků a dezertů Nicole's Coffee pod zlatým nápisem",
							loading: "lazy",
							width: 1200,
							height: 1408,
							className: "h-[30rem] w-full object-cover sm:h-[36rem]",
							initial: { scale: 1.12 },
							whileInView: { scale: 1 },
							viewport: { once: true },
							transition: {
								duration: 1.6,
								ease: [
									.16,
									1,
									.3,
									1
								]
							}
						})
					})]
				})
			})]
		})
	});
}
var offer = [
	{
		icon: icon_coffee_default,
		title: "Káva",
		desc: "Espresso, cappuccino, filtr i ledové varianty. Vždy čerstvě namleto."
	},
	{
		icon: icon_macaron_default,
		title: "Sladké zákusky",
		desc: "Denně čerstvá vitrína plná řezů, věnečků, cheesecaků a dezertů."
	},
	{
		icon: icon_cake_default,
		title: "Dorty na objednávku",
		desc: "Narozeniny, svatby, oslavy. Podle vaší představy, do posledního detailu."
	},
	{
		icon: icon_pizza_default,
		title: "Pizza & slané",
		desc: "Když máte chuť na něco pořádného. Křupavé těsto, poctivé suroviny."
	},
	{
		icon: icon_icecream_default,
		title: "Něco pro děti",
		desc: "Malé porce, zmrzlina, dětské nápoje a koutek, kde je jim dobře."
	}
];
function Offer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "nabidka",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Nabídka",
				title: "Galerie chutí",
				subtitle: "Každý den nová vitrína. Vybírejte očima — a pak ochutnejte."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: offer.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "glass-card glass-card-hover gold-ring group relative h-full rounded-[1.4rem] p-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mx-auto h-28 w-28",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-fill absolute inset-0 rounded-full opacity-90 shadow-[0_16px_34px_-14px_rgba(179,135,40,0.6)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-[3px] grid place-items-center rounded-full bg-[#fdfbf7] shadow-[inset_0_2px_12px_rgba(90,70,40,0.14)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
										src: item.icon,
										alt: "",
										"aria-hidden": true,
										loading: "lazy",
										width: 640,
										height: 640,
										className: "h-16 w-16 object-contain drop-shadow-[0_8px_14px_rgba(90,70,40,0.28)]",
										animate: { y: [
											0,
											-7,
											0
										] },
										transition: {
											duration: 5 + i * .4,
											repeat: Infinity,
											ease: "easeInOut"
										}
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "gold-text mt-6 text-2xl",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mx-auto mt-4 max-w-[3.5rem] opacity-70 transition-opacity duration-500 group-hover:opacity-100" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted-foreground",
								children: item.desc
							})
						]
					})
				}, item.title))
			})]
		})
	});
}
var menu = [
	{
		group: "Zákusky & dezerty",
		note: "Denně čerstvá vitrína plná domácích dobrot.",
		items: [
			{
				n: "Věneček",
				p: "od 45 Kč"
			},
			{
				n: "Pistáciový řez",
				p: "69 Kč"
			},
			{
				n: "Ovocný košíček",
				p: "49 Kč"
			},
			{
				n: "Mini dezert (dle nabídky)",
				p: "55 Kč"
			},
			{
				n: "Punčový řez / kremrole",
				p: "od 39 Kč"
			},
			{
				n: "Cheesecake",
				p: "69 Kč"
			}
		]
	},
	{
		group: "Dorty na objednávku",
		note: "Dětské motivy, oslavy i svatby — přesně podle vás.",
		items: [
			{
				n: "Dětský motivový dort (Frozen, Minecraft…)",
				p: "dle domluvy"
			},
			{
				n: "Patrový / svatební dort",
				p: "dle domluvy"
			},
			{
				n: "Dort dle vaší fotky",
				p: "dle domluvy"
			}
		]
	},
	{
		group: "Káva & nápoje",
		note: "Výběrová káva a čerstvé ovocné fresh.",
		items: [
			{
				n: "Espresso",
				p: "55 Kč"
			},
			{
				n: "Cappuccino",
				p: "69 Kč"
			},
			{
				n: "Caffè latte",
				p: "75 Kč"
			},
			{
				n: "Čerstvý fresh / smoothie",
				p: "od 69 Kč"
			},
			{
				n: "Domácí limonáda",
				p: "69 Kč"
			},
			{
				n: "Horká čokoláda",
				p: "75 Kč"
			}
		]
	},
	{
		group: "Slané",
		note: "Když máte chuť na něco pořádného.",
		items: [
			{
				n: "Plněný croissant",
				p: "od 69 Kč"
			},
			{
				n: "Burger",
				p: "od 129 Kč"
			},
			{
				n: "Toastík se šunkou a sýrem",
				p: "od 45 Kč"
			},
			{
				n: "Párek v rohlíku",
				p: "45 Kč"
			},
			{
				n: "Pizza",
				p: "od 149 Kč"
			}
		]
	},
	{
		group: "Alkohol",
		note: "Na oslavu i příjemné posezení.",
		items: [
			{
				n: "Aperol Spritz",
				p: "od 115 Kč"
			},
			{
				n: "Prosecco",
				p: "dle nabídky"
			},
			{
				n: "Víno (bílé / červené)",
				p: "dle nabídky"
			}
		]
	}
];
function Menu() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "menu",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Menu",
				title: "Náš ceník",
				subtitle: "Výběr z toho, co u nás najdete. Kompletní nabídku rádi ukážeme na místě."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 space-y-14",
				children: menu.map((g, gi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: gi * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "gold-text font-display text-2xl sm:text-3xl",
							children: g.group
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: g.note
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: g.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "rounded-2xl border border-[#c9a24b]/25 bg-[#f6f1ea] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a24b]/60 hover:shadow-[0_16px_40px_-24px_rgba(58,32,21,0.5)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-base font-medium text-[#3a2015]",
									children: it.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "whitespace-nowrap font-semibold text-[#96803f]",
									children: it.p
								})]
							})
						}, it.n))
					})] })
				}, g.group))
			})]
		})
	});
}
var features = [
	{
		Icon: Coffee,
		title: "Denně čerstvé",
		desc: "Vitrína plná čerstvých zákusků a čerstvě pražená káva každý den."
	},
	{
		Icon: CakeSlice,
		title: "Domácí receptury",
		desc: "Pečeme poctivě, s láskou a z kvalitních surovin."
	},
	{
		Icon: Sparkles,
		title: "Dorty na míru",
		desc: "Na oslavy, svatby i narozeniny — přesně podle vaší představy."
	},
	{
		Icon: Baby,
		title: "Dětský koutek",
		desc: "Rodinná atmosféra a koutek, kde je dětem dobře."
	}
];
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative px-6 py-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "warm-panel relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#c9a24b]/40 px-8 py-16 shadow-[0_40px_90px_-40px_rgba(58,40,25,0.5)] sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#6b4f28]",
						children: "Proč k nám"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl leading-tight text-[#2b2018] sm:text-5xl",
						children: "Naše přednosti"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mx-auto mt-6 max-w-[8rem]" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-2xl border border-[#c9a24b]/30 bg-white/85 p-7 text-center shadow-[0_16px_34px_-20px_rgba(58,40,25,0.4)] backdrop-blur",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-auto grid h-14 w-14 place-items-center rounded-full border border-[#c9a24b]/50 bg-[#fdfbf7]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.Icon, {
									className: "h-6 w-6 text-[#b07d1e]",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-xl text-[#2b2320]",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-[#5c4a38]",
								children: f.desc
							})
						]
					})
				}, f.title))
			})]
		})
	});
}
var marqueeItems = [
	"Výběrová káva",
	"Domácí zákusky",
	"Dorty na objednávku",
	"Pizza & slané",
	"Dětský koutek",
	"Rodinná atmosféra"
];
function Marquee() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "tufted-velvet relative overflow-hidden border-y-2 border-[#c9a24b]/40 py-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track flex w-max items-center whitespace-nowrap",
			children: [...marqueeItems, ...marqueeItems].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg tracking-wide text-[#f4ead0] sm:text-xl",
					children: t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-8 text-[#c9a24b]",
					children: "✦"
				})]
			}, i))
		})
	});
}
var reviews = [
	{
		text: "Příjemné místo s milou obsluhou. Dobré zákusky a zmrzlina, venkovní posezení. Jídlo, obsluha i atmosféra na jedničku.",
		author: "Ondřej Hromádka Novák",
		source: "Google"
	},
	{
		text: "Velice elegantní a příjemná cukrárna. Krásně vybavený a čistý dětský koutek, možnost posadit se i venku. Oceňuji i nabídku bezkofeinové kávy.",
		author: "Michaela Klobásková",
		source: "Google"
	},
	{
		text: "Nádherná cukrárna, lotuskový dortík byl ten nejlepší dortík, co jsem kdy měla.",
		author: "Anna",
		source: "Google"
	},
	{
		text: "Velice příjemná kavárna/cukrárna. Čistý a vybavený dětský koutek, včetně venkovní trampolíny. Zákusky opravdu výborné, to samé platí i pro kávu.",
		author: "Dominik Todt",
		source: "Google"
	},
	{
		text: "Vynikající dorty, kafe i chlebíčky. Pěkné posezení uvnitř i venku. Jednoznačně doporučuji!",
		author: "Motor Flash",
		source: "Google"
	},
	{
		text: "Konečně modernější podnik ve Štětí. Dobré limonády a káva, milá a ochotná obsluha.",
		author: "Petr Šťastný",
		source: "Google"
	}
];
function Reviews() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "reference",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Reference",
				title: "Co říkají hosté",
				subtitle: "Hodnocení našich hostů z Googlu. Děkujeme za každé z nich."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: reviews.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "glass-card glass-card-hover relative h-full rounded-[1.4rem] p-8 sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "gold-text absolute right-6 top-2 font-display text-6xl leading-none opacity-60",
								children: "”"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1 text-[#c9a24b]",
								"aria-label": "Hodnocení 5 z 5",
								children: "★★★★★".split("").map((s, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s }, j))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
								className: "mt-5 text-base leading-relaxed text-foreground/80",
								children: r.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-6 text-sm text-muted-foreground",
								children: [
									"— ",
									r.author,
									" · ",
									r.source
								]
							})
						]
					})
				}, i))
			})]
		})
	});
}
function Quote() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative px-6 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tufted-velvet sheen relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border-2 border-[#c9a24b]/45 px-8 py-20 text-center shadow-[0_40px_90px_-40px_rgba(0,0,0,0.8)] sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.7rem] uppercase tracking-[0.45em] text-[#e9d9a8]/70",
					children: "Nicole’s Coffee"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "shimmer-text mx-auto mt-7 max-w-3xl font-display text-3xl leading-snug sm:text-5xl",
					children: "„Nejlepší chvíle voní kávou a chutnají po čerstvém dortu.”"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mx-auto mt-9 max-w-[9rem]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-7 max-w-xl text-sm leading-relaxed text-[#f4ead0]/70",
					children: "Poctivé suroviny, domácí receptury a klid, ve kterém si každé sousto vychutnáte. Malý luxus v srdci Štětí."
				})
			] })
		})
	});
}
var gallery = [
	{
		src: venecky_default,
		alt: "Domácí věnečky s karamelovou polevou a šlehačkou",
		h: "h-[30rem]"
	},
	{
		src: juice_default,
		alt: "Čerstvé ovocné fresh nápoje na mramorovém stolku",
		h: "h-[24rem]"
	},
	{
		src: pistachio_default,
		alt: "Pistáciový řez s růžovými plátky a šlehačkou",
		h: "h-[26rem]"
	},
	{
		src: cake_frozen_default,
		alt: "Dětský dort s ledovou princeznou na objednávku",
		h: "h-[32rem]"
	},
	{
		src: croissants_default,
		alt: "Plněné croissanty se šunkou, sýrem a zeleninou",
		h: "h-[22rem]"
	},
	{
		src: mini_passion_default,
		alt: "Mini dezerty s marakujou a malinou",
		h: "h-[24rem]"
	},
	{
		src: cake_minecraft_default,
		alt: "Dětský dort s motivem Minecraft na objednávku",
		h: "h-[30rem]"
	},
	{
		src: mini_blueberry_default,
		alt: "Borůvkový řez s čokoládovým dekorem",
		h: "h-[22rem]"
	},
	{
		src: mini_cacao_default,
		alt: "Čokoládový 70% dezert se zrcadlovou polevou",
		h: "h-[20rem]"
	},
	{
		src: burgers_default,
		alt: "Domácí burgery v sezamových houskách",
		h: "h-[26rem]"
	}
];
function Gallery() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const n = gallery.length;
	const go = (d) => setIndex((p) => (p + d + n) % n);
	const jump = (i) => setIndex(i);
	(0, import_react.useEffect)(() => {
		if (paused) return;
		if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const t = setInterval(() => setIndex((p) => (p + 1) % n), 4500);
		return () => clearInterval(t);
	}, [paused, n]);
	const current = gallery[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "galerie",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Galerie",
				title: "Chvíle u nás",
				subtitle: "Zákusky, dorty a dobroty, které od nás odcházejí."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group relative mx-auto mt-16 max-w-4xl",
				onMouseEnter: () => setPaused(true),
				onMouseLeave: () => setPaused(false),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[16/10] overflow-hidden rounded-[1.6rem] border-2 border-[#c9a24b]/40 bg-card shadow-[0_40px_90px_-40px_rgba(43,35,32,0.7)]",
					children: [
						gallery.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: g.src,
							alt: g.alt,
							loading: i === 0 ? "eager" : "lazy",
							className: "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
							style: {
								opacity: i === index ? 1 : 0,
								transform: i === index ? "scale(1)" : "scale(1.06)"
							}
						}, i)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(20,14,8,0.55),transparent_45%)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg text-[#f6ead1] duration-700 animate-in fade-in slide-in-from-bottom-2 sm:text-xl",
								children: current.alt
							}, index)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Předchozí",
							onClick: () => go(-1),
							className: "absolute left-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#c9a24b]/50 bg-black/35 text-[#f0dc9a] backdrop-blur transition-all hover:bg-black/55 hover:text-white sm:left-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
								className: "h-5 w-5",
								"aria-hidden": true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Další",
							onClick: () => go(1),
							className: "absolute right-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#c9a24b]/50 bg-black/35 text-[#f0dc9a] backdrop-blur transition-all hover:bg-black/55 hover:text-white sm:right-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								className: "h-5 w-5",
								"aria-hidden": true
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap items-center justify-center gap-2.5",
					children: gallery.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": `Zobrazit: ${g.alt}`,
						"aria-current": i === index,
						onClick: () => jump(i),
						className: `h-2.5 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-gradient-to-r from-[#c9a24b] to-[#f0dc9a]" : "w-2.5 bg-[#c9a24b]/35 hover:bg-[#c9a24b]/60"}`
					}, i))
				})]
			}) })]
		})
	});
}
function Kids() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "deti",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass-card relative overflow-hidden rounded-[1.8rem]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-0 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-10 sm:p-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.35em] text-muted-foreground",
								children: "Dětský koutek"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "gold-text mt-5 text-4xl leading-tight sm:text-5xl",
								children: "Rodinná kavárna"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-6 max-w-[7rem]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-7 text-base leading-relaxed text-foreground/75",
								children: "U nás si dáte kávu v klidu. Děti mají svůj koutek s hračkami a knížkami, na dosah od vašeho stolu — takže máte přehled a zároveň chvíli pro sebe."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base leading-relaxed text-foreground/75",
								children: "Rádi vidíme celé rodiny. A malý zákusek navíc se vždycky někde najde."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-72 lg:h-full lg:min-h-[26rem]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: kids_default,
							alt: "Dětský koutek s hračkami v prosvětlené kavárně",
							loading: "lazy",
							width: 1200,
							height: 700,
							className: "h-full w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(253,251,247,0.85),transparent_45%)] lg:block hidden" })]
					})]
				})
			}) })
		})
	});
}
var hours = [{
	d: "Pondělí – Pátek",
	t: "9:00 – 17:00"
}, {
	d: "Sobota – Neděle",
	t: "10:00 – 16:00"
}];
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		setSent(true);
		toast.success("Děkujeme! Ozveme se vám co nejdříve.");
		e.currentTarget.reset();
		setTimeout(() => setSent(false), 3e3);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "kontakt",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Kontakt",
				title: "Otevírací doba & kde nás najdete",
				subtitle: "Zastavte se na kávu, nebo nám napište — dorty rádi domluvíme podle vás."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card glass-card-hover h-full rounded-[1.4rem] p-8 sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "mt-1 h-5 w-5 shrink-0 text-[#c9a24b]",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl",
								children: "Adresa"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: [
									"Viničná 692",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"411 08 Štětí"
								]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule my-8" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
								className: "mt-1 h-5 w-5 shrink-0 text-[#c9a24b]",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl",
									children: "Otevírací doba"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-3 space-y-2 text-sm",
									children: hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between gap-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: h.d
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-medium tracking-wide",
											children: h.t
										})]
									}, h.d))
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule my-8" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://www.facebook.com/profile.php?id=61576350980109",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 rounded-full border border-[#c9a24b]/40 bg-white/70 px-5 py-2.5 text-sm transition-colors hover:border-[#c9a24b] hover:bg-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, {
									className: "h-4 w-4",
									"aria-hidden": true
								}), " Facebook"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://www.firmy.cz/detail/13941981-nicole-s-coffee-steti.html",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 rounded-full border border-[#c9a24b]/40 bg-white/70 px-5 py-2.5 text-sm transition-colors hover:border-[#c9a24b] hover:bg-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
									className: "h-4 w-4",
									"aria-hidden": true
								}), " Firmy.cz"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 overflow-hidden rounded-[1rem] border border-[#c9a24b]/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "Mapa – Nicole's Coffee, Viničná 692, Štětí",
								src: "https://maps.google.com/maps?q=Vini%C4%8Dn%C3%A1%20692%2C%20411%2008%20%C5%A0t%C4%9Bt%C3%AD&z=16&output=embed",
								className: "h-64 w-full border-0",
								loading: "lazy",
								referrerPolicy: "no-referrer-when-downgrade"
							})
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .12,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "glass-card glass-card-hover h-full rounded-[1.4rem] p-8 sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl",
								children: "Napište nám"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Objednávka dortu, rezervace nebo jen dotaz — ozveme se."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "name",
										className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
										children: "Jméno"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "name",
										name: "name",
										required: true,
										className: "mt-2 w-full rounded-xl border border-[#c9a24b]/30 bg-white/70 px-4 py-3 text-sm outline-none transition-all focus:border-[#c9a24b] focus:ring-2 focus:ring-[#c9a24b]/25"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "email",
										className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
										children: "E-mail"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "email",
										name: "email",
										type: "email",
										required: true,
										className: "mt-2 w-full rounded-xl border border-[#c9a24b]/30 bg-white/70 px-4 py-3 text-sm outline-none transition-all focus:border-[#c9a24b] focus:ring-2 focus:ring-[#c9a24b]/25"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "message",
										className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
										children: "Zpráva"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "message",
										name: "message",
										rows: 5,
										required: true,
										className: "mt-2 w-full resize-none rounded-xl border border-[#c9a24b]/30 bg-white/70 px-4 py-3 text-sm outline-none transition-all focus:border-[#c9a24b] focus:ring-2 focus:ring-[#c9a24b]/25"
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "gold-fill mt-8 w-full rounded-full px-8 py-3.5 text-sm font-medium tracking-wide text-[#2B2320] shadow-[0_18px_40px_-18px_rgba(179,135,40,0.8)] transition-transform duration-300 hover:scale-[1.02]",
								children: sent ? "Odesláno" : "Odeslat zprávu"
							})
						]
					})
				})]
			})]
		})
	});
}
var nav = [
	{
		href: "#o-nas",
		label: "O nás"
	},
	{
		href: "#nabidka",
		label: "Nabídka"
	},
	{
		href: "#menu",
		label: "Menu"
	},
	{
		href: "#galerie",
		label: "Galerie"
	},
	{
		href: "#deti",
		label: "Pro děti"
	},
	{
		href: "#reference",
		label: "Reference"
	},
	{
		href: "#kontakt",
		label: "Kontakt"
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "fixed inset-0 -z-10 bg-cover bg-center opacity-70",
				style: { backgroundImage: `url(${marble_bg_default})` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "fixed inset-0 -z-10 bg-[linear-gradient(180deg,rgba(253,251,247,0.82),rgba(248,246,242,0.94))]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "grain-overlay"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed inset-x-0 top-0 z-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-4 flex max-w-6xl items-center justify-between gap-6 rounded-full border border-[#c9a24b]/25 bg-white/55 px-5 py-2.5 backdrop-blur-xl sm:px-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#hero",
							"aria-label": "Nicole's Coffee — domů",
							className: "shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
								animated: false,
								className: "h-9 sm:h-10"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-7 md:flex",
							children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: n.href,
								className: "relative text-xs uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#c9a24b] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100",
								children: n.label
							}, n.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#kontakt",
							className: "gold-fill rounded-full px-4 py-2 text-[0.7rem] uppercase tracking-[0.15em] text-[#2B2320] md:px-5",
							children: "Navštivte nás"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Offer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kids, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reviews, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "tufted-velvet sheen relative mt-16 overflow-hidden border-t-2 border-[#c9a24b]/45",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 mx-auto max-w-6xl px-6 py-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "gold-text font-display text-3xl",
							children: "Nicole’s Coffee"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mx-auto mt-6 max-w-[10rem]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm text-[#f4ead0]/70",
							children: "Viničná 692, 411 08 Štětí · Po–Pá 9:00–17:00 · So–Ne 10:00–16:00"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex justify-center gap-4 text-xs uppercase tracking-[0.2em]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.facebook.com/profile.php?id=61576350980109",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "text-[#e9d9a8]/80 transition-colors hover:text-[#fcf6ba]",
									children: "Facebook"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#e9d9a8]/30",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.firmy.cz/detail/13941981-nicole-s-coffee-steti.html",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "text-[#e9d9a8]/80 transition-colors hover:text-[#fcf6ba]",
									children: "Firmy.cz"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 text-xs text-[#f4ead0]/45",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Nicole’s Coffee. Všechna práva vyhrazena."
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, { position: "top-center" })
		]
	});
}
//#endregion
export { Index as component };
