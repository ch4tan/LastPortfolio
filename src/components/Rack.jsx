import { useState } from 'react';

const SERVERS = [
  {
    id: 'srv-1',
    unit: '1U',
    name: 'SYS-ADMIN & OS',
    status: 'ONLINE',
    ip: '192.168.1.10',
    tags: ['Windows Server', 'Linux', 'Active Directory', 'Hardware PC', 'VBA / Office'],
    description: 'Gestion des systèmes d\'exploitation, administration d\'annuaire AD, support matériel approfondi et bureautique avancée.'
  },
  {
    id: 'srv-2',
    unit: '1U',
    name: 'AUTOMATION & DEPLOY',
    status: 'ONLINE',
    ip: '192.168.1.20',
    tags: ['PowerShell', 'BASH', '.NET', 'Déploiement', 'Routines'],
    description: 'Scripting système pour l\'automatisation des tâches répétitives, développement de routines et déploiement applicatif.'
  },
  {
    id: 'srv-3',
    unit: '1U',
    name: 'NETWORK & VIRTUALIZATION',
    status: 'ONLINE',
    ip: '192.168.1.30',
    tags: ['TCP/IP', 'Virtualisation', 'Protopack', 'Routing', 'Security'],
    description: 'Maîtrise des couches réseau TCP/IP, création et gestion d\'environnements virtualisés, sensibilité élevée à la sécurité.'
  },
  {
    id: 'srv-4',
    unit: '1U',
    name: 'DATA & STORAGE',
    status: 'ONLINE',
    ip: '192.168.1.40',
    tags: ['SQL', 'Bases de données', 'Sauvegardes', 'Hardening'],
    description: 'Administration des bases de données relationnelles, gestion du stockage et politique de sécurisation des données.'
  }
];

const ServerRack = () => {
  const [activeServer, setActiveServer] = useState(SERVERS[0]);

  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-start font-mono text-slate-200">
      <div className="md:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-2xl relative">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>RACK-INFRA-01 [4U]</span>
          </div>
          <span>DATACENTER LOCAL</span>
        </div>
        <div className="space-y-3 relative pl-4 pr-4 border-x border-slate-800/60">
          {SERVERS.map((server) => {
            const isSelected = activeServer.id === server.id;
            return (
              <button
                key={server.id}
                onClick={() => setActiveServer(server)}
                className={`w-full text-left transition-all duration-200 group relative flex items-center justify-between p-3 rounded-lg border ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.15)] translate-x-1'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div className="absolute -left-3 flex flex-col gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700 border border-slate-900" />
                </div>
                <div className="flex items-center gap-3">
                  <div className={`h-2.5 w-2.5 rounded-full ${
                    isSelected ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-emerald-800'
                  }`} />
                  <div className={`w-3 h-3 rounded-sm border ${
                    isSelected ? 'border-emerald-400 bg-emerald-950' : 'border-slate-700 bg-slate-800'
                  }`} />
                  <div>
                    <div className="text-xs font-bold text-slate-100 flex items-center gap-2">
                      <span>{server.name}</span>
                      <span className="text-[10px] text-slate-500">[{server.unit}]</span>
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">{server.ip}</div>
                  </div>
                </div>
                <div className="hidden sm:flex gap-1 items-center opacity-40 group-hover:opacity-70 transition-opacity">
                  <div className="w-12 h-4 border-y border-slate-700 flex justify-between items-center px-1">
                    <div className="w-0.5 h-3 bg-slate-600" />
                    <div className="w-0.5 h-3 bg-slate-600" />
                    <div className="w-0.5 h-3 bg-slate-600" />
                    <div className="w-0.5 h-3 bg-slate-600" />
                  </div>
                  <span className="text-[10px] text-emerald-500 font-bold">{server.status}</span>
                </div>
                <div className="absolute -right-3 flex flex-col gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700 border border-slate-900" />
                </div>
              </button>
            );
          })}
        </div>
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex justify-between text-[10px] text-slate-400">
          <span>STATUS: ALL SYSTEMS NOMINAL</span>
          <span>UPTIME: 99.99%</span>
        </div>
      </div>
      <div className="md:col-span-5 bg-slate-900/90 p-5 rounded-xl border border-slate-800 h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <div>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Fiche Serveur</span>
              <h3 className="text-base font-bold text-white">{activeServer.name}</h3>
            </div>
            <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] rounded">
              {activeServer.ip}
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            {activeServer.description}
          </p>
          <div className="space-y-2">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">Modules & Technologies:</span>
            <div className="flex flex-wrap gap-1.5">
              {activeServer.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-800 border border-slate-700/80 rounded text-xs text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>SSH Connection</span>
          <span className="text-emerald-400">Port 22 [OPEN]</span>
        </div>
      </div>
    </div>
  );
};

export default ServerRack;