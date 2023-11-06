

// eslint-disable-next-line react/prop-types
const FoodDetailsCard = ({foodDetail}) => {
    const {food_image, food_name, donar_name, quantity, date} = foodDetail || {}
  return (
    <div>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <figure>
          <img
            src={food_image}
            alt='Shoes'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{food_name}</h2>
          <p>I{donar_name}</p>
          <p>I{quantity}</p>
          <p>I{date}</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Request</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsCard;
