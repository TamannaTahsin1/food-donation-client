import { MdOutlineVolunteerActivism } from 'react-icons/md';
import { FaDonate, FaPeopleCarry } from 'react-icons/fa';
import { AiFillFund } from 'react-icons/ai';
const Other = () => {
  return (
    <div className='container mx-auto gap-4 mt-8 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      <div className='card w-96 bg-base-300 shadow-xl image-full'>
        <div className='card-body bg-yellow-500 rounded-xl'>
            <div className="flex flex-row-reverse justify-around items-center text-black">
            <div className='text-5xl'>
            <FaPeopleCarry></FaPeopleCarry>
            </div>
            <div className='text-center'>
            <h2 className='card-title mb-3'>As a Volunteer</h2>
          <div className='card-actions justify-center'>
            <button className='btn bg-black'>Join Us</button>
          </div>
            </div>
            </div>
        </div>
      </div>
      <div className='card w-96 bg-base-300 shadow-xl image-full'>
        <div className='card-body bg-yellow-500 rounded-xl'>
            <div className="flex flex-row-reverse justify-around items-center text-black">
            <div className='text-5xl'>
            <FaDonate></FaDonate>
            </div>
            <div className='text-center'>
            <h2 className='card-title mb-3'>As a Donor</h2>
          <div className='card-actions justify-center'>
            <button className='btn bg-black'>Donate Now</button>
          </div>
            </div>
            </div>
        </div>
      </div>
      <div className='card w-96 bg-base-300 shadow-xl image-full'>
        <div className='card-body bg-yellow-500 rounded-xl'>
            <div className="flex flex-row-reverse justify-around items-center text-black">
            <div className='text-5xl'>
            <AiFillFund></AiFillFund>
            </div>
            <div className='text-center'>
            <h2 className='card-title mb-3'>As a Fundraiser</h2>
          <div className='card-actions justify-center'>
            <button className='btn bg-black'>Read More</button>
          </div>
            </div>
            </div>
        </div>
      </div>
      <div className='card w-96 bg-base-300 shadow-xl image-full'>
        <div className='card-body bg-yellow-500 rounded-xl'>
            <div className="flex flex-row-reverse justify-around items-center text-black">
            <div className='text-5xl'>
            <MdOutlineVolunteerActivism></MdOutlineVolunteerActivism>
            </div>
            <div className='text-center'>
            <h2 className='card-title mb-3'>As a Sponsor</h2>
          <div className='card-actions justify-center'>
            <button className='btn bg-black'>Read More</button>
          </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
