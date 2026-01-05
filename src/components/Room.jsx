import { useGLTF } from "@react-three/drei";

export default function Room() {
  const { scene } = useGLTF("/Room.glb");

  return <primitive object={scene} scale={1} position={[0, 0, 0]} />;
}

useGLTF.preload("/Room.glb");
