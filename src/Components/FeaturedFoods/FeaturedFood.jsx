import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const FeaturedFood = ({ feature }) => {
  const {
    food_image,
    food_name,
    donor_image,
    donor_name,
    quantity,
    location,
    date,
  } = feature || {};
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={food_image} alt="foods" className="rounded-xl w-80 h-72" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-yellow-400 font-bold">{food_name}</h2>
        <div className="flex justify-center items-center gap-5 mb-3">
          <img src={donor_image} alt="" className="rounded-full w-10" />
          <p className="font-bold">{donor_name}</p>
        </div>
        <p>
          <span className="font-bold">Food Quantity:</span> {quantity}
        </p>
        <p>
          <span className="font-bold">Pickup Location:</span> {location}
        </p>
        <p>
          <span className="font-bold">Expire Date: </span> {date}
        </p>
        <div className="card-actions">
          <Link to={`/availableFoods/${food_name}`}>
            <button className="btn border-none bg-gradient-to-r from-yellow-200 to-yellow-600 hover:from-red-500 hover:to-orange-500 text-white">
              Show All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFood;
