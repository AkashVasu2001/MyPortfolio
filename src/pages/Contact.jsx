import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import bgv from '../assets/bg.jpg'

export const Contact = () => {
  const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (publicKey) {
      emailjs.init(publicKey);
    }
    
  }, [publicKey]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    try {
      setLoading(true);
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      alert("Email successfully sent. Check your inbox.");
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover" // Updated video styles for better fit
      >
        <source src={bgv} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <img
        src={bgv}
        alt=""
        className="absolute z-0 w-full h-full object-cover"
      />
      <div className="relative z-10 p-6 sm:p-10 rounded-lg backdrop-blur-sm w-full max-w-[90vw] sm:max-w-lg text-cyan-400 shadow-[0_8px_16px_rgba(0,0,0,5)]">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
          Contact Me
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 text-lg sm:text-xl"
        >
          <div>
            <label className="block font-medium mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full p-2 sm:p-3 border border-cyan-800 rounded-lg bg-transparent focus:outline-none ring-cyan-600 ring-2  focus:ring-4 focus:ring-cyan-600"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full p-2 sm:p-3 border border-cyan-800 rounded-lg bg-transparent focus:outline-none focus:ring-4 ring-cyan-600 ring-2  focus:ring-cyan-600"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Message</label>
            <textarea
              name="message"
              className="w-full p-2 sm:p-3 border border-cyan-800 rounded-lg bg-transparent focus:outline-none ring-cyan-600 ring-2  focus:ring-4 focus:ring-cyan-600 h-24 sm:h-32 resize-none"
            />
          </div>
          <input
            type="submit"
            //onClick={() => setLoading(true)} // Added onClick event
            value={loading ? "loading..." : "Send"} // Updated button text
            disabled={loading}
            className="w-full p-2 sm:p-3 border border-cyan-800 font-bold rounded-lg hover:ring-4 ring-cyan-600 ring-2 transition duration-300 cursor-pointer"
          />
        </form>

        <br />
        <div className="social-links flex justify-center space-x-6 text-sm">
          <a
            href="https://github.com/AkashVasu2001"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-800"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://linkedin.com/in/akash-v-48b34017a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-800"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=akashmpvasu@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-800"
          >
            <FontAwesomeIcon icon={faGoogle} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
};
