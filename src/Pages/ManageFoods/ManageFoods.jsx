import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import TableRow from "./TableRow";


const ManageFoods = () => {
  const { user } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);

  const url = `http://localhost:5000/donations?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyFoods(data);
      });
  }, [url]);


  return (
    <div className='container mx-auto mt-20'>
      {/* table */}
      <div className='overflow-x-auto'>
      <table className='table'>
      <thead>
              <tr>
              <th></th>
                <th>Food Image</th>
                <th>Requester Name</th>
                <th>Requester Email</th>
                <th>Time</th>
                <th>Status</th>
                <th>Actions</th>
                <th></th>
              </tr>
            </thead>
     
        <tbody >
          {myFoods?.map((myFood) => (
            <TableRow key={myFood._id} myFood={myFood} myFoods={myFoods} setMyFoods={setMyFoods}
            ></TableRow>
          ))}
        </tbody>
        </table>
        </div>
      </div>
  );
};

export default ManageFoods;

