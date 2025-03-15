import { NavLink, Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useState, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Nav = () => {
  const location = useLocation();
  const nodeRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <div className="z-5 bg-blue-500">
      {/* Navbar */}
      <header className="fixed top-0 w-full  md:w-[500px] z-10 bg-transparent text-white text-xl font-bold">
        <div className="flex justify-between items-center md:justify-evenly h-[50px] px-4">
          {/* Logo / Branding (Optional) */}

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            {["Home", "Education", "Work", "Skills", "Contact"].map((item) => (
              <NavLink
                key={item}
                to={`/${item === "Home" ? "" : item}`}
                className={({ isActive }) =>
                  `relative group ${isActive ? "text-cyan-400" : "text-white"}`
                }
              >
                {item.toUpperCase()}
                <span className="absolute left-0 bottom-0 w-full h-1 bg-cyan-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
              </NavLink>
            ))}
          </nav>

          {/* Hamburger Button (Visible on Small Screens) */}
          <button
            className="md:hidden  focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
             {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu (Dropdown) */}
        <div
          className={`md:hidden absolute top-[50px] left-0 w-full  backdrop-blur-md transition-transform ${
            isOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
          }`}
        >
          {["Home", "Education", "Work", "Skills", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item === "Home" ? "" : item}`}
              className="block px-4 py-2 text-white hover:bg-cyan-400"
              onClick={() => setIsOpen(false)} // Close menu on selection
            >
              {item.toUpperCase()}
            </NavLink>
          ))}
        </div>
      </header>

      {/* Page Transition Animations */}
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          nodeRef={nodeRef}
          classNames={{
            enter: "fade-enter",
            enterActive: "fade-enter-active",
            exit: "fade-exit",
            exitActive: "fade-exit-active",
          }}
          timeout={300}
        >
          <div ref={nodeRef}>
            <Outlet />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
