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

export function FeaturedProject({ title, title2, description, imgUrl, urlIcons, linkProject }: Props) {
    return (
        <div
            className="relative flex flex-col md:flex-row items-center justify-between
      bg-gradient-to-br text-white shadow-lg gap-6 md:gap-8 p-6 min-h-[400px]"
        >
            <div className="relative md:h-[341px] md:max-w-lg z-10 mb-4 md:mb-0 text-center md:text-left">
                <h3 className="text-blue-400 font-semibold text-sm">{title}</h3>
                <h2 className="text-2xl md:text-3xl font-bold mb-1">{title2}</h2>
                <div className="w-full flex gap-2">
                    {urlIcons.map((icon, index) => (
                        <div
                            key={index}
                            className="flex h-10 w-10 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-neutral-900 shadow-lg p-1 hover:scale-110 transition-transform duration-300 overflow-hidden"
                        >
                            <img className="w-full h-full" src={icon.src} alt={icon.alt} />
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="relative md:w-[600px] h-[341px] rounded-xl overflow-hidden shadow-lg
        transform transition-transform duration-300 hover:translate-y-[-5px] hover:scale-105 hover:rotate-1"
            >
                <img src={imgUrl} alt="Project preview" className="w-full h-full object-cover" />
            </div>

            <div
                className="relative w-full md:absolute md:top-1/3 md:left-0 md:max-w-[500px]
        p-4 md:p-6 rounded-xl text-white bg-gradient-to-r from-blue-800/20 to-blue-900/60
        backdrop-blur-md shadow-lg z-20 mt-4 md:mt-0 will-change-transform"
            >
                <p className="text-sm md:text-base leading-relaxed">{description}<a className="ml-2 underline font-semibold" target="_blank" href={linkProject}>Visitar</a></p>
            </div>
        </div>
    );
}

export function FeaturedProjectRight({ title, title2, description, imgUrl, urlIcons, linkProject }: Props) {
    return (
        <div
            className="relative flex flex-col md:flex-row-reverse items-center justify-between
      bg-gradient-to-br text-white shadow-lg gap-6 md:gap-8 p-6 min-h-[400px]"
        >
            <div className="relative md:h-[341px] md:max-w-lg z-10 mb-4 md:mb-0 text-center md:text-left">
                <h3 className="text-blue-400 font-semibold text-sm">{title}</h3>
                <h2 className="text-2xl md:text-3xl font-bold mb-1">{title2}</h2>
                <div className="w-full flex gap-2 items-center justify-center md:justify-end">
                    {urlIcons.map((icon, index) => (
                        <div
                            key={index}
                            className="flex h-10 w-10 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-neutral-900 shadow-lg p-1 hover:scale-110 transition-transform duration-300 overflow-hidden"
                        >
                            <img className="w-full h-full" src={icon.src} alt={icon.alt} />
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="relative md:w-[600px] h-[341px] rounded-xl overflow-hidden shadow-lg
        transform transition-transform duration-300 hover:translate-y-[-5px] hover:scale-105 hover:rotate-1"
            >
                <img src={imgUrl} alt="Project preview" className="w-full h-full object-cover" />
            </div>

            <div
                className="relative w-full md:absolute md:top-1/3 md:right-0 md:max-w-[500px]
        p-4 md:p-6 rounded-xl text-white bg-gradient-to-r from-blue-800/20 to-blue-900/60
        backdrop-blur-md shadow-lg z-20 mt-4 md:mt-0 will-change-transform"
            >
                <p className="text-sm md:text-base leading-relaxed">{description}<a className="ml-2 underline font-semibold" target="_blank" href={linkProject}>Visitar</a></p>
            </div>
        </div>
    );
}
