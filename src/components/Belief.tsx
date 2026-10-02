import Picture from "./Picture";
import { belief } from "../data/content";
import { images } from "../data/images";

export default function Belief() {
  return (
    <section className="band bg-ivory" aria-labelledby="belief-h">
      <div className="wrap">
        <figure className="m-0">
          <Picture
            jpg={images.belief.jpg}
            webp={images.belief.webp}
            width={images.belief.width}
            height={images.belief.height}
            alt={images.belief.alt}
            className="w-full aspect-[3/2] object-cover object-[50%_40%] rounded-sm"
          />
          <figcaption className="figcap">{belief.photoCaption}</figcaption>
        </figure>

        <div
          className="grid gap-5 items-start min-[860px]:grid-cols-[1.1fr_1fr] min-[860px]:gap-[72px]"
          style={{ marginTop: "clamp(36px,5vw,56px)" }}
        >
          <h2 id="belief-h" className="h2-base max-w-[16ch]">
            {belief.heading}
          </h2>
          <p className="lede">{belief.lede}</p>
        </div>
      </div>
    </section>
  );
}
