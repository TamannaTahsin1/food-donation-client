import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AvailableFoodsCard from "./AvailableFoodsCard";

const AvailableFoods = () => {
  const foods = useLoaderData()
  // console.log(foods)
  const {food_name} = useParams()
  // console.log(food_name)
    const [availableFoods, setAvailableFoods] = useState([])
    // sorting
    const handleSortByDate = () =>{
      const sortedFoods = [...foods].sort((x,y) => x.date - y.date)
      setAvailableFoods(sortedFoods)
    }
    // sideEffect
    useEffect(() =>{
        const findFoods = foods?.filter(food => food.food_name == food_name)
        // console.log(findFoods)
        setAvailableFoods(findFoods)
    },[food_name, foods])

  return (
    <div className='container mx-auto my-10'>
      <h3 className='text-4xl font-extrabold bg-gradient-to-r from-yellow-100 via-yellow-500 to-gray-300 text-transparent bg-clip-text text-center mb-2'>
        Available Foods
      </h3>
  <div className="p-5">
  <button onClick={handleSortByDate} className="btn border-none bg-gradient-to-r from-yellow-200 to-yellow-600 hover:from-red-500 hover:to-orange-500 text-white">Sort by Date</button>
  </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {
            availableFoods?.map(availableFood => <AvailableFoodsCard key={availableFood._id} availableFood={availableFood}></AvailableFoodsCard>)
        }
      </div>
    </div>
  );
};

export default AvailableFoods;
