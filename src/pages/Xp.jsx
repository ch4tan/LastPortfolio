import ProjectCarousel from "../components/Carousel";

const Xp = () => {
    return (
        <div className="flex flex-col h-full w-full border-solid border-white items-center justify-center text-white">
            <div className="flex flex-col w-full lg:w-96 h-[30rem]">
                <ProjectCarousel />
            </div>
        </div>
    );
};

export default Xp;