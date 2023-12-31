/** @format */

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AvailableFoodsCard = ({ availableFood }) => {
  const {
    _id,
    food_image,
    food_name,
    donor_name,
    donor_image,
    quantity,
    location,
    date,
    notes,
  } = availableFood || {};
  return (
    <div>
      <div className='card card-96 card-side bg-base-100 shadow-xl'>
        <figure>
          <img src={food_image} alt='Movie' className='w-96 h-96' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-yellow-400 font-bold'>{food_name}</h2>
          <div className='flex justify-center items-center gap-5 mb-3'>
            <img src={donor_image} alt='' className='rounded-full w-10' />
            <p className='font-bold'>{donor_name}</p>
          </div>
          <p>
            <span className='font-bold'>Food Quantity:</span> {quantity}
          </p>
          <p>
            <span className='font-bold'>Pickup Location:</span> {location}
          </p>
          <p>
            <span className='font-bold'>Expire Date: </span> {date}
          </p>
          <p>
            <span className='font-bold'>Additional Notes </span> {notes}
          </p>
          <div className='card-actions justify-end'>
            <Link to={`/details/${_id}`}>
              <button className='btn border-none bg-gradient-to-r from-yellow-200 to-yellow-600 hover:from-red-500 hover:to-orange-500 text-white'>
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableFoodsCard;
