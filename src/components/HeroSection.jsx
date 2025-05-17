import portrait from "../assets/portrait.webp";

export default function HeroSection() {
  return (
    <section className="snap-start min-h-screen bg-base-100 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10">
      
      {/* Linker Bereich: Text & Buttons */}
      <div className="flex-1 text-center md:text-left space-y-6" data-aos="fade-down">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Hi, I'm <span className="text-primary">Gustav Ahlgrimm</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-primary">
          Computer Science Student at HPI
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
          <button
            className="btn btn-primary text-lg px-8 py-3"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              history.replaceState(null, "", " ");
            }}
          >
            Get In Touch
          </button>
          <button 
            className="btn btn-outline text-lg px-8 py-3"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              history.replaceState(null, "", " ");
            }}
          >
            View My Work
          </button>
        </div>
      </div>

      {/* Rechter Bereich: Bild */}
      <div className="flex-1 flex justify-center" data-aos="fade-left">
        <img
          src={portrait}
          alt="Profilbild"
          className="rounded-xl w-[300px] md:w-[440px] lg:w-[520px] shadow-xl object-cover"
        />
      </div>
    </section>
  );
}
