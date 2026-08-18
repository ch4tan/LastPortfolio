import { useState, useEffect } from "react";

const TypingEffect = ({ text }) => {
    const [sen, setSen] = useState("");
    const speed = 40;

    useEffect(() => {
        setSen("");
        let i = 0;

        const interval = setInterval(() => {
            if (i < text.length) {
                const x = text[i];
                setSen(curr => curr + x);
                i++;
            } else clearInterval(interval);
            
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <div className="flex w-full lg:w-96 h-10 justify-center notranslate">
            <p id="textBox" className="flex lg:text-2xl w-96 text-white items-center">{sen}</p>
        </div>
    );
};

export default TypingEffect;