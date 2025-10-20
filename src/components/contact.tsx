import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

function ContactFormInner() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [recaptchaReady, setRecaptchaReady] = useState(false);
    const { executeRecaptcha } = useGoogleReCaptcha();

    useEffect(() => {
        if (executeRecaptcha) setRecaptchaReady(true);
    }, [executeRecaptcha]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!executeRecaptcha) {
            toast.error("Recaptcha aún no cargado, intenta recargar la página");
            return;
        }

        const token = await executeRecaptcha("contact_form");

        const dataWithToken = { ...formData, recaptchaToken: token };

        toast.promise(
            emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
                dataWithToken,
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
                        disabled={!recaptchaReady}
                        className="bg-blue-400 text-black font-bold px-6 py-2 rounded-md hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Enviar mensaje
                    </button>

                    {!recaptchaReady && (
                        <p className="text-xs text-gray-400 mt-1">
                            Cargando protección reCAPTCHA...
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default function ContactForm() {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
            <ContactFormInner />
        </GoogleReCaptchaProvider>
    );
}
