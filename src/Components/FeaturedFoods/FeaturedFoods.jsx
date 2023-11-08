import { useEffect, useState } from "react";
import FeaturedFood from "./FeaturedFood";
import { Link } from "react-router-dom";

const FeaturedFoods = () => {
    const [features, setFeatures] = useState()
    const [isShow, setIsShow] = useState(false);
    useEffect(() =>{
        fetch('https://food-donation-server-sooty.vercel.app/features')
        .then(res => res.json())
        .then(data => setFeatures(data))
    }, []) 
    return (
        <div className="container mx-auto my-10" data-aos="fade-down-left">
            <h3  className="text-4xl font-extrabold bg-gradient-to-r from-yellow-100 via-yellow-500 to-gray-300 text-transparent bg-clip-text text-center mb-2">Featured Foods</h3>
            <p className="text-center text-sm text-gray-400">Donated foods provide essential sustenance to those in need, helping to <br /> alleviate hunger and promote food security.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                isShow ?
                features?.map(feature => <FeaturedFood key={feature._id} feature={feature}></FeaturedFood>)
                :
                features?.slice(0,6).map(feature => <FeaturedFood key={feature._id} feature={feature}></FeaturedFood>)
            }
            </div>
        <div className="flex justify-center items-center mt-5" data-aos="fade-down-right">
        <Link to='/allFoods'>
        <button
        onClick={() => setIsShow(!isShow)}
            className='btn border-none bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-600 from-red-500 to-orange-500 text-white'>
            {
                isShow ? ' ' : 'See more'
            }
          </button>
        </Link>
        </div>
        </div>
    );
};

export default FeaturedFoods;