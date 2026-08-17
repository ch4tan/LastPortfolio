import { useState } from "react";
import TagCloud3D from "../components/TagCloud";
import TerminalCyber from "../components/TerminalCyber";
import ServerRack from "../components/Rack";

const Skills = () => {
    const inialCategoryMenuStyle = "hover:cursor-pointer";
    const selectedCategoryMenuStyle = "text-emerald-400/90";
    const [selector, setSelector] = useState("Dev");

    const renderContent = () => {
        switch (selector) {
            case "Dev":
                return (<TagCloud3D />);
            case "SysRes":
                return (<ServerRack />);
            case "Secu":
                return (<TerminalCyber />);
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col h-full w-full border-solid border-white items-center justify-center text-white">
            <menu className="flex fixed top-[10vh] w-96 gap-10 justify-center border-t-2 border-b-2 border-solid border-white ">
                <a 
                    className={selector === "Dev" ? selectedCategoryMenuStyle : inialCategoryMenuStyle}
                    onClick={() => setSelector("Dev")}
                >
                    Dev
                </a>
                <a
                    className={selector === "Secu" ? selectedCategoryMenuStyle : inialCategoryMenuStyle}
                    onClick={() => setSelector("Secu")}
                >
                    CyberSécurtité
                </a>
                <a
                    className={selector === "SysRes" ? selectedCategoryMenuStyle : inialCategoryMenuStyle}
                    onClick={() => setSelector("SysRes")}
                >
                    Systèmes & Réseaux
                </a>
            </menu>
            { renderContent() }
        </div>
    );
};

export default Skills;