import jsIcon from "../assets/skill_logos/js.svg";
import pythonIcon from "../assets/skill_logos/python.svg";
import cIcon from "../assets/skill_logos/c.svg";
import cppIcon from "../assets/skill_logos/cpp.svg";
import arduinoIcon from "../assets/skill_logos/arduino.svg";
import sqlIcon from "../assets/skill_logos/sql.svg";
import tsIcon from "../assets/skill_logos/ts.svg";

import { useEffect, useRef, useState } from "react";

const skills = [
  { icon: cppIcon, alt: "C++", level: 90 },
  { icon: cIcon, alt: "C", level: 90 },
  { icon: pythonIcon, alt: "Python", level: 70 },
  { icon: arduinoIcon, alt: "ArduinoIDE", level: 95 },
  { icon: jsIcon, alt: "JavaScript", level: 70 },
  { icon: sqlIcon, alt: "PostgreSQL", level: 60 },
  { icon: tsIcon, alt: "TypeScript", level: 60 },
];

export default function SkillsSection() {
  const refs = useRef([]);
  const [activeStates, setActiveStates] = useState(
    new Array(skills.length).fill(false)
  );

  useEffect(() => {
    const elements = [...refs.current];

    const observers = elements.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setActiveStates((prev) => {
            const newStates = [...prev];
            newStates[index] = entry.isIntersecting;
            return newStates;
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && elements[index]) {
          observer.unobserve(elements[index]);
        }
      });
    };
  }, []);

  return (
    <section className="h-screen snap-start bg-base-100 px-6 py-20" >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 h-full">

        {/* Farbkasten (wie linkes Bild) */}
        <div className="flex-1 flex items-center justify-center h-full">
          <div className="bg-primary/90 text-base-100 w-full h-[90%] rounded-xl p-6 flex items-center justify-center shadow-lg">
            <h2 className="text-5xl md:text-7xl font-bold text-center leading-tight">
              Programming<br />Languages <br />& Skills
            </h2>
          </div>
        </div>

        {/* Rechter Balkenteil */}
        <div className="flex-1 flex flex-col justify-evenly h-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              className="group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={skill.icon}
                    alt={skill.alt}
                    className="w-full h-full object-contain"
                    title={skill.alt}
                  />
                </div>
              </div>

              <div className="w-full bg-base-200 rounded-full h-6 overflow-hidden group">
                <div
                  className="h-6 bg-base-content rounded-full transition-all duration-700 ease-in-out origin-left group-hover:scale-x-[1.03]"
                  style={{
                    width: activeStates[index] ? `${skill.level}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
