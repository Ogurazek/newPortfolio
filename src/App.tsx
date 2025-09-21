import { Linkedin, FileUser, Github } from 'lucide-react';
import { CardTecnology } from './components/cardTecnology';
import CardExperience from './components/cardExperience';
import GalaxyHero from './components/galaxyHero';
import { FeaturedProject, FeaturedProjectRight } from './components/projects';

export default function App() {
  return (
    <>
      <div className="relative w-[1000px] mb-20">
        <section className="w-full flex flex-col items-center justify-center md:flex-row">
          <div className="relative w-64 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full 
                            bg-blue-700 blur-3xl opacity-70 
                            w-[250px] h-[250px] mx-auto"></div>

            <img className="relative z-10" src="/FotoProfile.png" alt="" />
          </div>

          <div className="flex flex-col gap-6 ml-10">
            <div className="flex text-lg">
              <p>Hola! Soy</p>
              <p className="text-blue-400">&nbsp;Elías Perez👋</p>
            </div>
            <div>
              <span className="text-yellow-400">Un desarrollador frontend</span>
              <h1 className="text-4xl font-bold leading-snug">
                que juzga la app por <br /> su primera carga...
              </h1>
              {/* <span className="text-[10px]">porque la rapidez y claridad al iniciar la app refleja la calidad del producto</span> */}
            </div>
          </div>
        </section>
        <div className='w-full flex justify-center gap-8 mt-12'>
          <CardTecnology url='https://www.linkedin.com/in/elias-perez-frontend/' Icon={Linkedin} />
          <CardTecnology url='https://www.linkedin.com/in/elias-perez-frontend/' Icon={FileUser} />
          <CardTecnology url='https://www.linkedin.com/in/elias-perez-frontend/' Icon={Github} />
        </div>




        <section className="w-full flex flex-col mt-30 gap-2 p-6 rounded-lg">
          <p className='flex text-4xl font-bold'>Sobre mí</p>
          <p>
            Soy Desarrollador Front-End con experiencia en proyectos reales, donde trabajé con tecnologías como React, Next.js, TailwindCSS, TypeScript y Shadcn UI. Me apasiona construir interfaces modernas, accesibles y centradas en el usuario, siempre cuidando la calidad y la escalabilidad del código.

          </p>
        </section>
        <section className="w-full flex flex-col mt-50 gap-6">
          <span className="text-4xl text-start">Experiencia Profesional</span>
          <div className='relative flex w-full h-full flex-col gap-6'>
            <div className="absolute inset-0 rounded-full 
                            bg-blue-700 blur-3xl opacity-70 
                            w-[500px] h-[500px] mx-auto"></div>
            <CardExperience date='04/2025' title='Mentor en el Informatorio Chaco' description='Me desempeño como mentor en un curso de desarrollo donde acompaño a los estudiantes en su formación en programación. Brindo soporte en temas como Python, Django, Tkinter, MySQL, entre otros.
Además, dicto clases prácticas y estoy disponible para resolver dudas, guiarlos en sus proyectos y ayudarlos a aplicar lo aprendido de forma real y efectiva. Mi enfoque es facilitar el aprendizaje y motivar a cada estudiante a desarrollar su potencial como desarrollador/a.'/>
            <CardExperience date='04/2025' title='Desarrollador Frontend en Clidox' description='Formo parte de un equipo freelance multidisciplinario en el que desarrollamos Clidox, una
aplicación web que conecta a médicos y pacientes de manera ágil y eficiente.
Mi rol consiste en implementar componentes reutilizables y flujos interactivos con Next.js,
TypeScript, TailwindCSS y Shadcn UI, asegurando una navegación moderna, accesible e
intuitiva. Trabajo estrechamente con el equipo backend en la integración de APIs REST,
utilizando herramientas como SWR para manejo de datos, react-hook-form y zod para
validación de formularios, con foco en accesibilidad, performance y mantenibilidad del
código. '/>
          </div>


        </section>



        <section className="w-full flex flex-col mt-50 gap-6">
          <div className='w-full flex justify-center'>
            <p className='flex text-4xl font-bold text-center'>Tecnologías</p>
          </div>
          <GalaxyHero />
        </section>

        <section className="w-full flex flex-col gap-40 mt-20">
          <FeaturedProject title='Proyecto Personal' title2='Landing Page Karate' description='Este proyecto es un sitio web informativo sobre un dojo de Karate, diseñado para proporcionar detalles sobre el dojo, inscripciones, torneos y más. Está desarrollado utilizando Next.js 14 con React 18.' imgUrl='/projects/proyectoKarate.webp' />
          <FeaturedProjectRight title='Proyecto Personal' title2='Clon de YouTube Music' description='He desarrollado una aplicación clon de YouTube Music utilizando React y TypeScript, con el entorno de desarrollo Vite. La aplicación está conectada a una API de Podcasts para obtener los audios.' imgUrl='/projects/ProyectoYTMusic.webp' />
          <FeaturedProject title='Freelance' title2='Landing Page Karate' description='Este proyecto es un sitio web informativo sobre un dojo de Karate, diseñado para proporcionar detalles sobre el dojo, inscripciones, torneos y más. Está desarrollado utilizando Next.js 14 con React 18.' imgUrl='/projects/ProyectoPasarelaPago.webp' />
        </section>

      </div >
    </>
  );
}



