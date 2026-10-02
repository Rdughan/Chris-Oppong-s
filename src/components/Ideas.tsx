import Picture from "./Picture";
import { ideas, contact } from "../data/content";
import { images } from "../data/images";

export default function Ideas() {
  return (
    <section className="band" id="ideas" aria-labelledby="ideas-h">
      <div className="wrap grid gap-10 items-center min-[860px]:grid-cols-[1.1fr_1fr] min-[860px]:gap-[72px]">
        <div className="[&>*+*]:mt-[22px]">
          <h2 id="ideas-h" className="h2-base">
            {ideas.heading}
          </h2>
          <p className="lede">{ideas.lede}</p>
          <p>
            <a href={contact.linkedin} className="btn btn-ghost">
              Read on LinkedIn
            </a>
          </p>
        </div>

        <figure className="m-0">
          <Picture
            jpg={images.ideas.jpg}
            webp={images.ideas.webp}
            width={images.ideas.width}
            height={images.ideas.height}
            alt={images.ideas.alt}
            className="w-full rounded-sm"
          />
          <figcaption className="figcap">{ideas.photoCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
