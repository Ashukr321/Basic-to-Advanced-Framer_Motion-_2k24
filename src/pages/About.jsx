
const About = () => {
  return (
    <div className='h-screen bg-black text-white p-10'>
      <h1 className='text-2xl md:text-4xl my-4'>Framer motion:</h1>
      <p className='text-xl md:text-2xl'>  Framer motion is the most important and useFull animation  library use in industry : </p>
      <p> <span className='text-orange-800 text-xl'>installation process :</span> npm i framer-motion</p>

      <br />
      <p className='text-xl'>Framer Motion provide us Some useFull components and features :</p>
      <ul className='list-decimal text-xl  px-4 mt-4'>
        <li>
          To use framer Motion we have to first import the Motion.
        </li>
        <li>
          Animations
        </li>
        <li>
          Gestures
        </li>
        <li>
          Variants
        </li>
        <li>
          Scroll-triggered animations
        </li>
        <li>
          Server-side rendering
        </li>
        <li>
          MotionValues
        </li>
        <li>
          Layout animations
        </li>
        <li>
          Manual animations
        </li>
      </ul>
    </div>
  )
}

export default About