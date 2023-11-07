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
  }, []);

  return (
    <div className='container mx-auto mt-20'>
      {/* table */}
      <div className='overflow-x-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {myFoods?.map((myFood) => (
            <TableRow key={myFood._id} myFood={myFood}></TableRow>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageFoods;

