import { useRef, useEffect, useState } from "react";

export default function SectionDivider() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementMiddle = rect.top + rect.height / 2;

      const inMiddle =
        elementMiddle >= windowHeight * 0.2 &&
        elementMiddle <= windowHeight * 0.8;

      setActive(inMiddle);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // prüfen direkt nach Mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className="my-20 h-32 flex items-center justify-center">
      <div
        className={`transition-all duration-300 ease-in-out h-1 rounded-full bg-primary/50 ${
          active ? "w-4/5" : "w-1/2"
        }`}
      />
    </div>
  );
}
