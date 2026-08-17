import { useEffect, useRef, useState } from "react";
import TagCloud from "TagCloud";
import TypingEffect from "./TypingEffect";

const MYTAGS = [
  "React", "TypeScript", "C#", "Tailwind",
  "Node.js", "Rust", "Docker", "SQL",
  "JavaScript", "Git", "Python", "IA"
];

const SKILL_DESCRIPTIONS = {
  "React": "Conception d'interfaces web et mobiles modulaires, réactives et performantes.",
  "TypeScript": "Typage statique pour du code robuste, maintenable et auto-documenté en équipe.",
  "C#": "Développement orienté objet et exploitation de la puissance de l'écosystème .NET.",
  "JavaScript": "Mon langage de prédilection. Il excelle dans tout l'écosystème web.",
  "Tailwind": "Framework CSS utility-first pour designer des interfaces modernes très rapidement.",
  "Node.js": "Création de backends JavaScript/TypeScript rapides, légers et évolutifs.",
  "Rust": "Mon coup de cœur. Ultra rapide, performant et axé sur la sécurité mémoire.",
  "Docker": "Conteneurisation pour éviter les comportements inattendus d'une machine à l'autre.",
  "SQL": "Bases de données relationnelles : requêtes complexes, jointures et optimisation. Adaptabilité rapide à tous les SGBD.",
  "Git": "Gestion de version de code et collaboration. Un incontournable du quotidien.",
  "Python": "Le couteau suisse idéal pour automatiser n'importe quelle tâche très rapidement.",
  "IA": "Orchestration d'agents, prompting avancé et automatisation, tout en gardant une revue critique du code généré."
};

const TagCloud3D = () => {
  const containerRef = useRef(null);
  const [selectedQuote, setSelectedQuote] = useState("");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const getRadius = () => {
      const width = window.innerWidth;
      if (width < 480) return 130; 
      if (width < 768) return 160; 
      return 210;                  
    };

    const options = {
      radius: getRadius(), 
      maxSpeed: "normal",
      initSpeed: "slow",
      direction: 135,
      keep: true,
    };

    const tagCloudInstance = TagCloud(container, MYTAGS, options);

    const handleContainerClick = (e) => {
      if (e.target && e.target.classList.contains("tagcloud--item")) {
        const skillName = e.target.innerText;
        setSelectedQuote(skillName);
      }
    };

    container.addEventListener("click", handleContainerClick);

    const handleResize = () => {
      if (container) {
        container.innerHTML = "";
        TagCloud(container, MYTAGS, { ...options, radius: getRadius() });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("click", handleContainerClick);
      window.removeEventListener("resize", handleResize);
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-center items-center w-full overflow-hidden px-4 py-6">
      <div className="flex justify-center items-center min-h-[300px] sm:min-h-[400px] w-96 max-w-[320px] sm:max-w-none">
        <span 
          ref={containerRef} 
          className="text-emerald-400/90 font-bold cursor-pointer select-none [&_.tagcloud--item]:text-xs [&_.tagcloud--item]:sm:text-sm [&_.tagcloud--item]:hover:text-emerald-300" 
        />
      </div>
      <div className="w-full lg:max-w-md">
        <TypingEffect text={selectedQuote ? SKILL_DESCRIPTIONS[selectedQuote] : "Cliquez sur mes centres d'intérêt et mes compétences pour obtenir plus d'informations."} />
      </div>
    </div>
  );
};

export default TagCloud3D;