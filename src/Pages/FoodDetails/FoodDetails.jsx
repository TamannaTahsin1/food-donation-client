// import {  useState } from "react";
import { useLoaderData } from "react-router-dom";
import FoodDetailsCard from "./FoodDetailsCard";

const FoodDetails = () => {
  // const [foodDetail] = useState([]);
  // loader data
  const foodDetails = useLoaderData();
  // console.log(foodDetails, foodDetail);

  return (
    <div>
      {/* <h3 className='text-4xl font-extrabold bg-gradient-to-r from-yellow-100 via-yellow-500 to-gray-300 text-transparent bg-clip-text text-center mb-2 mt-2'>
        Single Food
      </h3> */}
      <div className="container mx-auto flex justify-center items-center mt-10">
          <FoodDetailsCard
            key={foodDetails._id}
            foodDetail={foodDetails}></FoodDetailsCard>
      </div>
    </div>
  );
};

export default FoodDetails;
