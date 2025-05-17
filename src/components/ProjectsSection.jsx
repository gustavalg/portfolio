import ProjectSection from "./ProjectSection";
import chatty from "../assets/chatty_chat.png";
import reactIcon from "../assets/logos/react.svg";
import expressIcon from "../assets/logos/express.svg";
import nodeJSIcon from "../assets/logos/nodejs.svg";
import mongoDBIcon from "../assets/logos/mongodb.svg";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Chatty",
      description: "A real-time Web Messenger.",
      image: chatty,
      techIcons: [reactIcon, expressIcon, nodeJSIcon, mongoDBIcon],
      github: "https://github.com/gustavalg/chatty",
    },
    // Weitere Projekte hier
  ];

  return (
    <>
      {projects.map((project, idx) => (
        <ProjectSection key={idx} {...project} />
      ))}
    </>
  );
}
