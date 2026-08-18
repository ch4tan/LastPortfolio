import Marquee from 'react-fast-marquee';

const PROFILES = [
  {
    name: "GitHub",
    url: "https://github.com/ch4tan",
    icon: "/github.png", // Icône en vert emerald
  },
  {
    name: "TryHackMe",
    url: "https://tryhackme.com/p/Ch4tan", // Exemple
    icon: "/thm2.jpg",
  },
  {
    name: "CodeWars",
    url: "https://www.codewars.com/users/Ch4tan",
    icon: "/codewars.png",
  },
];

const ProfileMarquee = () => {
  return (
    <div className="w-full lg:w-96 lg:max-w-4xl mx-auto py-6 notranslate">
      <Marquee
        speed={40}
        pauseOnHover={true}
        gradient={true}
        gradientColor="#090d16"
        gradientWidth={60}
      >
        <div className="flex items-center gap-12 pr-12">
          {PROFILES.map((profile, idx) => (
            <a
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group px-4 py-2 rounded-lg bg-slate-900/40 border border-slate-800/80 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 shadow-sm"
            >
              <img
                src={profile.icon}
                alt={profile.name}
                className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="font-mono text-sm text-slate-300 group-hover:text-emerald-400 font-bold transition-colors">
                {profile.name}
              </span>
            </a>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ProfileMarquee;