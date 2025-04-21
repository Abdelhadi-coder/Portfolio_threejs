import * as THREE from 'three'

const HeroLights = () => {
  return (
    <>
    <ambientLight intensity={0.2} />
        <directionalLight 
            position={[5, 3, 5]}
            intensity={1.2}
            castShadow
        />
        
    </>
  )
}

export default HeroLights