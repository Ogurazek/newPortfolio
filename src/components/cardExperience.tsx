import { BriefcaseBusiness } from "lucide-react";



export function CardExperiences({ description, title, date, company }: { description?: string; title?: string; date?: string; company?: string }) {
    return (
        <article className="w-full h-auto flex items-stretch">
            <div className="w-[40px] p-4 flex flex-col items-center justify-center gap-3">
                <div className="min-w-[32px] min-h-[32px] bg-gray-800 rounded-full flex justify-center items-center">
                    <BriefcaseBusiness className="w-5 h-5 text-white" />
                </div>
                <div className="w-[2px] flex-1 bg-gray-700"></div>
            </div>

            <main className="w-full h-auto p-4 flex flex-col gap-3">
                <header className="w-full h-auto flex flex-col justify-center">
                    <strong className="text-[20px] animated-text">{title} - <span className="animated-text-yellow">{company}</span></strong>
                    <span className="text-gray-300">{date}</span>
                </header>

                <p>{description}</p>
            </main>
        </article>
    );
}
