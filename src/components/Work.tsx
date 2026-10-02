import { workItems } from "../data/content";

export default function Work() {
  return (
    <section className="band bg-ivory" id="work" aria-labelledby="work-h">
      <div className="wrap">
        <div className="mb-10 max-w-[60ch]">
          <h2 id="work-h" className="h2-base">
            The work
          </h2>
        </div>

        <div className="border-b border-border">
          {workItems.map((item) => (
            <article
              key={item.name}
              className="grid gap-2.5 py-[30px] border-t border-border min-[800px]:grid-cols-[0.8fr_1.3fr] min-[800px]:gap-12"
            >
              <h3 className="font-serif text-[1.65rem] leading-[1.15]">{item.name}</h3>
              <p className="max-w-[58ch]">
                {item.isPlaceholder ? <span className="todo">{item.description}</span> : item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
