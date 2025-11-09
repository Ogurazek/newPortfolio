


export default function CardExperience({ description, title, date }: { description?: string; title?: string; date?: string }) {
    return (
        <div className="relative z-10 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 rounded-[12px] shadow-lg p-6 flex gap-6 text-white mw-full border-t-2 border-blue-500">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-800 rounded-xl shadow-md">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-white"
                >
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.402 8.172L12 18.896l-7.336 3.869 1.402-8.172L.132 9.211l8.2-1.193z" />
                </svg>
            </div>
            <div className="flex-1">
                <h2 className="text-2xl font-bold">{title}</h2>
                <span className="text-gray-200">{date}</span>
                <p className="text-sm text-gray-300 mt-2 font-bold">
                    {description}
                </p>
            </div>
        </div>
    );
}