import { IoIosPeople, IoIosMan } from 'react-icons/io';
import { FaMedal, FaRProject } from 'react-icons/fa';

const Support = () => {
  return (
    <div
      className='container mx-auto hero h-[30vh] overflow-hidden mt-10'
      data-aos='fade-left'
      style={{
        backgroundImage: "url(./supportt.jpg)",
      }}>
      <div className='hero-overlay bg-yellow-700 bg-opacity-70 rounded-lg'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div>
          <h1
            className='mb-5 text-2xl font-bold text-white'
            data-aos='fade-down'>
            Be aHand Proud to Say, After Providing The Best Non-Profit Support.
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            <div className='card w-60 bg-base-100 shadow-xl'>
              <div className='card-body'>
                    <div className='text-center text-yellow-400 text-4xl'>
                    <IoIosPeople></IoIosPeople>
                    </div>
                <h2 className='card-title'>Total Volunteers</h2>
                <p>455860</p>
              </div>
            </div>
            <div className='card w-56 bg-base-100 shadow-xl text-center'>
              <div className='card-body '>
                <div className=' text-yellow-400 text-3xl'>
                    <FaMedal></FaMedal>
                </div>
                <h2 className='card-title'>Total Award</h2>
                <p>20520</p>
              </div>
            </div>
            <div className='card w-60 bg-base-100 shadow-xl'>
              <div className='card-body'>
                <div className=' text-yellow-400 text-3xl'>
                    <FaRProject></FaRProject>
                </div>
                <h2 className='card-title'>Successful Projects</h2>
                <p>22780</p>
              </div>
            </div>
            <div className='card w-64 bg-base-100 shadow-xl'>
              <div className='card-body'>
                <div className='text-yellow-400 text-3xl'>
                    <IoIosMan></IoIosMan>
                </div>
                <h2 className='card-title'>Total Amount Raised</h2>
                <p>1707400</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
