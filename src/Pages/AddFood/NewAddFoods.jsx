import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import NewTableRow from "./NewTableRow";
import { useLoaderData } from "react-router-dom";

const NewAddFoods = () => {
    const addedFoods = useLoaderData()
    console.log(addedFoods)
    const {user} = useContext(AuthContext);
    const [newFoods, setNewFoods] = useState([]);
    const [deleteFoods , setDeleteFoods] = useState(addedFoods)
    const url = `https://food-donation-server-sooty.vercel.app/foods?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setNewFoods(data);
      });
  }, []);
    return (
        <div className="container mx-auto mt-20">

        {/* table */}
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr>
              <th></th>
                <th>Name & Image</th>
                <th>User Email</th>
                <th>Quantity</th>
                <th>Expire Date</th>
                <th>Location</th>
                <th>Additional Note</th>
                {/* <th>Status</th> */}
                <th>Actions</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                  {
                      newFoods?.map(newFood => <NewTableRow key={newFood._id} newFood={newFood}
                      deleteFoods={deleteFoods}
                      setDeleteFoods={setDeleteFoods}></NewTableRow>)
                  }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default NewAddFoods;