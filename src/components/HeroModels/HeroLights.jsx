import * as THREE from 'three'

const HeroLights = () => {
  return (
    <>
    <ambientLight intensity={0.3} />
        <directionalLight 
            position={[5, 3, 5]}
            intensity={1.4}
            castShadow
        />
        
    </>
  )
}

export default HeroLights