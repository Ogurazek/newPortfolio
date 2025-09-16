export default function GalaxyHero() {
    const icons = ["/React.svg", "/Nextjs.svg", "/tailwindcss2.svg", "/typescript.svg", "/github.svg"];

    return (
        <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-b text-white overflow-hidden">
            <div className="relative z-10 flex h-32 w-32 sm:h-48 sm:w-48 items-center justify-center rounded-full bg-blue-800 shadow-[0_0_60px_20px_rgba(59,130,246,0.5)]">
                <img className="object-contain w-32 h-32" src="/FotoSecondProfile.png" alt="" />
            </div>

            <div className="absolute top-5 left-1/2 -translate-x-1/2 flex gap-4 sm:gap-12">
                {icons.map((icon, i) => (
                    <div
                        key={i}
                        className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-neutral-900 shadow-lg p-4"
                    >
                        <img className="w-full h-full" src={icon} alt="Imagen Tecnologia" />
                    </div>
                ))}
            </div>

            <svg
                className="absolute inset-0 z-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                {icons.map((_, i) => {
                    const offset = (i - (icons.length - 1) / 2) * 10;
                    return (
                        <line
                            key={i}
                            x1="50%"
                            y1="50%"
                            x2={`${50 + offset}%`}
                            y2="15%"
                            stroke="rgba(59,130,246,0.5)"
                            strokeWidth="1.5"
                        />
                    );
                })}
            </svg>
        </div>
    );
}