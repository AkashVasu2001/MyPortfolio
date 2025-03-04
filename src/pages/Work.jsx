import { port, sls, cap, note, quiz, udhaar } from "../assets/images/index.jsx";
import { useEffect, useRef } from 'react';
import '../app.css'; // Ensure to import your CSS file for styles

export const Work = () => {
  const scrollRef = useRef(null); // Reference for the scrollable container

  const handleWheel = (event) => {
    if (scrollRef.current) {
      // Scroll horizontally based on the vertical scroll
      scrollRef.current.scrollBy({
        left: event.deltaY > 0 ? 100 : -500, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
      event.preventDefault(); // Prevent default vertical scroll
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel); // Clean up the event listener
    };
  }, []);

  return (
    <div id="work" className="min-h-screen font-helvetica bg-black flex items-center justify-center">
      <div className="p-4 text-7xl text-white">Work & Projects</div>

      <div ref={scrollRef} className="flex gap-[2vw] p-4 h-[80vh] overflow-x-auto overflow-y-hidden">
        
        {/* QuizMeOn – AI-Powered Quiz Web App */}
        <div className="max-w-[90vw] md:max-w-md lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-shrink-0">
          <a href="#">
            <div className="h-[40vh] w-full overflow-hidden rounded-t-lg">
              <img className="h-full w-full object-cover" src={quiz} alt="QuizMeOn App" />
            </div>
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              QuizMeOn – AI-Powered Quiz Web App
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A Next.js-based AI quiz platform powered by the Gemini AI API. It dynamically generates quiz questions based on user preferences, offering an interactive and adaptive learning experience.
            </p>
            <a href="https://quiz-me-on.vercel.app/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-c focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-cyan-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
              Try it out
            </a>
          </div>
        </div>

        {/* Udhaar – Expense Tracking App */}
        <div className="max-w-[90vw] md:max-w-md lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-shrink-0">
          <a href="#">
            <div className="h-[40vh] w-full overflow-hidden rounded-t-lg">
              <img className="h-full w-full object-cover" src={udhaar} alt="Udhaar App" />
            </div>
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Udhaar – Expense Tracking App
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A React.js-based expense tracker using MongoDB and Express.js. Features authentication, useContext for state management, and an intuitive UI for seamless expense sharing and tracking.
            </p>
            <a href="https://udhaar-d2lz.vercel.app/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-c focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-cyan-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
              Try it out
            </a>
          </div>
        </div>

        {/* Existing Projects */}

       

        {/* Intelligent Headgear Project */}
        <div className="max-w-[90vw] md:max-w-md lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-shrink-0">
          <a href="#">
            <div className="h-[40vh] w-full overflow-hidden rounded-t-lg">
              <img className="h-full w-full bg-black object-cover" src={cap} alt="Intelligent Headgear" />
            </div>
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Intelligent Headgear for the Visually Impaired
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Developed an intelligent headgear to assist visually impaired individuals in navigating museums independently. Utilized YOLO-based object detection for identifying artifacts and provided auditory descriptions through a text-to-speech system.
            </p>
            <a href="/paper.pdf" download="MyFile.pdf" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-c focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-cyan-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
              Learn more
            </a>
          </div>
        </div>

         {/* React and Three.js Portfolio */}
         <div className="max-w-[90vw] md:max-w-md lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-shrink-0">
          <a href="#">
            <div className="h-[40vh] w-full overflow-hidden rounded-t-lg">
              <img className="h-full w-full object-cover" src={port} alt="React and Three.js Portfolio" />
            </div>
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              React and Three.js Portfolio
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Created a dynamic portfolio using React and Three.js to showcase various projects. Integrated 3D models and animations using Three.js, enhancing the interactive user experience. Optimized for performance across devices.
            </p>
          </div>
        </div>

        {/* Other Projects Follow */}
         {/* Angular Notepad Project */}
         <div className="max-w-[90vw] md:max-w-md lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-shrink-0">
          <a href="#">
            <div className="h-[40vh] w-full overflow-hidden rounded-t-lg">
              <img className="h-full w-full object-cover" src={note} alt="Notepad Project" />
            </div>
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Angular Notepad 
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Developed a simple notepad using Angular that stores notes in the browsers localStorage. Users can add, edit, and delete notes, which are saved persistently even after the browser is closed. It features a clean, intuitive UI.
            </p>
            <a href="https://notepad-2af8b.web.app" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-c focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-cyan-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
              Try it out
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};
