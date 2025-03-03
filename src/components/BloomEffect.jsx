import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

export function BloomEffect() {
  const { scene } = useThree();

  useEffect(() => {
    // Prevent tone mapping from dimming emissive parts
    scene.traverse((obj) => {
      if (obj.material) {
        obj.material.toneMapped = false;
      }
    });
  }, [scene]);

  return (
    <EffectComposer>
      <Bloom
        mipmapBlur
        intensity={2.5}         // How strong the bloom effect is
        radius={0.5}           // Spread of the glow
        luminanceThreshold={0} // Lower means more glow
        luminanceSmoothing={0.9} // Smooth edges
      />
    </EffectComposer>
  );
}
