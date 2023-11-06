import {  useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import FoodDetailsCard from "./FoodDetailsCard";

const FoodDetails = () => {
  const [foodDetail, setFoodDetails] = useState([]);
  const { _id } = useParams();
  console.log(_id);
  // loader data
  const foodDetails = useLoaderData();
  console.log(foodDetails);
  setFoodDetails(foodDetails)

  // useEffect(() => {
  //   const findFoodDetails = foodDetails?.find((foodDetail) => foodDetail._id === _id);
  //   console.log(findFoodDetails);
  //   setFoodDetails(findFoodDetails);
  // }, [_id, foodDetails]);
  return (
    <div>
      <h3 className='text-4xl font-extrabold bg-gradient-to-r from-yellow-100 via-yellow-500 to-gray-300 text-transparent bg-clip-text text-center mb-2'>
        Single Food
      </h3>
      <div>
        {foodDetail?.map((foodDetail) => (
          <FoodDetailsCard
            key={foodDetail._id}
            foodDetail={foodDetail}></FoodDetailsCard>
        ))}
      </div>
    </div>
  );
};

export default FoodDetails;
