import { Linkedin, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="snap-start min-h-screen w-full flex flex-col md:flex-row">
      {/* Linke Seite – große Überschrift */}
      <div className="flex-1 flex items-center justify-center bg-base-100 px-6">
        <h2 className="text-5xl md:text-7xl font-bold text-primary text-center md:text-left">
          Contact Me
        </h2>
      </div>

      {/* Rechte Seite – ein Drittel mit anderer Farbe */}
      <div className="w-full md:w-1/3 bg-base-200 flex items-center px-16 py-20">
        <div className="space-y-10">
          <a
            href="mailto:gustav@ahlgrimm.info"
            className="flex items-center gap-4 text-base-content hover:text-primary transition"
          >
            <Mail size={38} />
            <span className="text-xl">gustav@ahlgrimm.info</span>
          </a>

          <div className="flex items-center gap-4 text-base-content">
            <Phone size={38} />
            <span className="text-xl">+49 157 80743598</span>
          </div>

          <a
            href="www.linkedin.com/in/gustav-ahlgrimm-958313353"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-base-content hover:text-primary transition"
          >
            <Linkedin size={38} />
            <span className="text-xl">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
