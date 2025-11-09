import { Linkedin, FileUser, Github } from 'lucide-react';
import { CardTecnology } from './components/cardTecnology';
import CardExperience from './components/cardExperience';
import GalaxyHero from './components/galaxyHero';
import { FeaturedProject, FeaturedProjectRight } from './components/projects';
import ContactForm from './components/contact';

export default function App() {
  return (
    <>
      <div className="relative max-w-[62.5rem] mx-auto mb-20">
        <section className="w-full min-h-screen flex flex-col-reverse items-center justify-between md:flex-row gap-10 md:gap-6 px-4">
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






        {/* <section className="w-full flex flex-col mt-30 gap-2 p-6 rounded-lg">
          <p className='flex text-4xl font-bold'>Sobre mí</p>
          <p>
            Soy Desarrollador Front-End con experiencia en React, Next.js, TailwindCSS, TypeScript. Me apasiona construir interfaces modernas, accesibles y centradas en el usuario, siempre cuidando la calidad y la escalabilidad del código.

            Actualmente busco nuevas oportunidades que me permitan seguir creciendo profesionalmente, aportar valor en equipos dinámicos y enfrentar desafíos que potencien mis habilidades como desarrollador.



          </p>
        </section> */}
        <div id='experiencia'></div>
        <section className="w-full flex flex-col mt-50 gap-6 p-6 md:p-4 lg:p-0">
          <span className="text-4xl text-start">Experiencia Profesional</span>
          <div className='relative flex w-full h-full flex-col gap-6'>
            <div className="absolute inset-0 rounded-full 
                            bg-blue-700 blur-3xl opacity-70 
                            max-w-[500px] h-[500px] mx-auto"></div>
            <CardExperience date='04/2025' title='Mentor en el Informatorio Chaco' description='Me desempeño como mentor en un curso de desarrollo de software, donde acompaño a más de 100 estudiantes en su formación en programación. Brindo soporte en tecnologías como Python, Django, Tkinter y MySQL, fomentando tanto el aprendizaje teórico como la práctica.

Además, doy clases prácticas, resuelvo dudas y guío a los alumnos en el desarrollo de sus proyectos, ayudándolos a aplicar lo aprendido en situaciones reales. Mi enfoque está en motivar, inspirar y potenciar las habilidades de cada estudiante para que logren crecer como desarrolladores/as y adquieran confianza en su camino profesional.'/>
            <CardExperience date='09/2024' title='Desarrollador Frontend en Clidox' description='Durante mi experiencia, participé en el desarrollo y mantenimiento de una plataforma de gestión médica, abordando la implementación de mejoras generales, resolución de errores y creación de nuevas funcionalidades orientadas a optimizar la experiencia de pacientes, médicos, secretarias y administradores. Entre mis tareas principales se incluyeron el desarrollo de módulos de gestión de turnos médicos con ABM desde calendario, edición, arrastrar y eliminación de turnos, así como la gestión de disponibilidad por rangos de fechas. La creación y administración de consultorios, integrando doctores y configurando horarios. La extensión de funcionalidades en perfiles y registros de usuarios. La implementación de landing pages y navegación contextual entre perfiles. La incorporación de mejoras en cuestionarios y gestión de pacientes archivados. El diseño de sidebars personalizados según rol con vistas adaptadas. Optimización de la UI/UX mediante responsive design bajo enfoque mobile first, tooltips, mensajes contextuales y mejoras visuales en listados, cards, y la integración de endpoints para consultorios, doctores y horarios, asegurando la correcta comunicación con la API.' />
          </div>

        </section>

        <section id='tecnologias' className="w-full flex flex-col mt-50 gap-6 scroll-mt-24">
          <div className='w-full flex justify-center'>
            <p className='flex text-4xl font-bold text-center'>Tecnologías</p>
          </div>
          <GalaxyHero />
        </section>

        <section className="w-full flex flex-col md:gap-20 mt-50">
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



