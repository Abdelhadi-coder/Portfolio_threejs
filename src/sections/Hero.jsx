import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import ManText from '../components/HeroModels/ManText'
import { words } from '../constants/index'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
        {
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: 'power2.inOut'
        },
    )
    })


  return (
    <section id="hero" className="relative overflow-hidden">
        {/* <div className='absolute top-0 left-0 z-10'> */}
            {/* <img src='/images/bg.png' alt='background' /> */}
        {/* </div> */}

        <div className='hero-layout'>
            {/* LEFT : HERO CONTENT */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>
                        <h1>
                            Une idée devient une
                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>

                        <h1>Moi je suis celui qui concrétise.</h1>
                        {/* <h1>Celui qui concrétise.</h1> */}
                        </div>
                        <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>Hello, c'est Abdel-hadi je suis developpeur web à EPITECH.</p>

                        <Button 
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="Voir mes projets"
                        />
                    </div>
            </header>
            {/* RIGHT : 3D MODEL */}
            <figure>
                <div className='hero-3d-layout'>
                    {/* <img src="../../public/images/photo-supp.png" alt="" /> */}
                    {/* <ManText /> */}
                    <HeroExperience />
                </div>
            </figure>
        </div>
    </section>
  )
}

export default Hero