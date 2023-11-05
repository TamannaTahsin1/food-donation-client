/** @format */

import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  // for logout
  const handleLogout = () =>{
    logOut()
    .then()
    .catch()
  }
  const navLinks = (
    <>
      <li className='font-bold'>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold bg-yellow-500"
              : ""
          }>
          HOME
        </NavLink>
      </li>
      <li className='font-bold'>
        <NavLink
          to='/availableFoods'
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold bg-yellow-500"
              : ""
          }>
          AVAILABLE FOODS
        </NavLink>
      </li>
      <li className='font-bold'>
        <NavLink
          to='/addFood'
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold bg-yellow-500"
              : ""
          }>
          ADD FOOD
        </NavLink>
      </li>
      <li className='font-bold'>
        <NavLink
          to='/manageFoods'
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold bg-yellow-500"
              : ""
          }>
          MANAGE MY FOODS
        </NavLink>
      </li>
    </>
  );
  return (
<div className="container mx-auto">
<div className='navbar bg-base-300'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
                {navLinks}
          </ul>
        </div>
        <img src={logo} alt="" /> 
        <p className="font-bold text-2xl bg-gradient-to-r from-yellow-100 via-yellow-500 to-gray-300 text-transparent bg-clip-text">Food Flow</p>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
            {navLinks}
        </ul>
      </div>
      <div className='navbar-end'>
        {
          user ? 
          <button onClick={handleLogout} className="btn border-none bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-red-500 hover:to-orange-500 text-white">Logout</button>
          :
          <Link to='/login' className="btn border-none bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-red-500 hover:to-orange-500 text-white">Login</Link>
        }       
      </div>
    </div>
</div>
  );
};

export default Navbar;


