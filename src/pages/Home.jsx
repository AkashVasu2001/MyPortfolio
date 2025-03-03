import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "../components/Model";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import { BloomEffect } from "../components/BloomEffect";
import * as THREE from "three";

export const Home = () => {
  const Loader = () => {
    return (
      <Html center>
        <div className="flex flex-col items-center">
          <p className="text-cyan-400 text-3xl font-semibold neon-glow">Loading...</p>
          <div className="loader mt-2"></div> 
        </div>
      </Html>
    );
  };
  
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col font-helvetica items-center bg-black justify-center relative"
    >
      <Canvas
        shadows
        style={{ width: "100vw", height: "100vh" }}
        camera={{ position: [0, 0, 40], fov: 20 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ReinhardToneMapping,
          toneMappingExposure: 1.5,
        }}
        className="absolute top-0 left-0 w-full h-full z-0"

      >
        <Suspense fallback={<Html><Loader /></Html>}>
          {/* Controls */}
          {/* <OrbitControls /> */}

          {/* Lighting */}
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <ambientLight intensity={0.3} />
          <Environment preset="city" />

          {/* Model */}
          <Model position={[0, 0, 0]} />

          {/* Apply Bloom Effect */}
          <BloomEffect />
        </Suspense>
      </Canvas>

      {/* Text Overlay */}
      <div className="text-center text-zinc-50 text-6xl drop-shadow-lg font-englisch-light-italic leading-tight tracking-tighter opacity-75 select-none absolute z-10 bottom-5">
        <p className="z-10">I`m Akash,</p>
        <p>
          a{" "}
          <span className="relative hover:text-emission">
            <span className="relative text-cyan-400 italic opacity-90 hover:brightness-150 hover:drop-shadow-glow">
              front-end
            </span>
          </span>{" "}
          and{" "}
          <span className="relative hover:text-emission">
            <span className="relative text-cyan-400 italic opacity-90 hover:brightness-150 hover:drop-shadow-glow">
              salesforce
            </span>
          </span>{" "}
          developer based in Chennai.
        </p>
      </div>
    </section>
  );
};
