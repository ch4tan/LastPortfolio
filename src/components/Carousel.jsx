import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const PROJECTS = {
  "TCXATOR": {
    "image": "/tcx.svg",
    "description": "Générez et personnalisez vos fichiers d'entraînement TCX pour Strava, Garmin et Coros en quelques clics.",
    "tags": ["JavaScript", "React", "Vercel"],
    "theme": "Dev",
    "link": "https://github.com/ch4tan/TCXATOR",
  },
  "CAPTCHApocalypse": {
    "image": "/captcha.png",
    "description": "Script d'automatisation en Python conçu pour tester la résilience et contourner les mécanismes de CAPTCHA.",
    "tags": ["Python", "Automation", "TryHackMe"],
    "theme": "CyberSécurité",
    "link": "https://github.com/ch4tan/CAPTCHApocalypse-THM",
  },
  "MEOWflow": {
    "image": "/catan.jpg",
    "description": "Outil de manipulation Base64 (multi-encodage / décodage en chaîne). Un gain de temps précieux en CTF.",
    "tags": ["JavaScript", "React", "Encode"],
    "theme": "CyberSécurité",
    "link": "https://github.com/ch4tan/MEOWFLOW-frontend",
  },
  "SouthPark Randomizer": {
    "image": "/cartman.png",
    "description": "Générateur d'épisodes aléatoires consommant une API REST. Idéal pour ne plus passer 20 minutes à choisir quoi regarder.",
    "tags": ["JavaScript", "React", "API"],
    "theme": "Dev",
    "link": "https://github.com/ch4tan/Randomizer-Episode-SouthPark",
  },
};

const ProjectCarousel = () => {
  const handleClick = link => {
    const nouvelOnglet = window.open(link, '_blank');
    if(nouvelOnglet) nouvelOnglet.opener = null;
  };

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false, // Continue de défiler même si l'utilisateur clique
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
      className="w-full max-w-5xl py-10 [--swiper-navigation-color:#10b981] [--swiper-pagination-color:#10b981]"
    >
      {Object.entries(PROJECTS).map(([title, project]) => (
        <SwiperSlide 
          key={title} // Important pour React : clé unique
          className="w-72 sm:w-96 bg-[#090d16] rounded-xl overflow-hidden border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)] flex flex-col group transition-all duration-300 hover:border-emerald-500/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]"
        >
          <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-emerald-500/20">
            <img 
              src={project.image}
              alt={title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out" 
            />
            <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-slate-950/80 border border-emerald-500/40 rounded-full backdrop-blur-md">
              {project.theme}
            </span>
          </div>
          <div className="p-5 flex flex-col flex-1 justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                {title}
              </h3>
              <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <button 
              onClick={() => handleClick(project.link)}
              className="w-full mt-1 py-2.5 px-4 flex items-center justify-center gap-2 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 font-mono text-xs font-bold rounded-lg border border-emerald-500/30 transition-all duration-200"
            >
              <span>Lien vers Github</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectCarousel;