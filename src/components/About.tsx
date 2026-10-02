import { about, principles } from "../data/content";

export default function About() {
  return (
    <section className="band bg-ivory" id="about" aria-labelledby="about-h">
      <div className="wrap">
        <div className="[&>*+*]:mt-[22px] max-w-[62ch]">
          <h2 id="about-h" className="h2-base">
            {about.heading}
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="pull">{about.pullQuote}</p>
          <p>{about.closing}</p>
        </div>

        <div
          className="grid gap-0 border-t border-border min-[860px]:grid-cols-3 min-[860px]:gap-10 min-[860px]:border-t-0"
          style={{ marginTop: "clamp(48px,7vw,80px)" }}
        >
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="py-6 border-b border-border min-[860px]:border-b-0 min-[860px]:border-t-2 min-[860px]:border-t-gold min-[860px]:py-0 min-[860px]:pt-[22px]"
            >
              <h3 className="font-serif text-[1.4rem] mb-1.5">{principle.title}</h3>
              <p className="text-muted max-w-[44ch]">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
