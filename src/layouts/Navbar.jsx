import { NavLink } from "react-router";
import { useState } from "react";

const Navbar = () => {
    const navContainerStyle = "flex flex-row w-full lg:w-96 h-12 bg-black items-center justify-center text-white rounded-br-xl rounded-xl gap-7 border-b border-r border-solid border-white";
    const navLinkDefaultStyle = "flex h-full w-1/3 justify-center items-center [@media(hover:hover)]:hover:text-emerald-800/90 [@media(hover:hover)]:hover:rotate-12";
    const selectedNavLinkStyle = "flex h-full w-1/3 justify-center items-center font-bold text-emerald-400/90";
    const pathName = window.location.pathname.replace(/[^A-Za-z0-9]/g, "");
    const allTabs = ["Accueil", "Competences", "Projets"];
    const [position, setPosition] = useState(allTabs.includes(pathName) ? pathName : "/");
    
    return (
        <nav className={navContainerStyle}>
            <NavLink 
                className={position === "/" ? selectedNavLinkStyle : navLinkDefaultStyle}
                to={"/"}
                onClick={() => setPosition("/")}
            >
                Accueil
            </NavLink>
            <NavLink 
                className={position === "Competences" ? selectedNavLinkStyle : navLinkDefaultStyle}
                to={"Competences"}
                onClick={() => setPosition("Competences")}
            >
                Compétences
            </NavLink>
            <NavLink 
                className={position === "Projets" ? selectedNavLinkStyle : navLinkDefaultStyle}
                to={"Projets"}
                onClick={() => setPosition("Projets")}
            >
                Projets
            </NavLink>
        </nav>
    );
};

export default Navbar;