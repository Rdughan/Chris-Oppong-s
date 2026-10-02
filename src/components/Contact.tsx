import { contactSection, contact } from "../data/content";

export default function Contact() {
  return (
    <section
      className="band dark bg-forest text-ivory"
      id="contact"
      aria-labelledby="contact-h"
    >
      <div className="wrap">
        <h2 id="contact-h" className="h2-base max-w-[18ch]" style={{ fontWeight: 350 }}>
          {contactSection.heading}
        </h2>
        <p className="max-w-[60ch]" style={{ color: "#D5DDD3", margin: "22px 0 34px" }}>
          {contactSection.lede}
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={contact.whatsapp} className="btn">
            Message on WhatsApp
          </a>
          <a href={contact.linkedin} className="btn btn-ghost">
            Connect on LinkedIn
          </a>
          <a href={`mailto:${contact.email}`} className="btn btn-ghost">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
