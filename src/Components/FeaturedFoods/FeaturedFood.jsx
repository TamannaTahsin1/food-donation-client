

// eslint-disable-next-line react/prop-types
const FeaturedFood = ({feature}) => {
    const {food_image, food_name, donar_image, donar_name, quantity, location, date} = feature || {}
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img
          src={food_image}
          alt='foods'
          className='rounded-xl w-80 h-72'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{food_name}</h2>
        <div className="flex justify-center items-center gap-5 mb-3">
            <img src={donar_image} alt="" className="rounded-full w-10" />
            <p className="font-bold">{donar_name}</p>
        </div>
        <p><span className="font-bold">Food Quantity:</span> {quantity}</p>
        <p><span className="font-bold">Pickup Location:</span> {location}</p>
        <p><span className="font-bold">Expire Date: </span> {date}</p>
        <div className='card-actions'>
          <button className='btn btn-primary'>view Details</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFood;
