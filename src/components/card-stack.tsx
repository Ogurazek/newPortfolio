
type tecnologias = {
    title: string;
    urlImage: string;
}

type props = {
    title?: string;
    tecnologies?: tecnologias[];
    color?: string;
}


export default function CardStack({ title, tecnologies, color }: props) {
    return (
        <>
            <section className="w-[300px] h-[350px] bg-[#00101f] p-4 rounded-2xl">
                <header className="w-full h-auto flex justify-center items-center">
                    <p className={`text-4xl font-bold ${color}`}>{title}</p>
                </header>
                <div className="flex items-center justify-center flex-wrap px-2 py-8 gap-10">
                    {tecnologies?.map((tech) => (
                        <CardTecnology key={tech.title} urlImage={tech.urlImage} title={tech.title} />
                    ))}
                </div>
            </section>
        </>
    )
}


function CardTecnology({ urlImage, title }: { urlImage?: string; title?: string }) {
    return (
        <>
            <div className="max-w-[52px] max-h-[52px] flex flex-col items-center justify-center">
                <img className="w-[42px] h-[42px]" src={urlImage} alt={title} />
                <span className="text-sm">{title}</span>
            </div>
        </>
    )
}