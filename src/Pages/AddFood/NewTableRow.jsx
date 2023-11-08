/** @format */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const NewTableRow = ({ newFood, deleteFoods, setDeleteFoods }) => {
  const { _id, email, food_name, quantity, food_image, date, location, notes } =
    newFood || {};

  // delete operation
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/foods/${_id}`,{
            method: "DELETE",
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your donation has been deleted.",
                icon: "success",
              });
              // eslint-disable-next-line react/prop-types
              const remaining = deleteFoods?.filter(deleteFood => deleteFood._id !== _id);
              setDeleteFoods(remaining)
            }
          });
      }
    });
  };
  return (
    <>
      {/* row 1 */}
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
                <img src={food_image} alt='Avatar Tailwind CSS Component' />
              </div>
            </div>
            <div>
              <div className='font-bold'>{food_name}</div>
              <div className='font-bold'>{date}</div>
            </div>
          </div>
        </td>
        <td>{email}</td>
        <td>{quantity}</td>
        <td>{date}</td>
        <td>{location}</td>
        <td>{notes}</td>
        {/* <td>{location}</td> */}
        <th>
            <Link to={`/updateFood/${_id}`}>
            <button className='btn btn-ghost btn-xs'>Update</button>
            </Link>
          <button
            onClick={() => handleDelete(_id)}
            className='btn btn-ghost btn-xs'>
            Delete
          </button>
          <button
            className='btn btn-ghost btn-xs'>
            Manage
          </button>
        </th>
      </tr>
    </>
  );
};

export default NewTableRow;
