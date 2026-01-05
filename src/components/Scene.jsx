import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Room from "./Room";
import Hotspots from "./Hotspots";
import CameraController from "./CameraController";
import { defaultCamera } from "../data/cameraTargets";

export default function Scene({ onHotspotClick, activeHotspot }) {
  return (
    <Canvas
      shadows
      camera={{ position: defaultCamera.position, fov: 50 }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
    >
      <color attach="background" args={["#1a1a1a"]} />

      <Environment preset="apartment" />

      <ambientLight intensity={0.0} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.0}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      <Room />
      <Hotspots onHotspotClick={onHotspotClick} />

      <CameraController activeHotspot={activeHotspot} />
      <OrbitControls
        makeDefault
        minDistance={1.5}
        maxDistance={3}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={0}
        enableDamping
        dampingFactor={0.02}
      />
    </Canvas>
  );
}
