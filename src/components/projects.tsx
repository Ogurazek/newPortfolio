type Props = {
    title: string;
    title2: string;
    description: string;
    imgUrl: string;
}


export function FeaturedProject({ title, title2, description, imgUrl }: Props) {
    return (
        <div
            className="relative flex flex-col md:flex-row items-center justify-between 
            bg-gradient-to-br text-white shadow-lg gap-8 p-6 md:p-0"
            style={{ fontFamily: "'Roboto'" }}
        >
            {/* Texto */}
            <div className="relative md:h-[341px] md:max-w-lg z-10 mb-4 md:mb-0">
                <h3 className="text-blue-400 font-semibold text-sm">
                    {title}
                </h3>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {title2}
                </h2>
            </div>

            {/* Imagen */}
            <div className="relative md:w-[600px] h-[341px] rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 
                hover:translate-y-[-5px] hover:scale-105 hover:rotate-1">
                <img
                    src={imgUrl}
                    alt="Project preview"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Bloque blur */}
            <div
                className="relative w-full md:absolute md:top-1/3
                md:max-w-[500px] p-4 md:p-6 rounded-xl text-white 
                bg-gradient-to-r from-blue-800/20 to-blue-900/60 
                backdrop-blur-md shadow-lg z-20"
            >
                <p className="text-sm md:text-base">
                    {description}
                </p>
            </div>
        </div>
    );
}

export function FeaturedProjectRight({ title, title2, description, imgUrl }: Props) {
    return (
        <div
            className="relative flex flex-col md:flex-row items-center justify-between 
            bg-gradient-to-br text-white shadow-lg gap-8 p-6 md:p-0"
            style={{ fontFamily: "'Roboto'" }}
        >
            {/* Texto */}
            <div className="relative md:w-[600px] h-[341px] overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 
                hover:translate-y-[-5px] hover:scale-105 hover:rotate-1">
                <img
                    src={imgUrl}
                    alt="Project preview"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Bloque blur */}
            <div
                className="relative w-full md:absolute md:top-1/3 md:right-0
  md:max-w-[500px] p-4 md:p-6 rounded-xl text-white 
  bg-gradient-to-r from-blue-800/20 to-blue-900/60 
  backdrop-blur-md shadow-lg z-20"
            >
                <p className="text-sm md:text-base leading-relaxed">
                    {description}
                </p>
            </div>
            <div className="relative md:h-[341px] md:max-w-lg z-10 mb-4 md:mb-0">
                <h3 className="text-blue-400 font-semibold text-sm">
                    {title}
                </h3>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {title2}
                </h2>
            </div>

            {/* Imagen */}
        </div>
    );
}
