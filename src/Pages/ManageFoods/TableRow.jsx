/** @format */

import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const TableRow = ({ myFood, myFoods, setMyFoods }) => {
  const { _id, name, email, food_name, food_image, date, status } =
    myFood || {};
  // for confirm
  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/donations/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // eslint-disable-next-line react/prop-types
          const remaining = myFoods?.filter(myFood => myFood._id !== _id);
          // eslint-disable-next-line react/prop-types
          const updated = myFoods?.find(myFood => myFood._id === _id);
          updated.status = "confirm";
          const newDonations = [updated, ...remaining];
          setMyFoods(newDonations);
        }
      });
  };
  // for delete
  const handleDelete = (id) => {

      fetch(`http://localhost:5000/donations/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Canceled!",
              text: "Your donation has been canceled.",
              icon: "success",
            });
            // eslint-disable-next-line react/prop-types
            const remaining = myFoods?.filter((myFood) => myFood._id !== _id);
            setMyFoods(remaining);
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
        <td>{name}</td>
        <td>{email}</td>
        <td>{date}</td>
        <th>
          {
            status === 'confirm' ?
            <span  className='btn btn-ghost btn-xs'>Delivered</span>
            :
            <button
              onClick={() => handleConfirm(_id)}
              className='btn btn-ghost btn-xs'>
              Pending
            </button>
          }
        </th>
        <th>
        <button
            onClick={() => handleDelete(_id)}
            className='btn btn-ghost btn-sm'>
            Cancel
          </button>
        </th>
      </tr>
    </>
  );
};

export default TableRow;
