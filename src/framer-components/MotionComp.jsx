import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionComp = () => {
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setZoom(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" bg-black">
      <header className="p-4 mb-2">
        <h1 className="text-center text-white text-2xl md:text-3xl font-bold">
          Motion components of the framer motion
        </h1>
        <p className="mt-2 text-xl text-center text-orange-300">
          Motion components look like static components but provide props that
          enhance the features of the components
        </p>
      </header>

      <div className="text-white text-center  text-xl">
        <h2 className="text-2xl font-bold text-red-400">
          It provides props: properties:
        </h2>
        <ul>
          <li>Animate</li>
          <li>Pan</li>
          <li>Hover</li>
          <li>Tab gesture</li>
        </ul>
      </div>

      <div className="text-white text-center">
        <h1 className="text-center text-2xl font-bold text-red-400 mt-2">
          Motion provides multiple gesture animation props
        </h1>
        <ul className="text-xl">
          <li>whileHover</li>
          <li>whileTap</li>
          <li>whileFocus</li>

        </ul>
      </div>

      <section>
        <motion.div
          animate={{ y: 300, scale: 2.5 }}
          transition={{ duration: 5 }}
          className="w-20 h-20 relative bg-white m-auto rounded-full"
        >
          {zoom && (
            <motion.div
              animate={{ x: -200, scale: 1.2 }}
              transition={{ duration: 3 }}
              className="h-14 w-14 absolute top-0 left-16 rounded-full bg-black"
            />
          )}
        </motion.div>
      </section>

      <section>
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
         whileTap={{scale:1.1,transition:{duration:1}}}
          animate={{ x: 200 }}
          className="w-[200px] flex justify-center items-center h-[200px] bg-white"
        />
      </section>
    </div>
  );
};

export default MotionComp;