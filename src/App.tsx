import { Linkedin, FileUser, Github } from 'lucide-react';
import { CardTecnology } from './components/cardTecnology';
import { CardExperiences } from './components/cardExperience';
import CardStack from './components/card-stack';
import { FeaturedProject, FeaturedProjectRight } from './components/projects';
import ContactForm from './components/contact';

const tecnologiesFrontEnd = [
  {
    title: "React",
    urlImage: "React.svg"
  },
  {
    title: "Next.js",
    urlImage: "nextjs2.svg"
  },
  {
    title: "TypeScript",
    urlImage: "typescript.svg"
  },
  {
    title: "JavaScript",
    urlImage: "javascript.svg"
  },
  {
    title: "TailwindCSS",
    urlImage: "tailwindcss2.svg"
  },
  {
    title: "CSS",
    urlImage: "css3.svg"
  },
  {
    title: "HTML",
    urlImage: "html5.svg"
  },
]
const tecnologiesBackend = [
  {
    title: "Python",
    urlImage: "python.svg"
  },
  {
    title: "Django",
    urlImage: "django.svg"
  },
  {
    title: "MySQL",
    urlImage: "mysql.svg"
  },
  {
    title: "PostgresSQL",
    urlImage: "postgresql.svg"
  },
]
const aprendiendo = [
  {
    title: "Vue.js",
    urlImage: "vuejs.svg"
  },
  {
    title: "Supabase",
    urlImage: "supabase.svg"
  },
  {
    title: "Nuxt.js",
    urlImage: "nuxtjs.svg"
  },
  {
    title: "Docker",
    urlImage: "docker.svg"
  },
]
const herramientas = [
  {
    title: "VSCode",
    urlImage: "vscode.svg"
  },
  {
    title: "npm",
    urlImage: "npm2.svg"
  },
  {
    title: "Git",
    urlImage: "git.svg"
  },
  {
    title: "Terminal",
    urlImage: "terminal2.png"
  },
]

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
                Construyo interfaces rápidas, accesibles y escalables. <span className='animated-text-yellow font-bold'>Me gusta trabajar con buenas prácticas, optimización y un diseño consistente.</span> Siempre busco aportar soluciones claras a problemas reales.
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

        <section id='experiencia' className="w-full min-h-screen flex flex-col justify-center gap-6 p-6 md:p-4 lg:p-0 mt-20 md:mt-0">
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




        <section id='tecnologias' className="w-full min-h-screen justify-center flex flex-col gap-6 scroll-mt-10 p-6 md:p-4 mt-20 md:mt-0">
          <span className="text-4xl text-start font-bold">Tecnologías</span>
          <p>A lo largo de mi <span className='animated-text-yellow font-bold'>recorrido profesional</span> fui incorporando herramientas y tecnologías que hoy <span className='animated-text-yellow font-bold'>forman parte de mi stack principal.</span> Las uso para desarrollar <span className='animated-text-yellow font-bold'>interfaces limpias, escalables y centradas en el usuario.</span></p>
          <div className='flex flex-wrap gap-12 justify-center items-center p-4'>
            <CardStack title='Frontend' tecnologies={tecnologiesFrontEnd} color='animated-text-purple' />
            <CardStack title='Backend' tecnologies={tecnologiesBackend} color='animated-text-soft' />
            <CardStack title='Aprendiendo' tecnologies={aprendiendo} color='animated-text-green' />
            <CardStack title='Herramientas' tecnologies={herramientas} color='animated-text-magenta' />
          </div>
        </section>



        <section className="w-full min-h-screen flex flex-col mt-30 md:gap-20 p-6 md:p-4">
          <div className='flex flex-col gap-6'>
            <span id='proyectos' className="text-4xl text-start font-bold scroll-mt-20 ">Proyectos</span>
            <p>Mis proyectos reflejan mi evolución como desarrollador. Desde experimentos técnicos hasta aplicaciones completas donde puse en práctica conceptos de <span className='animated-text-yellow font-bold'>diseño, performance y usabilidad.</span> Cada uno muestra una parte de mi proceso de aprendizaje y consolidación del stack.</p>
          </div>
          <FeaturedProject title='Freelance' title2='Dojo de Karate' description='Desarrollé de manera freelance un sitio web informativo para un dojo de Karate, ofreciendo detalles sobre el dojo, inscripciones, torneos y actividades. El proyecto está construido con Next.js, y me encargué de diseñar y desarrollar la experiencia completa del sitio, asegurando una navegación clara y moderna para los usuarios.' imgUrl='/projects/proyectoKarate.webp'
            urlIcons={[
              { src: "/nextjs2.svg", alt: "Next.js" },
              { src: "/css3.svg", alt: "CSS" },
              { src: "/typescript.svg", alt: "TypeScript" },
            ]}
            linkProject='https://page-karate.vercel.app'
          />
          <div className='"w-full flex flex-col md:gap-20'>
            <FeaturedProjectRight title='Proyecto Personal' title2='Clon YT Music' description='Desarrollé una aplicación web clon de YouTube Music, utilizando React, TypeScript. La interfaz fue construida con CSS Modules, logrando un diseño limpio y moderno.
La aplicación se conecta a una API de Podcasts, desde la cual obtiene y reproduce los audios en tiempo real, permitiendo al usuario explorar, reproducir y controlar la reproducción de manera fluida.' imgUrl='/projects/proyecto3.png'
              urlIcons={[
                { src: "/React.svg", alt: "React.js" },
                { src: "/css3.svg", alt: "CSS" },
                { src: "/typescript.svg", alt: "TypeScript" },
              ]}
              linkProject='https://podcast-player-ytmusic.vercel.app'
            />
            <FeaturedProject title='Proyecto Personal' title2='Pasarela de Pago' description='Desarrollé una pasarela de pago segura que permite a los usuarios ingresar y validar datos de tarjetas de crédito, incluyendo número de tarjeta y código de seguridad. Además, integré una API para mostrar dinámicamente el precio de productos en Bitcoin, ofreciendo una experiencia de pago moderna y flexible.' imgUrl='/projects/ProyectoPasarelaPago.webp'
              urlIcons={[
                { src: "/React.svg", alt: "React" },
                { src: "/css3.svg", alt: "CSS" },
                { src: "/typescript.svg", alt: "TypeScript" },
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




