import { skill } from "../assets/constants/index.jsx";
//import { com } from "../assets/images/index";
export const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="min-h-screen flex flex-col md:flex-row items-center bg-black text-white"
      >
         <div className="p-8 md:p-12 text-3xl md:text-5xl lg:text-7xl text-white text-center">My Skills</div>
        <div className="flex flex-col w-full h-2/5 mt-20">
        {/* Map through each skill category */}
        {Object.keys(skill).map((category) => (
          <div key={category} >
            

            {/* Grid for skills under this category */}
            <div className="flex flex-wrap p-2 text-xl">
              {skill[category].map((skillItem) => (
                <div className="w-[150px] h-[200px] " key={skillItem.name}>
                  <div className="flex flex-col items-center" >
                    <img
                      src={skillItem.imageUrl}
                      alt={skillItem.name}
                      className="w-[90px] h-[90px]  transform transition-transform duration-100 ease-in-out hover:scale-110"
                    />
                    <p className="p-5 text-center  text-xl leading-tight">{skillItem.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        </div>
       




      </section>
      
    </>
  );
};


