import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav
            className="p-4 w-full flex justify-end items-center "
            style={{ fontFamily: "'Preahvihear', sans-serif" }}
        >
            <div className="md:p-20 p-0"></div>
            <ul className="hidden md:flex space-x-6 mr-10 fixed p-6 top-4 right-4 z-30 bg-gradient-to-r from-blue-800/10 to-blue-900/20
        backdrop-blur-md rounded-bl-4xl">
                <li>
                    <a href="#experiencia" className="text-white hover:text-blue-400">
                        Experiencia
                    </a>
                </li>
                <li>
                    <a href="#tecnologias" className="text-white hover:text-blue-400">
                        Tecnologías
                    </a>
                </li>
                <li>
                    <a href="#proyectos" className="text-white hover:text-blue-400">
                        Proyectos
                    </a>
                </li>
                <li>
                    <a href="#contacto" className="text-white hover:text-blue-400">
                        Contacto
                    </a>
                </li>
            </ul>
            <div className="p-10"></div>
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-white mr-4 fixed z-30 g-gradient-to-r from-blue-800/20 to-blue-900/30
        backdrop-blur-md rounded-bl-4xl p-2"
            >
                {open ? <X size={28} /> : <Menu size={28} />}
            </button>
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-blue-800/10 to-blue-900/20
        backdrop-blur-md shadow-lg p-6 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"} z-30`}
            >
                <button onClick={() => setOpen(false)} className="mb-6 text-white">
                    <X size={28} />
                </button>
                <ul className="flex flex-col gap-6 text-white">
                    <li>
                        <a href="#experiencia" onClick={() => setOpen(false)} className="hover:text-blue-400">
                            Experiencia
                        </a>
                    </li>
                    <li>
                        <a href="#contacto" onClick={() => setOpen(false)} className="hover:text-blue-400">
                            Contacto
                        </a>
                    </li>
                    <li>
                        <a href="#tecnologias" onClick={() => setOpen(false)} className="hover:text-blue-400">
                            Tecnologías
                        </a>
                    </li>
                    <li>
                        <a href="#proyectos" onClick={() => setOpen(false)} className="hover:text-blue-400">
                            Proyectos
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
