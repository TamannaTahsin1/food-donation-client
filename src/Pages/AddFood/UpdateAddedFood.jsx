import { useLoaderData } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const UpdateAddedFood = () => {
    const {user} = useContext(AuthContext)
    const addedFoods = useLoaderData()
    console.log(addedFoods)
    const { _id, food_name, quantity, food_image, date, location, notes } =
    addedFoods || {};
    const handleUpdateFoods = (e) => {
        e.preventDefault();
    
        const form = e.target;
        const food_name = form.food_name.value;
        const name = user?.name;
        const email = user?.email;
        const food_image = form.food_image.value;
        const donar_image = form.donar_image.value;
        const donar_name = form.donar_name.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const date = form.date.value;
        const notes = form.notes.value;
    
        const updatedFoods = {
          donarName : name,
          email,
          food_image,
          food_name,
          donar_image,
          donar_name,
          quantity,
          location,
          date,
          notes,
        };
        console.log(updatedFoods);
    
        // send data to the server
        fetch(`https://food-donation-server-sooty.vercel.app/foods/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedFoods),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Thanks!",
                text: "Your Donation Has Been Updated",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
      };
    return (
        <div>
        <div
          className='container mx-auto mt-20'
          data-aos='fade-up'
          data-aos-duration='500'>
          <div className=' bg-slate-200 p-20 '>
            <h2 className='text-4xl font-extrabold bg-gradient-to-r from-yellow-100 via-yellow-500 to-gray-300 text-transparent bg-clip-text text-center'>
              Update Your Donation
            </h2>
            <form onSubmit={handleUpdateFoods}>
              {/* user name and email */}
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
              {/* form brand name and product name row */}
              <div className='md:flex gap-3'>
                <div className='form-control md:w-1/2'>
                  <label className='label'>
                    <span className='label-text'>Food Name</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='food_name'
                      defaultValue={food_name}
                      type='text'
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
                      defaultValue={food_image}
                      type='text'
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
                      defaultValue={quantity}
                      type='text'
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
                      defaultValue={date}
                      type='date'
                      placeholder='date'
                      className='input input-bordered w-full'
                    />
                  </label>
                </div>
              </div>
              <div className='md:flex gap-3'>
                <div className='form-control md:w-1/2 mb-7'>
                  <label className='label'>
                    <span className='label-text'>Location</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='location'
                      defaultValue={location}
                      type='text'
                      placeholder='Location'
                      className='input input-bordered w-full'
                    />
                  </label>
                </div>
                <div className='form-control md:w-1/2'>
                  <label className='label'>
                    <span className='label-text'>Additional Notes</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='notes'
                      defaultValue={notes}
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
                  value='Donate Now'
                  className='btn border-none bg-gradient-to-r from-yellow-200 to-yellow-600 hover:from-red-500 hover:to-orange-500 text-white w-full'
                />
              </div>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default UpdateAddedFood;