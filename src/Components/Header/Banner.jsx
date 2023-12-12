// import { Link } from "react-router-dom";
// import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img/about1.jpg'
import img2 from '../../assets/img/about2.jpg'
import img3 from '../../assets/img/about3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='container mx-auto my-8' data-aos="zoom-in-up">
                <div className='carousel w-full h-[700px]'>
      <div id='slide1' className='carousel-item relative w-full'>
        <img
          src={img3}
          className='w-full rounded-lg'
        />
        <div className='absolute flex items-center gap-5 h-full left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]' data-aos="flip-up">
                <div className='text-white space-y-7 w-1/2 pl-5' data-aos="flip-up">
                  <div className='animated-text'>
                        Share Fare is a <span></span>
                  </div>
                    <h1 className='font-bold text-6xl bg-gradient-to-r from-yellow-100 via-yellow-500 to-gray-300 text-transparent bg-clip-text'>ShareFare</h1>
                    <p className='text-gray-400 text-sm'>Food donation website connects donors and recipients, providing a digital <br /> platform to share surplus food and reduce food waste while helping those in need. It is a convenient and impactful way to contribute to hunger relief efforts in the community.</p>
                    <div>
                   <Link to='/about'>
                   <button className="btn border-none bg-gradient-to-r from-yellow-200 to-yellow-600 hover:from-red-500 hover:to-orange-500 text-white">Discover More</button>
                   </Link>                  
                    </div>
                </div>
        </div>
        <div className='absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0'>
          <a href='#slide4' className='btn btn-circle bg-yellow-500 text-white border-none'>
            ❮
          </a>
          <a href='#slide2' className='btn btn-circle bg-yellow-500 text-white border-none'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide2' className='carousel-item relative w-full'>
        <img
          src={img2}
          className='w-full rounded-lg'
        />
        <div className='absolute flex items-center gap-5 h-full left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
                <div className='text-white space-y-7 w-1/2 pl-5'  data-aos="flip-up">
                <h1 className='font-bold text-6xl bg-gradient-to-r from-yellow-100 via-yellow-500 to-gray-300 text-transparent bg-clip-text'>ShareFare</h1>
                <p className='text-gray-400 text-sm'>Food donation website connects donors and recipients, providing a digital <br /> platform to share surplus food and reduce food waste while helping those in need. It is a convenient and impactful way to contribute to hunger relief efforts in the community.</p>
                    <div>
                    <Link to='/about'>
                    <button className="btn border-none bg-gradient-to-r from-yellow-200 to-yellow-600 hover:from-red-500 hover:to-orange-500 text-white">Discover More</button>
                   </Link> 
                    </div>
                </div>
        </div>
        <div className='absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0'>
          <a href='#slide1' className='btn btn-circle bg-yellow-500 text-white border-none'>
            ❮
          </a>
          <a href='#slide3' className='btn btn-circle bg-yellow-500 text-white border-none'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide3' className='carousel-item relative w-full'>
        <img
          src={img1}
          className='w-full rounded-lg'
        />
        <div className='absolute flex items-center gap-5 h-full left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
                <div className='text-white space-y-7 w-1/2 pl-5'  data-aos="flip-up">
                <h1 className='font-bold text-6xl bg-gradient-to-r from-yellow-100 via-yellow-500 to-gray-300 text-transparent bg-clip-text'>ShareFare</h1>
                    <p className='text-gray-400 text-sm'>Food donation website connects donors and recipients, providing a digital <br /> platform to share surplus food and reduce food waste while helping those in need. It is a convenient and impactful way to contribute to hunger relief efforts in the community.</p>
                    <div>
                    <Link to='/about'>
                    <button className="btn border-none bg-gradient-to-r from-yellow-200 to-yellow-600 hover:from-red-500 hover:to-orange-500 text-white">Discover More</button>
                   </Link> 
                    </div>
                </div>
        </div>
        <div className='absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0'>
          <a href='#slide2' className='btn btn-circle bg-yellow-500 text-white border-none'>
            ❮
          </a>
          <a href='#slide1' className='btn btn-circle bg-yellow-500 text-white border-none'>
            ❯
          </a>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;