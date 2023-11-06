import Swal from "sweetalert2";
import Footer from "../../Components/Footer/Footer";

const AddFood = () => {
    const handleAddFoods = e =>{
        e.preventDefault()

        const form = e.target;
        const food_name = form.food_name.value;
        const food_image = form.food_image.value;
        const donar_image = form.donar_image.value;
        const donar_name = form.donar_name.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const date = form.date.value;
        const notes = form.notes.value;
    
        const newFoods = { food_image, food_name, donar_image, donar_name, quantity, location, date, notes };
        console.log(newFoods);

        // send data to the server
        fetch('http://localhost:5000/foods',{
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(newFoods)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: "Thanks!",
              text: "Your Donation Has Been Added",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });   
    }
    return (
        <div>
        <div
          className='container mx-auto mt-20'
          data-aos='fade-up'
          data-aos-duration='500'>
          <div className=' bg-slate-200 p-20 '>
            <h2 className='text-4xl font-extrabold bg-gradient-to-r from-yellow-100 via-yellow-500 to-gray-300 text-transparent bg-clip-text text-center'>
              Add Your Favorite Products
            </h2>
            <form onSubmit={handleAddFoods}>
              {/* form brand name and product name row */}
              <div className='md:flex gap-3'>
                <div className='form-control md:w-1/2'>
                  <label className='label'>
                    <span className='label-text'>Food Name</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='food_name'
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
                      type='text'
                      placeholder='image url'
                      className='input input-bordered w-full'
                    />
                  </label>
                </div>
              </div>
              {/* form details and rating row */}
              <div className='md:flex gap-3'>
                <div className='form-control md:w-1/2'>
                  <label className='label'>
                    <span className='label-text'>Donar Name</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='donar_name'
                      type='text'
                      placeholder='donar name'
                      className='input input-bordered w-full'
                    />
                  </label>
                </div>
                <div className='form-control md:w-1/2'>
                  <label className='label'>
                    <span className='label-text'>Donar Image</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='donar_image'
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
                      type=''
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
                      type=''
                      placeholder='notes'
                      className='input input-bordered w-full'
                    />
                  </label>
                </div>
                {/* <div className='form-control md:w-1/2'>
                  <label className='label'>
                    <span className='label-text'>Category</span>
                  </label>
                  <label className='input-group'>
                    <select
                      name='category'
                      type='text'
                      placeholder='my categories'
                      className='input input-bordered w-full'
                    >
                      <option disabled>Choose Categories</option>
                      <option value="shirt">Shirt</option>
                      <option value="tShirt">T-Shirt</option>
                      <option value="shoe">Shoe</option>
                    </select>
                  </label>
                </div> */}
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

export default AddFood;