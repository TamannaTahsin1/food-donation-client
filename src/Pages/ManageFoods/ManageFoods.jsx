import { useLoaderData } from "react-router-dom";

const ManageFoods = () => {
    const newFoods = useLoaderData()
    return (
        <div>
            <h1>Manage Foods:{newFoods.length} </h1>
        </div>
    );
};

export default ManageFoods;