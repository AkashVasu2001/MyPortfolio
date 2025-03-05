import { Canvas} from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "../../public/Moon";
import { OrbitControls } from "@react-three/drei";
export const Education = () => {
  return (
    <div
      id="education"
      className="min-h-screen relative font-helvetica flex items-center justify-evenly bg-black"
    >
<div className="p-16 text-7xl text-white">
  Education&nbsp;& Experience
</div>

      {/* Timeline Container */}
      <ol className="relative border-s ms-32 border-gray-200 dark:border-gray-700 w-full">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
            2015-2016
          </time>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            10th Standard
          </h3>
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
            Central Board of Secondary Education,<br /> Balsam School
            <br />
            CGPA: 9.8
          </p>
        </li>

        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
            2017-2018
          </time>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            12th Standard
          </h3>
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
            State Board (Computer Science),<br /> Sunbeam Matric HR Sec School
            <br />
            Score: 90.83%
          </p>
        </li>

        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
            2018-2022
          </time>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            B.E. in Computer Science Engineering
          </h3>
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
            Rajalakshmi Engineering College
            <br />
            CGPA: 8.34
          </p>
        </li>

        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
            2022-Present
          </time>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Cognizant
          </h3>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
            Frontend Developer,<br /> Programmer Analyst
          </p>
        </li>
      </ol>
      <Canvas
  shadows
  style={{ width: "100vw", height: "60vh" }}
  camera={{ position: [0, 0, 100], fov: 50 }}
  className="absolute top-0 left-0 z-0 mr-24"
>
  
  <ambientLight intensity={0.5} />
  <directionalLight position={[10, 0, 100]} intensity={10} castShadow />
  
    <Suspense fallback={null}>
      <Model scale={30} position={[0, 0, 0]} />
    </Suspense>
 
  <OrbitControls
    enableZoom={true}
    enablePan={false}
    minDistance={80}
    maxDistance={90}
    autoRotate
    autoRotateSpeed={5}
  />
</Canvas>

    </div>
  );
};

      
      
      
      
    