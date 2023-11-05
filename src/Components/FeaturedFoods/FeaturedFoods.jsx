import { useEffect, useState } from "react";
import FeaturedFood from "./FeaturedFood";

const FeaturedFoods = () => {
    const [features, setFeatures] = useState()

    useEffect(() =>{
        fetch('http://localhost:5000/features')
        .then(res => res.json())
        .then(data => setFeatures(data))
    }, []) 
    return (
        <div className="container mx-auto my-10">
            <h3  className="text-4xl font-extrabold bg-gradient-to-r from-yellow-100 via-yellow-500 to-gray-300 text-transparent bg-clip-text text-center mb-2">Featured Foods</h3>
            <p className="text-center text-sm text-gray-400">Donated foods provide essential sustenance to those in need, helping to <br /> alleviate hunger and promote food security.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                features?.map(feature => <FeaturedFood key={feature._id} feature={feature}></FeaturedFood>)
            }
            </div>
        </div>
    );
};

export default FeaturedFoods;