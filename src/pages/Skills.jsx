import { skill } from "../assets/constants/index.jsx";
//import { com } from "../assets/images/index";
export const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="min-h-screen  flex items-center bg-black text-white"
      >
        <div className="p-6 text-7xl">My Skills</div>
        <div className="flex flex-col w-full h-2/5 mt-20">
        {/* Map through each skill category */}
        {Object.keys(skill).map((category) => (
          <div key={category} className=" flex flex-col">
            {/* Heading for the skill category */}
            {/* <h2 className="text-2xl pl- leading-tight font-bold tracking-wide p-3 text-left capitalize">
              {category.replace(/([A-Z])/g, ' $1')} 
            </h2> */}

            {/* Grid for skills under this category */}
            <div className="flex p-2 text-xl">
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
       
  {/* <img className="absolute flex justify-end w-1/2 h-1/2" src={com} alt="" /> */}




      </section>
      
    </>
  );
};


// transform hover:scale-105 transition-transform duration-300 ease-in-out