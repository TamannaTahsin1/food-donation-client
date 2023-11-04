/** @format */

import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
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
        <p className="font-bold text-2xl text-yellow-400">Food Flow</p>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
            {navLinks}
        </ul>
      </div>
      <div className='navbar-end'>
        <Link to='/login' className="btn btn-primary">Login</Link>
      </div>
    </div>
</div>
  );
};

export default Navbar;


