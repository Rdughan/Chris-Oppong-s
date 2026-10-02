import Picture from "./Picture";
import { hero, contact } from "../data/content";
import { images } from "../data/images";

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      style={{
        paddingTop: "clamp(40px,7vw,88px)",
        paddingBottom: "clamp(64px,9vw,112px)",
      }}
    >
      <div className="wrap grid gap-12 items-center min-[900px]:grid-cols-[1.3fr_1fr] min-[900px]:gap-20">
        <div>
          <p className="kicker motion-safe:animate-rise">{hero.kicker}</p>
          <h1
            className="font-serif font-normal motion-safe:animate-rise"
            style={{
              fontSize: "clamp(2.55rem,1.5rem + 4.6vw,4.9rem)",
              lineHeight: 1.03,
              fontWeight: 350,
              letterSpacing: "-0.025em",
              textWrap: "balance",
            }}
          >
            {hero.heading}
          </h1>
          <p
            className="text-ink text-[1.15rem] motion-safe:animate-rise"
            style={{ margin: "28px 0 36px", animationDelay: ".12s" }}
          >
            {hero.lede}
          </p>
          <div
            className="flex flex-wrap gap-3 motion-safe:animate-rise"
            style={{ animationDelay: ".22s" }}
          >
            <a href="#work" className="btn">
              See the work
            </a>
            <a href={contact.whatsapp} className="btn btn-ghost">
              Message on WhatsApp
            </a>
            <a href={`mailto:${contact.email}`} className="btn btn-ghost">
              Email
            </a>
          </div>
        </div>

        <figure
          className="relative m-0 motion-safe:animate-rise"
          style={{ isolation: "isolate", animationDelay: ".3s" }}
        >
          <div
            aria-hidden="true"
            className="absolute bg-forest -z-10 w-[82%] h-[82%] [inset:auto_-14px_-14px_auto] min-[900px]:[inset:auto_-24px_-24px_auto]"
          />
          <Picture
            jpg={images.hero.jpg}
            webp={images.hero.webp}
            width={images.hero.width}
            height={images.hero.height}
            alt={images.hero.alt}
            loading="eager"
            fetchPriority="high"
            className="w-full rounded-sm aspect-[4/5] object-cover object-[50%_30%]"
          />
        </figure>
      </div>
    </section>
  );
}
