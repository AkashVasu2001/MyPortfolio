import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

// Function to apply bloom to emissive objects
function setBloomLayer(obj) {
  obj.layers.enable(1); // Bloom layer
  if (obj.children) obj.children.forEach((child) => setBloomLayer(child));
}

const Model = (props) => {
    const ref = useRef();
    const targetRotation = useRef({ x: 0, y: 0 });
  const floatingOffset = useRef(0); // Keeps track of smooth floating motion

  useFrame(({ clock, mouse }) => {
    // Smooth floating effect
    floatingOffset.current = THREE.MathUtils.lerp(floatingOffset.current, Math.sin(clock.elapsedTime * 0.5) * 0.2, 0.02);
    ref.current.position.y = floatingOffset.current;

    // Smooth mouse movement
    targetRotation.current.x = mouse.y * 0.3;
    targetRotation.current.y = mouse.x * 0.3;

    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, targetRotation.current.x, 0.05);
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetRotation.current.y, 0.05);
  });
      
  const { scene } = useGLTF("/NeonGenerator-transformed.glb");

  useEffect(() => {
    setBloomLayer(scene); // Apply bloom layer to neon parts
  }, [scene]);

  return <primitive ref={ref} object={scene} {...props} />;
};

export { Model }; // ✅ Ensure it is exported correctly
