import Picture from "./Picture";
import { impact, stats } from "../data/content";
import { images } from "../data/images";

export default function Impact() {
  return (
    <section className="band" id="impact" aria-labelledby="impact-h">
      <div className="wrap">
        <h2 id="impact-h" className="h2-base">
          {impact.heading}
        </h2>

        <div className="mt-10 grid gap-7 min-[700px]:grid-cols-3 min-[700px]:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={
                i === 0
                  ? "min-[700px]:pl-0 min-[700px]:pr-9"
                  : "min-[700px]:px-9 min-[700px]:border-l min-[700px]:border-border"
              }
            >
              <div className="stat-num">{stat.num}</div>
              <div className="stat-rule" />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <figure className="m-0 mt-10">
        <Picture
          jpg={images.impact.jpg}
          webp={images.impact.webp}
          width={images.impact.width}
          height={images.impact.height}
          alt={images.impact.alt}
          className="w-full aspect-[4/3] min-[860px]:aspect-[16/10] min-[860px]:max-h-[84vh] object-cover object-[50%_85%]"
        />
        <div className="wrap">
          <figcaption className="figcap">{impact.photoCaption}</figcaption>
        </div>
      </figure>

      <div className="wrap mt-9 grid gap-3 min-[860px]:grid-cols-2 min-[860px]:gap-[72px]">
        <p>{impact.note}</p>
      </div>
    </section>
  );
}
