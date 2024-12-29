import React, { useState } from 'react'
import { IoChevronDown } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from '../../components/header/Navbar';
import { projects } from './ProjectConfig';
import hero from "../../assets/images/allProductsimages/hero.png";

export const Projects = () => {


     const [openSections, setOpenSections] = useState(["Commercial Lighting"]);
     const toggleSection = (title) => {
       setOpenSections((prev) =>
         prev.includes(title)
           ? prev.filter((section) => section !== title)
           : [...prev, title]
       );
     };
     const renderCard = (item, index) => (
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -20 }}
         transition={{ duration: 0.3, delay: index * 0.1 }}
         className="flex flex-col gap-4 p-4 rounded-lg border bg-gray-100 border-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
       >
         <div className="w-full h-50 bg-gray-100 rounded-lg overflow-hidden">
           {item.image ? (
             <img
               src={item.image}
               alt={item.title}
               className="w-full h-full object-cover"
             />
           ) : (
             <div className="w-full h-full flex items-center justify-center text-gray-400">
               No image available
             </div>
           )}
         </div>

         <h1>{item.title}</h1>
       </motion.div>
     );
  return (
    <div className="w-full overflow-hidden">
      <Navbar />

      <div className="w-full h-[300px] max-sm:h-[200px] relative flex items-center  justify-start ">
        <img
          className="w-full h-full object-cover absolute "
          src={hero}
          alt=""
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white ml-[5vw] relative z-[2]">
          Projects
        </h1>

      </div>
       

        <div className="w-full max-w-6xl mx-auto  my-[50px] space-y-4  ">
          {projects.map((section) => (
            <motion.div
              key={section.title}
              initial={false}
              className=" rounded-lg overflow-hidden"
            >
              <motion.button
                onClick={() => toggleSection(section.title)}
                className="w-full  rounded-lg flex justify-between items-center p-4 bg-gray-100 border  border-gray-300 "
                whileHover={{ backgroundColor: "#D9D9D9" }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="text-xl  font-medium">{section.title}</span>
                <motion.div
                  animate={{
                    rotate: openSections.includes(section.title) ? 180 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <IoChevronDown />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openSections.includes(section.title) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: {
                          duration: 0.4,
                          ease: "easeInOut",
                        },
                        opacity: {
                          duration: 0.3,
                          delay: 0.1,
                        },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: {
                          duration: 0.4,
                          ease: "easeInOut",
                        },
                        opacity: {
                          duration: 0.3,
                        },
                      },
                    }}
                    className=" overflow-hidden"
                  >
                    <div className="py-4">
                      {section.items.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          <AnimatePresence>
                            {section.items.map((item, index) => (
                              <div key={index}>{renderCard(item, index)}</div>
                            ))}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-gray-500 text-center py-4"
                        >
                          No items available
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        </div>
    
  );
}
