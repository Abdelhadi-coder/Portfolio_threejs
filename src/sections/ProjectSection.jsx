// import React from 'react'
// import { projects } from '../constants'

// const AnimatedProjects = () => {
//   return (
//     <div id="work" className='app-showcase'>
//         <div className='w-full'>
//         <div id='projects' className='showcaselayout'>
//             <div className='first-project-wrapper'>
//                 <div className='image-wrapper'>
//                     <img src="/images/projects/twitter.png" alt="twitter" />
//                 </div>
//                 <div className='text-content'>
//                     <h2>TweetAcadémie un projet en groupe ou nous avons recréer twitter</h2>
//                     <p className='text-white-50 md:text-xl'>
//                         Le projet devait être fait en 4 semaines en groupe de 4 en PHP, MySql, Tailwind, Javascript.
//                     </p>
//                 </div>
//             </div>
//             <div className='project-list-wrapper overflow-hidden'>
//                 <div className='project'>
//                     <div className='image-wrapper bg-[white]'>
//                         <img src="/images/projects/Intro.png" alt="Puissance 4" />
//                     </div>
//                     <h2>Maquette</h2>
//                 </div>
//                 <div className='project'>
//                     <div className='image-wrapper bg-[white]'>
//                         <img src="/images/projects/Responsive.png" alt="Puissance 4" />
//                     </div>
//                     <h2>Maquette Responsive</h2>
//                 </div>
//             </div>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default AnimatedProjects

import React, { useRef } from 'react'
import { projects } from '../constants'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
    const sectionRef = useRef(null);
    const projectRefs = useRef([]);

    useGSAP(() => {
        projectRefs.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.2 * (index + 1),
                    scrollTrigger:
                    {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1 }
        )
    }, [])

  return (
    <section id="work" ref={sectionRef}>
        <div id='projects' className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 m-7'>
            {projects.map((project, i) => (
                <div ref={(el) => projectRefs.current[i] = el} key={project.id} className='bg-white/8 backdrop-blur p-5 rounded-2xl shadow-lg'>
                    <img src={project.image} alt={project.title} className='rounded-xl mb-4' />
                    <h3 className='text-xl font-bold text-white-50'>{project.title}</h3>
                    <div className='text-content'>
                    <p className='text-white/70 mt-3'>{project.description}</p>
                    </div>
                </div>
            ))}   
        </div>
    </section>
  )
}

export default ProjectSection

{/* <section id="work" ref={sectionRef}>
<div id='projects' className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 m-7'>
    {projects.map((project, i) => (
        <div ref={(el) => projectRefs.current[i] = el} key={project.id} className='bg-white/10 backdrop-blur p-5 rounded-2xl shadow-lg'>
            <img src={project.image} alt={project.title} className='rounded-xl mb-4' />
            <h3 className='text-xl font-bold text-white-50'>{project.title}</h3>
            <div className='text-content'>
            <p className='text-white/70 mt-3'>{project.description}</p>
            </div>
        </div>
    ))}   
</div>
</section> */}