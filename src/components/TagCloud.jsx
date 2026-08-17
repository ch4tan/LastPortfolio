import React, { useEffect, useRef, useState } from "react";
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

    const options = {
      radius: 200, 
      maxSpeed: "normal",
      initSpeed: "slow",
      direction: 135,
      keep: true,
    };

    TagCloud(container, MYTAGS, options);

    const handleContainerClick = (e) => {
      if (e.target && e.target.classList.contains("tagcloud--item")) {
        const skillName = e.target.innerText;
        setSelectedQuote(skillName); // Déclenche la mise à jour !
      }
    };

    container.addEventListener("click", handleContainerClick);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 justify-center items-center">
      <span ref={containerRef} className="text-emerald-400/90 font-bold lg:cursor-pointer" />
      <TypingEffect text={selectedQuote ? SKILL_DESCRIPTIONS[selectedQuote] : "Cliquez sur mes centres d'intérêt et mes compétences pour obtenir plus d'informations."} />
    </div>
  );
};

export default TagCloud3D;