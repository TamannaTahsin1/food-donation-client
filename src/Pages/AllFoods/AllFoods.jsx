import { useLoaderData } from "react-router-dom";
import AllFoodsCard from "./AllFoodsCard";


const AllFoods = () => {
    const allFoods = useLoaderData()
    console.log(allFoods)
    // const [allFoods, setAllFoods] = useState([])
    return (
        <div>
            <h1 className="text-center text-4xl mt-12 mb-20 font-extrabold bg-gradient-to-r from-yellow-100 via-yellow-500 to-gray-300 text-transparent bg-clip-text"> All Foods</h1>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="flip-right">
                {
                    // eslint-disable-next-line react/prop-types
                    allFoods?.map(allFood => <AllFoodsCard key={allFood._id} allFood={allFood}></AllFoodsCard>)
                }
            </div>
        </div>
    );
};

export default AllFoods;