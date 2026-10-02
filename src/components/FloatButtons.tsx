import { contact } from "../data/content";

export default function FloatButtons() {
  return (
    <div className="hidden max-[720px]:flex fixed right-4 bottom-4 z-30 flex-col gap-2.5 items-end">
      <a
        href={contact.whatsapp}
        aria-label="Message Chris on WhatsApp"
        className="bg-forest text-paper font-medium text-[0.95rem] px-[18px] py-3.5 rounded-full no-underline"
        style={{ boxShadow: "0 6px 18px rgba(16,35,28,.28)" }}
      >
        WhatsApp
      </a>
      <a
        href={`mailto:${contact.email}`}
        aria-label="Email Chris"
        className="bg-paper text-forest border-[1.5px] border-forest font-medium text-[0.95rem] px-[18px] py-3.5 rounded-full no-underline"
        style={{ boxShadow: "0 6px 18px rgba(16,35,28,.16)" }}
      >
        Email
      </a>
    </div>
  );
}
