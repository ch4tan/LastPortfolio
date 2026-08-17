import React, { useState, useRef, useEffect } from "react";

const COMMANDS = {
  help: () => "Commandes disponibles : help, skills, whoami, clear",
  whoami: () => "sec-admin",
  skills: () => `
[+] CTF & Pratique   : Adepte des challenges TryHackMe (OSINT, PrivEsc, Reverse, Stegano).
[+] Sécurité App & API : Sensibilité OWASP Top 10, sanitization des entrées, CORS, Rate Limiting & ORM.
[+] Réseau & TLS     : Fonctionnement des proxies, certificats SSL/TLS et sécurisation des flux HTTPS.
[+] Veille Active    : Suivi quotidien de l'actualité cyber (Youtubers Cyber, ZDNet, analyse de failles & techniques de défense).
 `,
  clear: "CLEAR", 
};

const CyberTerminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "output", text: "=== CYBERSECURITY CONSOLE v1.0 ===" },
    { type: "output", text: 'Tape "help" ou "skills" pour commencer.' },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();
    if(!trimmedInput) return;

    if(trimmedInput === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const commandFn = COMMANDS[trimmedInput];
    let response = "";

    if (commandFn) response = typeof commandFn === "function" ? commandFn() : commandFn;
    else response = `Commande inconnue: "${trimmedInput}". Tape "help" pour voir la liste.`;

    setHistory((prev) => [
      ...prev,
      { type: "input", text: input },
      { type: "output", text: response },
    ]);

    setInput("");
  };

  return (
    <div className="w-96 lg:w-full max-w-lg overflow-hidden rounded-xl border border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.15)] bg-[#090d16] font-mono text-sm text-emerald-400">
        <div className="flex h-10 items-center gap-2 bg-slate-900 px-4 border-b border-emerald-500/20 select-none shrink-0">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs text-emerald-400/80">sec-admin@portfolio:~</span>
        </div>
        <div className="p-4 h-80 overflow-y-auto space-y-2 [scrollbar-gutter:stable]">
            { history.map((item, index) => (
                <div key={index} className="break-words">
                    {item.type === "input" ? (
                        <div className="flex items-center gap-2 text-emerald-300">
                            <span className="text-emerald-500 font-bold shrink-0 select-none">sec-admin@portfolio:~$</span>
                            <span className="break-all">{item.text}</span>
                        </div>
                    ) : (
                        <pre className="whitespace-pre-wrap break-words font-mono text-xs sm:text-sm pl-2 border-l-2 border-emerald-500/30 text-emerald-400/90">
                            {item.text}
                        </pre>
                    )}
                </div>
            )) }
            <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1 shrink-0">
            <span className="text-emerald-500 font-bold select-none shrink-0">sec-admin@portfolio:~$</span>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 min-w-0 bg-transparent text-white outline-none caret-emerald-400 font-mono"
                autoFocus
            />
            </form>
            <div ref={bottomRef} />
        </div>
    </div>
  );
};

export default CyberTerminal;