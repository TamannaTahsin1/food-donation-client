/** @format */

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Register = () => {
  const {createUser} = useContext(AuthContext)
    // error
    const [registerError, setRegisterError] = useState("");
    const [registerSuccess, setRegisterSuccess] = useState("");
  // handle form
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name')
    const photo = form.get('photo')
    const email = form.get('email')
    const password = form.get('password')
    console.log(name, photo,email, password)
    console.log(form);

    // validation
    if(password.length < 6){
      toast.error("Password must be at least 6 characters");
      return
    }
    else if (!/^[a-zA-Z0-9._%+-]/.test(password)) {
      toast.error("Password should be at least 6 characters")
      return;
    }
        // reset success and error
        setRegisterError("");
        setRegisterSuccess("");

    // create user
    createUser(email, password)
    .then(result =>{
      console.log(result.user)
      Swal.fire({
        title: 'Success!',
        text: 'User Created Successfully!',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    })
    .catch(error =>{
      console.error(error)
    })
  };
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Register now!</h1>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <h1 className='text-2xl font-bold text-center text-yellow-400'>
            Register now
          </h1>
          <form onSubmit={handleRegister} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Your Name</span>
              </label>
              <input
                name='name'
                type='text'
                placeholder='name'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Photo</span>
              </label>
              <input
                name='photo'
                type='text'
                placeholder='photo url'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                name='email'
                type='email'
                placeholder='abc@gmail.com'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                name='password'
                type='password'
                placeholder='password'
                className='input input-bordered'
                required
              />
            </div>
            <label className='label'>
                {registerError && (
                  <p className='text-red-600'>{registerError}</p>
                )}
                {registerSuccess && (
                  <p className='text-green-600'>{registerSuccess}</p>
                )}
              </label>
            <div className='form-control mt-6'>
              <button className='btn bg-yellow-500 text-white'>Register</button>
            </div>
            <p className='p-4'>
              Already have an account!
              <Link className='text-pink-700 font-semibold ml-2' to='/login'>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
