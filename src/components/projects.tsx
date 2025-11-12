import { MoveRight } from "lucide-react";

type Icon = {
    src: string;
    alt: string;
};

type Props = {
    title: string;
    title2: string;
    description: string;
    imgUrl: string;
    urlIcons: Icon[];
    linkProject?: string;
};

export function FeaturedProject({
    title,
    title2,
    description,
    imgUrl,
    urlIcons,
    linkProject,
}: Props) {
    return (
        <div
            className="relative flex flex-col tablet:flex-row items-center justify-between
      bg-gradient-to-br text-white shadow-lg gap-6 tablet:gap-8 p-6 min-h-[400px]"
        >
            <div className="relative tablet:h-[341px] tablet:max-w-lg z-10 mb-4 tablet:mb-0 text-center tablet:text-left">
                <h3 className="text-blue-400 font-semibold text-sm">{title}</h3>
                <h2 className="text-2xl tablet:text-3xl font-bold mb-1 truncate text-ellipse">
                    {title2}
                </h2>
                <div className="w-full flex gap-2 items-center justify-center tablet:justify-start">
                    {urlIcons.map((icon, index) => (
                        <div
                            key={index}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 shadow-lg p-1 hover:scale-110 transition-transform duration-300"
                        >
                            <img className="w-full h-full" src={icon.src} alt={icon.alt} />
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="relative w-auto tablet:w-[600px] h-[341px] rounded-xl overflow-hidden shadow-lg
        transform transition-transform duration-300 hover:translate-y-[-5px] hover:scale-105 hover:rotate-1 group"
            >
                <a href={linkProject} target="_blank" rel="noopener noreferrer">
                    <img
                        src={imgUrl}
                        alt="Project preview"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-md opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                        Ver proyecto
                        <MoveRight size={12} />
                    </div>
                </a>
            </div>

            <div
                className="relative w-full tablet:absolute tablet:top-1/3 tablet:left-0 tablet:max-w-[500px]
        p-4 tablet:p-6 rounded-xl text-white bg-gradient-to-r from-blue-800/20 to-blue-900/60
        backdrop-blur-md shadow-lg z-20 mt-4 tablet:mt-0 will-change-transform"
            >
                <p className="text-sm tablet:text-base leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

export function FeaturedProjectRight({
    title,
    title2,
    description,
    imgUrl,
    urlIcons,
    linkProject,
}: Props) {
    return (
        <div
            className="relative flex flex-col tablet:flex-row-reverse items-center justify-between
      bg-gradient-to-br text-white shadow-lg gap-6 tablet:gap-8 p-6 min-h-[400px]"
        >
            <div className="relative tablet:h-[341px] tablet:max-w-lg z-10 mb-4 tablet:mb-0 text-center tablet:text-left">
                <h3 className="text-blue-400 font-semibold text-sm">{title}</h3>
                <h2 className="text-2xl tablet:text-3xl font-bold mb-1">{title2}</h2>
                <div className="w-full flex gap-2 items-center justify-center tablet:justify-end">
                    {urlIcons.map((icon, index) => (
                        <div
                            key={index}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 shadow-lg p-1 hover:scale-110 transition-transform duration-300"
                        >
                            <img className="w-full h-full" src={icon.src} alt={icon.alt} />
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="relative tablet:w-[600px] h-[341px] rounded-xl overflow-hidden shadow-lg
        transform transition-transform duration-300 hover:translate-y-[-5px] hover:scale-105 hover:-rotate-1 group"
            >
                <a href={linkProject} target="_blank" rel="noopener noreferrer">
                    <img
                        src={imgUrl}
                        alt="Project preview"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-md opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                        Ver proyecto
                        <MoveRight size={12} />
                    </div>
                </a>
            </div>

            <div
                className="relative w-full tablet:absolute tablet:top-1/3 tablet:right-0 tablet:max-w-[500px]
        p-4 tablet:p-6 rounded-xl text-white bg-gradient-to-r from-blue-800/20 to-blue-900/60
        backdrop-blur-md shadow-lg z-20 mt-4 tablet:mt-0 will-change-transform"
            >
                <p className="text-sm tablet:text-base leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
