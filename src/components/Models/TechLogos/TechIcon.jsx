import { Environment, Float, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";

const TechIcon = ({ model }) => {
  const is3dModel = model.modelpath.endsWith(".glb");

  if (!is3dModel)
  {
    return (
      <div className="flex items-center justify-center h-[250px]">
      <img src={model.modelpath} alt={model.name} className="h-full object-contain" />
    </div>
    )
  }

    const scene = useGLTF(model.modelpath);
  return (
    <Canvas>
        <ambientLight intensity={0.3} />
        <Environment preset="city" />

        <Float speed={3} rotationIntensity={1.5} floatIntensity={0.9}>
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={scene.scene} />
            </group>
        </Float>
    </Canvas>
  )
}

export default TechIcon