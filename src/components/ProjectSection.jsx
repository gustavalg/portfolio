export default function ProjectSection({ title, description, image, techIcons, github }) {
  return (
    <section id="projects" className="min-h-screen snap-start flex flex-col md:flex-row items-center justify-center bg-base-200 px-6 py-20 gap-12">
      <div className="flex-1 flex justify-center">
        <img
          src={image}
          alt="Projekt Screenshot"
          className="rounded-2xl shadow-2xl w-full max-w-[700px] max-h-[80vh] object-cover"
        />
      </div>

      <div className="flex-1 text-center md:text-left space-y-8">
        <h2 className="text-5xl md:text-7xl font-extrabold text-primary leading-tight">
          {title}
        </h2>

        <p className="text-lg md:text-xl text-base-content max-w-prose">
          {description}
        </p>

        <div className="flex flex-wrap gap-4">
          {techIcons.map((icon, idx) => (
            <div
              key={idx}
              className="p-2 bg-base-300 rounded-xl shadow-md w-14 h-14 flex items-center justify-center"
            >
              <img
                src={icon}
                alt="Tech Icon"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        <a
          href={github}
          target="_blank"
          className="btn btn-primary mt-6"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </div>
    </section>
  );
}
