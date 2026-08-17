import TypingEffect from "../components/TypingEffect";
import ProfileMarquee from "../components/Marquee";

const Home = () => {
    return (
        <div className="flex flex-col gap-10 h-full w-full lg:pt-0 justify-end lg:justify-center items-center text-white text-2xl text-center">
            <TypingEffect text="Bienvenue sur mon portfolio !" />
            <div className="hidden lg:flex w-96 h-96 justify-end items-end bg-[url('/me4.PNG')] bg-no-repeat bg-cover" />
            <ProfileMarquee />
        </div>
    );
};

export default Home;