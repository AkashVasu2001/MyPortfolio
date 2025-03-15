import { useEffect, useRef } from "react";
import { port, sls, cap, note, quiz, udhaar } from "../assets/images/index.jsx";
import "../App.css"; // Ensure to import your CSS file for styles

export const Work = () => {
  const scrollRef = useRef(null);
const projects = [
  {
    id: "quizmeon",
    title: "QuizMeOn – AI-Powered Quiz Web App",
    description:
      "A Next.js-based AI quiz platform powered by the Gemini AI API. It dynamically generates quiz questions based on user preferences, offering an interactive and adaptive learning experience.",
    image: quiz,
    link: "https://quiz-me-on.vercel.app/",
    buttonText: "Try it out",
  },
  {
    id: "udhaar",
    title: "Udhaar – Expense Tracking App",
    description:
      "A React.js-based expense tracker using MongoDB and Express.js. Features authentication, useContext for state management, and an intuitive UI for seamless expense sharing and tracking.",
    image: udhaar,
    link: "https://udhaar-d2lz.vercel.app/",
    buttonText: "Try it out",
  },
  {
    id: "headgear",
    title: "Intelligent Headgear for the Visually Impaired",
    description:
      "Developed an intelligent headgear to assist visually impaired individuals in navigating museums independently. Utilized YOLO-based object detection for identifying artifacts and provided auditory descriptions through a text-to-speech system.",
    image: cap,
    link: "/paper.pdf",
    buttonText: "Learn more",
  },
  {
    id: "portfolio",
    title: "React and Three.js Portfolio",
    description:
      "Created a dynamic portfolio using React and Three.js to showcase various projects. Integrated 3D models and animations using Three.js, enhancing the interactive user experience. Optimized for performance across devices.",
    image: port,
  },
  {
    id: "notepad",
    title: "Angular Notepad",
    description:
      "Developed a simple notepad using Angular that stores notes in the browser's localStorage. Users can add, edit, and delete notes, which are saved persistently even after the browser is closed. It features a clean, intuitive UI.",
    image: note,
    link: "https://notepad-2af8b.web.app",
    buttonText: "Try it out",
  },
];

  const handleWheel = (event) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: event.deltaY > 0 ? 400 : -500,
        behavior: "smooth",
      });
      event.preventDefault();
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      id="work"
      className="min-h-screen font-helvetica bg-black flex flex-col md:flex-row items-center justify-center"
    >
      <div className="p-8 md:p-12 text-3xl md:text-5xl lg:text-7xl text-white text-center">
        Work & Projects
      </div>

      <div
        ref={scrollRef}
        className="flex flex-col md:flex-row gap-[2vw] p-4 h-[80vh] overflow-y-auto md:overflow-x-auto md:overflow-y-hidden"

      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="max-w-[90vw] md:max-w-md lg:max-w-lg bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 flex-shrink-0"
          >
            <a href="#">
              <div className="h-[40vh] w-full overflow-hidden rounded-t-3xl">
                <img
                  className="h-full w-full object-cover"
                  src={project.image}
                  alt={project.title}
                />
              </div>
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
              <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  {project.buttonText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
