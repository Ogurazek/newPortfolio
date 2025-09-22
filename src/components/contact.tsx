import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        toast.promise(
            emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
            ),
            {
                loading: "Enviando mensaje...",
                success: "Mensaje enviado correctamente 🎉",
                error: "Hubo un error al enviar el mensaje 😢",
            }
        );

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    return (
        <div className="flex items-center justify-center px-6">
            <div className="w-full max-w-lg text-white">
                <p className="text-gray-300 mb-8 text-center">
                    Estoy abierto a nuevas oportunidades, proyectos interesantes o
                    simplemente una charla. ¡Hablemos!
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Nombre"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 bg-transparent border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Apellido"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 bg-transparent border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-transparent border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <textarea
                        name="message"
                        placeholder="Escribe tu mensaje aquí..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 py-2 bg-transparent border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <button
                        type="submit"
                        className="bg-blue-400 text-black font-bold px-6 py-2 rounded-md hover:bg-blue-500 transition-colors"
                    >
                        Enviar mensaje
                    </button>
                </form>
            </div>
        </div>
    );
}
