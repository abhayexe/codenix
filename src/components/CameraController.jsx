import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { cameraTargets, defaultCamera } from "../data/cameraTargets";

export default function CameraController({ activeHotspot }) {
  const { camera, controls } = useThree();
  const isAnimating = useRef(false);

  useEffect(() => {
    if (!controls) return;

    // If no hotspot is active, return to default position
    if (!activeHotspot) {
      isAnimating.current = true;
      controls.enabled = false;

      gsap.to(camera.position, {
        x: defaultCamera.position[0],
        y: defaultCamera.position[1],
        z: defaultCamera.position[2],
        duration: 1.2,
        ease: "power2.inOut",
      });

      gsap.to(controls.target, {
        x: defaultCamera.lookAt[0],
        y: defaultCamera.lookAt[1],
        z: defaultCamera.lookAt[2],
        duration: 1.2,
        ease: "power2.inOut",
        onUpdate: () => {
          controls.update();
        },
        onComplete: () => {
          isAnimating.current = false;
          controls.enabled = true;
        },
      });
      return;
    }

    const target = cameraTargets[activeHotspot];
    if (!target) return;

    isAnimating.current = true;
    controls.enabled = false;

    const targetVector = {
      x: target.lookAt[0],
      y: target.lookAt[1],
      z: target.lookAt[2],
    };

    gsap.to(camera.position, {
      x: target.position[0],
      y: target.position[1],
      z: target.position[2],
      duration: 1.2,
      ease: "power2.inOut",
    });

    gsap.to(controls.target, {
      x: targetVector.x,
      y: targetVector.y,
      z: targetVector.z,
      duration: 1.2,
      ease: "power2.inOut",
      onUpdate: () => {
        controls.update();
      },
      onComplete: () => {
        isAnimating.current = false;
        controls.enabled = true;
      },
    });
  }, [activeHotspot, camera, controls]);

  return null;
}
