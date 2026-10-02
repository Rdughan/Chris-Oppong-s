import { tagline } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-[0.9rem] py-7" style={{ color: "#B9C4BB" }}>
      <div className="wrap flex flex-wrap gap-x-6 gap-y-2 justify-between">
        <span>&copy; {new Date().getFullYear()} Chris Oppong</span>
        <span className="font-serif not-italic" style={{ color: "#8FA096" }}>
          {tagline}
        </span>
        <span>Ghana</span>
      </div>
    </footer>
  );
}
