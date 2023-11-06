/** @format */

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

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
    <div>
      <h1 className='text-center text-yellow-500'>
        Manage My Foods: {myFoods.length}
      </h1>
      {/* table */}
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
                {
                    myFoods?.map(myFood => <div key={myFood._id}>
                        <tr>
                        <th>
                          <label>
                            <input type='checkbox' className='checkbox' />
                          </label>
                        </th>
                        <td>
                          <div className='flex items-center space-x-3'>
                            <div className='avatar'>
                              <div className='mask mask-squircle w-12 h-12'>
                                <img
                                  src='/tailwind-css-component-profile-2@56w.png'
                                  alt='Avatar Tailwind CSS Component'
                                />
                              </div>
                            </div>
                            <div>
                              <div className='font-bold'>Hart Hagerty</div>
                              <div className='text-sm opacity-50'>United States</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          Zemlak, Daniel and Leannon
                          <br />
                          <span className='badge badge-ghost badge-sm'>
                            Desktop Support Technician
                          </span>
                        </td>
                        <td>Purple</td>
                        <th>
                          <button className='btn btn-ghost btn-xs'>details</button>
                        </th>
                        </tr></div>)
                }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageFoods;
//             {/* row 1 */}


