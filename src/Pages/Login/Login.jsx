import { Link } from "react-router-dom";

const Login = () => {
    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-2xl font-bold text-center text-yellow-400">Login now</h1>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-yellow-500 text-white">Login</button>
        </div>
        <p className='p-4'>
                Do not have an account?
                <Link
                  className='text-pink-700 font-semibold ml-2'
                  to='/register'>
                  Register
                </Link>
              </p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;