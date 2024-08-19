import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="px-10  bg-black">
        <div>
          <h1 className="text-center py-10  text-white text-4xl font-bold tracking-wider">
            welcome to Learn Framer-Motion 🤗
          </h1>
        </div>
        <div className="p-4">
          <div className=" flex justify-center  w-full md:w-1/2 p-2 m-auto bg-white border-2">
            <Link to={'/about'}>
              <button className='p-3 border-2 px-6 bg-blue-400 hover:bg-blue-700 text-white rounded-lg'>About</button>
            </Link>
            <Link to={'/motion'}>
              <button className='p-3 border-2 px-6 bg-blue-400 hover:bg-blue-700 text-white rounded-lg'>motion</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
