import { Linkedin, FileUser, Github } from 'lucide-react';
import { CardTecnology } from './components/cardTecnology';
import { CardExperiences } from './components/cardExperience';
import GalaxyHero from './components/galaxyHero';
import { FeaturedProject, FeaturedProjectRight } from './components/projects';
import ContactForm from './components/contact';


export default function App() {
  return (
    <>
      <div className="relative max-w-[62.5rem] mx-auto mb-20">
        <section id='inicio' className="w-full min-h-screen flex flex-col-reverse items-center justify-between md:flex-row gap-10 md:gap-6 px-4">
          <div className="flex flex-col w-full md:w-auto p-4 sm:p-7 gap-6 text-center md:text-left">
            <div className="flex flex-col">
              <div className="flex justify-center md:justify-start flex-wrap">
                <strong className="font-bold text-4xl sm:text-5xl py-1">Hola,</strong>
                <strong className="font-bold text-4xl sm:text-5xl py-1 animated-text">&nbsp;soy Elías</strong>
              </div>
              <span className="font-bold animated-text-gray text-lg sm:text-xl">
                Desarrollador FrontEnd
              </span>
            </div>

            <div>
              <p className="text-base font-medium sm:text-lg">
                Construyo interfaces rápidas, accesibles y escalables. Me gusta trabajar con buenas prácticas, optimización y un diseño consistente. Siempre busco aportar soluciones claras a problemas reales.
              </p>

              <div className="w-full flex justify-center gap-6 sm:gap-8 mt-10 flex-wrap">
                <CardTecnology title={"LinkedIn"} url="https://www.linkedin.com/in/perezelias/" Icon={Linkedin} />
                <CardTecnology title={"Mi CV"} url="https://drive.google.com/file/d/144ShqsvY3LImXucNky7XhY5wfmNfL09R/view?usp=sharing" Icon={FileUser} />
                <CardTecnology title={"Github"} url="https://github.com/Ogurazek" Icon={Github} />
              </div>
            </div>
          </div>

          <div
            className="
      relative mt-20 md:mt-0
      w-[300px] sm:w-[400px] md:w-[500px] lg:w-[650px] xl:w-[800px] 
      h-auto md:h-[280px]
      transition-all duration-500 
      hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/50
    "
          >
            <img
              className="rounded-full w-full h-full object-cover relative z-10 p-1"
              src="portfolioImage.png"
              alt=""
            />
            <div className="absolute inset-0 rounded-full p-[4px] animated-border"></div>
          </div>
        </section>

        <div id='experiencia'></div>
        <section className="w-full min-h-screen flex flex-col gap-6 p-6 md:p-4 lg:p-0">
          <span className="text-4xl text-start font-bold">Experiencia</span>
          <div className='relative flex w-full h-full flex-col'>


            <CardExperiences
              title='Mentor de Programación'
              company='Informatorio Chaco'
              date='04/2025 - Presente'
              description='Me desempeño como mentor en un curso de desarrollo de software, donde acompaño a más de 100 estudiantes en su formación en programación. Brindo soporte en tecnologías como Python, Django, Tkinter y MySQL, fomentando tanto el aprendizaje teórico como la práctica. Además, doy clases prácticas, resuelvo dudas y guío a los alumnos en el desarrollo de sus proyectos, ayudándolos a aplicar lo aprendido en situaciones reales. Mi enfoque está en motivar, inspirar y potenciar las habilidades de cada estudiante para que logren crecer como desarrolladores/as y adquieran confianza en su camino profesional.'
            />
            <CardExperiences
              title='Desarrollador Frontend'
              company='Clidox'
              date='09/2024 - Presente'
              description='Encargado de desarrollar y mantener una plataforma de gestión médica utilizada por pacientes, médicos, secretarias y administradores, creando nuevas funcionalidades y optimizando flujos clave como la gestión de turnos (creación, edición, arrastre, eliminación y disponibilidad por rangos), la administración de consultorios con asignación de doctores y horarios, y la ampliación de perfiles y permisos según cada rol. También implementé landing pages y navegación contextual, mejoré la UI/UX con un enfoque mobile-first (incluyendo tooltips, mensajes contextuales y mejor visualización de listados), diseñé sidebars personalizados para cada tipo de usuario y aseguré una integración sólida con la API para consultorios, doctores y horarios, garantizando una experiencia fluida y coherente en toda la plataforma.'
            />

          </div>

        </section>

        <section id='tecnologias' className="w-full flex flex-col gap-6 scroll-mt-24">
          <div className='w-full flex justify-center'>
            <p className='flex text-4xl font-bold text-center'>Tecnologías</p>
          </div>
          <GalaxyHero />
        </section>

        <section className="w-full flex flex-col mt-50 md:gap-20">
          <span id='proyectos' className="text-4xl text-center">Proyectos</span>
          <FeaturedProject title='Freelance' title2='Clidox' description='Clidox es una plataforma de gestión médica que optimiza la experiencia de pacientes, médicos y personal administrativo. Participo en su desarrollo como freelance, implementando mejoras, nuevas funcionalidades y resolviendo problemas técnicos para asegurar un flujo eficiente de turnos y administración de consultas.' imgUrl='/projects/clidox.png'
            urlIcons={[
              { src: "/nextjsss.png", alt: "Next.js" },
              { src: "/tailwindcss2.svg", alt: "Tailwind CSS" },
              { src: "/typescript.svg", alt: "TypeScript" },
            ]}
            linkProject='https://clidox.com'
          />
          <div className='"w-full flex flex-col md:gap-20'>
            <FeaturedProjectRight title='Freelance' title2='Landing Page Karate' description='Desarrollé de manera freelance un sitio web informativo para un dojo de Karate, ofreciendo detalles sobre el dojo, inscripciones, torneos y actividades. El proyecto está construido con Next.js, y me encargué de diseñar y desarrollar la experiencia completa del sitio, asegurando una navegación clara y moderna para los usuarios.' imgUrl='/projects/proyectoKarate.webp'
              urlIcons={[
                { src: "/nextjsss.png", alt: "Next.js" },
                { src: "/css.svg", alt: "Tailwind CSS" },
                { src: "/typescript.svg", alt: "TypeScript" },
              ]}
              linkProject='https://page-karate.vercel.app'
            />
            <FeaturedProject title='Proyecto Personal' title2='Pasarela de Pago' description='Desarrollé una pasarela de pago segura que permite a los usuarios ingresar y validar datos de tarjetas de crédito, incluyendo número de tarjeta y código de seguridad. Además, integré una API para mostrar dinámicamente el precio de productos en Bitcoin, ofreciendo una experiencia de pago moderna y flexible.' imgUrl='/projects/ProyectoPasarelaPago.webp'
              urlIcons={[
                { src: "/React.svg", alt: "React" },
                { src: "/css.svg", alt: "CSS" },
              ]}
              linkProject='https://pasarelapago.vercel.app'
            />
          </div>
        </section>

        <section id='contacto' className="w-full flex flex-col mt-30 gap-6 py-20">
          <div className='w-full flex justify-center'>
            <p className='flex text-4xl font-bold text-center'>Contacto</p>
          </div>
          <ContactForm />
        </section>

      </div >
    </>
  );
}



