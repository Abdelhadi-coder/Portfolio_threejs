import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive';
import { Planet } from './Planet.jsx'
import HeroLights from './HeroLights.jsx';

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});
    const isMobile = useMediaQuery({ query: '(max-width: 768px)'});

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 65 }}>
        <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxDistance={20}
            minDistance={15}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
        />
        <HeroLights />
        <group
          scale={isMobile? 0.7 : isTablet? 0.80 : 1}
          position={[0, -1.5, 0]}
          rotation={[0, -Math.PI /4, 0]}
        >


            <Planet />
        </group>
    </Canvas>
  )
}

export default HeroExperience