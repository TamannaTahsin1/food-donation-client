/** @format */

import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/img/login.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "./SocialLogin";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const {logIn} = useContext(AuthContext)
  const location = useLocation()
  console.log(location);
  const navigate = useNavigate()

  // handle login form
  const handleLogin = e =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password)
    // create user
    logIn(email, password)
    .then(result =>{
      const user ={email}
      const loggedInUser =result.user
      console.log(loggedInUser);
      toast.success('Successfully Logged in!',
      {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
      // get access token
      axios.post('http://localhost:5000/jwt', user,{withCredentials: true})
      .then(res =>{
        console.log(res.data)
        if(res.data.success){
      // navigate after login
      navigate(location?.state ? location.state : '/')
        }
      })
    })
    .catch(error =>{
      console.log(error)
    })
  }
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='ml-20 w-1/2'>
          <img src={login} alt='' className='w-[450px]' />
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <h1 className='text-3xl font-bold text-center text-yellow-300 p-4'>
            Login
          </h1>
          <form onSubmit={handleLogin} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                name='email'
                type='email'
                placeholder='email'
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
            <div className='form-control mt-6'>
              <button className='btn bg-yellow-600 text-white'>Login</button>
            </div>
            <p className='p-4'>
              Do not have an account?
              <Link className='text-pink-700 font-semibold ml-2' to='/register'>
                Register
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
