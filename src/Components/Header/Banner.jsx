import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div
        className='container mx-auto hero h-[70vh] overflow-hidden mt-10'
        data-aos="fade-left"
        style={{
          backgroundImage: "url(./bg.jpg)",
        }}>
        <div className='hero-overlay bg-opacity-70 rounded-lg'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <h1
              className='mb-5 text-6xl font-extrabold bg-gradient-to-r from-yellow-100 via-yellow-500 to-gray-300 text-transparent bg-clip-text'
              data-aos='fade-down'>
              Food Flow
            </h1>
            <p className='mb-5 text-base' data-aos='fade-up'>
            Elevate your style with our exquisite collection of timeless and trendy fashion pieces
            </p>
            <div  data-aos='fade-up'>
            <Link to={'/about'}>
            <button className="btn border-none bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-600 from-red-500 to-orange-500 text-white">
              Discover More <FaArrowRight></FaArrowRight>
            </button>
            </Link>
            </div>
  
          </div>
        </div>
      </div>
    );
};

export default Banner;