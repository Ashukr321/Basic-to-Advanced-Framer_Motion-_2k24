import { motion } from "framer-motion"
import { useEffect, useState } from "react"
const MotionComp = () => {
  const [zoom, setZoom] = useState(false);
  useEffect(() => {

    setTimeout(() => {
      setZoom(true)
    }, 1000)
  })
  return (
    <div className=" p-4 bg-black h-screen">
      <header className="p-4 mb-2">
        <h1 className="text-center  text-white  text-2xl md:text-3xl font-bold">
          Motion components of the framer motion
        </h1>
      </header>

      <section>
        <motion.div animate={{ y: 300, scale: 2.5 }} transition={{ duration: 5 }} className="w-20 h-20  relative bg-white m-auto rounded-full">
          {
            zoom === true ? (
              <motion.div animate={{ x: -200, scale: 1.2 }} transition={{ duration: 3 }} className="h-14 w-14 absolute top-0 left-16 rounded-full bg-black">
              </motion.div>
            ) : null
          }
        </motion.div>
      </section>
    </div>
  )
}

export default MotionComp
