import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const FoodDetailsCard = ({ foodDetail }) => {
  const features = useLoaderData();
  const {user} = useContext(AuthContext)
  console.log(features)
  const {
    food_image,
    donar_name,
    donar_image,
    food_name,
    quantity,
    date,
    location,
  } = foodDetail || {};
  // handle form
  const handleDonate = e =>{
    e.preventDefault();
    const form = e.target;
    const name = user?.name;
    const email = user?.email;
    const food_name = form.food_name.value;
    const food_image = form.food_image.value;
    const date = form.date.value;
    const donate = form.donate.value;
    const notes = form.notes.value;

    const donation = {
      donarName : name,
      email,
      food_name,
      food_image,
      date,
      donate,
      notes
    }
    console.log(donation)
    // send data in db
    fetch('http://localhost:5000/donations',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(donation)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Yes',
          text: 'Request Successful',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }
  return (
    <div>
      <div className='card w-80 h-[600px] lg:w-[500px] glass'>
        <figure>
          <img src={food_image} alt='car!' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-yellow-500'>{food_name}</h2>
          <p className='font-bold'>Quantity: {quantity}</p>
          <p className='font-bold'>Date: {date}</p>
          <div className='card-actions justify-end'>
            {/* modal */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className='btn border-none bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-600 from-red-500 to-orange-500 text-white'
              onClick={() => document.getElementById("my_modal_1").showModal()}>
              Request
            </button>
            <dialog id='my_modal_1' className='modal'>
              <div className='modal-box'>
                <h3 className='font-bold text-lg text-center text-yellow-500'>Donate Now</h3>
              {/* form */}
              <div
          className='container mx-auto mt-20'
          data-aos='fade-up'
          data-aos-duration='500'>
          <div className=' bg-base-200 p-10 '>
            <form onSubmit={handleDonate}>
              {/* form brand name and product name row */}
              <div className='md:flex gap-3'>
                <div className='form-control md:w-1/2'>
                  <label className='label'>
                    <span className='label-text'>Donar Name</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='name'
                      type='text'
                      defaultValue={user?.displayName}
                      placeholder='name'
                      className='input input-bordered w-full'
                    />
                  </label>
                </div>
                <div className='form-control md:w-1/2'>
                  <label className='label'>
                    <span className='label-text'>Donar Email</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='email'
                      type='email'
                      defaultValue={user?.email}
                      placeholder='email@gmail.com'
                      className='input input-bordered w-full'
                    />
                  </label>
                </div>
              </div>
              <div className='md:flex gap-3'>
                <div className='form-control md:w-1/2'>
                  <label className='label'>
                    <span className='label-text'>Food Name</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='food_name'
                      type='text'
                      defaultValue={food_name}
                      placeholder='food name'
                      className='input input-bordered w-full'
                    />
                  </label>
                </div>
                <div className='form-control md:w-1/2'>
                  <label className='label'>
                    <span className='label-text'>Food Image</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='food_image'
                      type='text'
                      defaultValue={food_image}
                      placeholder='image url'
                      className='input input-bordered w-full'
                    />
                  </label>
                </div>
              </div>
              {/* form price and img row */}
              <div className='md:flex gap-3'>
                <div className='form-control md:w-1/2'>
                  <label className='label'>
                    <span className='label-text'>Quantity</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='quantity'
                      type='text'
                      defaultValue={quantity}
                      placeholder='quantity'
                      className='input input-bordered w-full'
                    />
                  </label>
                </div>
                <div className='form-control md:w-1/2'>
                  <label className='label'>
                    <span className='label-text'>Date</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='date'
                      type='date'
                      defaultValue={date}
                      placeholder='date'
                      className='input input-bordered w-full'
                    />
                  </label>
                </div>
              </div>
              <div className='md:flex gap-3'>
                <div className='form-control md:w-1/2'>
                  <label className='label'>
                    <span className='label-text'>Donate</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='donate'
                      type='text'
                      placeholder='donate here'
                      className='input input-bordered w-full'
                    />
                  </label>
                </div>
                <div className='form-control md:w-1/2 mb-7'>
                  <label className='label'>
                    <span className='label-text'>Additional Notes</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='notes'
                      type=''
                      placeholder='notes'
                      className='input input-bordered w-full'
                    />
                  </label>
                </div>
              </div>
              <div>
                <input
                  type='submit'
                  value='Request'
                  className='btn border-none bg-gradient-to-r from-yellow-200 to-yellow-600 hover:from-red-500 hover:to-orange-500 text-white w-full'
                />
              </div>
            </form>
          </div>
        </div>
                <div className='modal-action'>
                  <form method='dialog'>
                    {/* if there is a button in form, it will close the modal */}
                    <button className='btn'>Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      {/* donar info */}
      <div className='card w-full bg-neutral text-neutral-content mt-5'>
        <div className='card-body items-center text-center'>
          <h3 className="font-bold text-white text-center mb-5">Donar Info</h3>
          <div className='flex justify-between items-center gap-5'>
            <img src={donar_image} alt='' className='w-14 rounded-full' />
            <h2 className='card-title'>{donar_name}</h2>
          </div>
          <p className='font-bold mt-5'>
            Pickup Location: <span className='text-gray-500'>{location}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsCard;
