import { nav } from "../data/content";

export default function Nav() {
  return (
    <header
      className="sticky top-0 z-20 border-b border-border backdrop-blur-[8px]"
      style={{ backgroundColor: "rgba(252,251,247,.94)" }}
    >
      <div className="wrap flex items-center justify-between h-16">
        <a href="#top" className="font-serif text-[1.25rem] no-underline tracking-[-0.01em]">
          Chris Oppong
        </a>
        <nav aria-label="Primary" className="flex items-center gap-7 text-[0.95rem]">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden min-[720px]:inline text-muted no-underline hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-paper bg-forest px-4 py-[9px] rounded-md font-medium no-underline hover:bg-ink"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
