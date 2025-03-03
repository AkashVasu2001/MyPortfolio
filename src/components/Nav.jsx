import { NavLink, Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useRef } from "react";

export const Nav = () => {
  const location = useLocation();
  const nodeRef = useRef(null);
  return (
    <div className="z-5 bg-blue-500"> 
      <header className="flex justify-evenly items-center fixed w-[500px] z-10 top-0 h-[50px] bg-transparent text-white text-xl font-bold">
  <NavLink
    to="/"
    className={({ isActive }) => 
      `relative group ${isActive ? 'text-cyan-400' : 'text-white'}`
    }
  >
    HOME
    <span className="absolute left-0 bottom-0 w-full h-1 bg-cyan-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
  </NavLink>

  <NavLink
    to="/Education"
    className={({ isActive }) => 
      `relative group ${isActive ? 'text-cyan-400' : 'text-white'}`
    }
  >
    EDUCATION
    <span className="absolute left-0 bottom-0 w-full h-1 bg-cyan-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
  </NavLink>

  <NavLink
    to="/Work"
    className={({ isActive }) => 
      `relative group ${isActive ? 'text-cyan-400' : 'text-white'}`
    }
  >
    WORK
    <span className="absolute left-0 bottom-0 w-full h-1 bg-cyan-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
  </NavLink>

  <NavLink
    to="/Skills"
    className={({ isActive }) => 
      `relative group ${isActive ? 'text-cyan-400' : 'text-white'}`
    }
  >
    SKILLS
    <span className="absolute left-0 bottom-0 w-full h-1 bg-cyan-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
  </NavLink>

  <NavLink
    to="/Contact"
    className={({ isActive }) => 
      `relative group ${isActive ? 'text-cyan-400' : 'text-white'}`
    }
  >
    CONTACT
    <span className="absolute left-0 bottom-0 w-full h-1 bg-cyan-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
  </NavLink>
</header>


<TransitionGroup>
        <CSSTransition
          key={location.key}
          nodeRef={nodeRef}  // Attach the ref to CSSTransition
          classNames={{
            enter: 'fade-enter',
            enterActive: 'fade-enter-active',
            exit: 'fade-exit',
            exitActive: 'fade-exit-active'
          }}
          timeout={300}
        >
          <div ref={nodeRef}>  {/* Attach the ref to the actual DOM element */}
            <Outlet />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

{/* <div>
            <div className="flex justify-evenly items-center fixed w-full z-10 top-0 min-h-[0px] bg-black text-white">
                <a href="/home">Home</a>
                <a href="/education">Education</a>
                <a href="/work">Work</a>
                <a href="/skills">Skills</a>
                <a href="/contact">Contact</a>
            </div>
    </div> */}

    