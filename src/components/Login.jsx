import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'> 
            <div className="card bg-white w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center'>Login your account</h2>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email address</span>
                        </label>
                        <input type="email" placeholder="Enter your email address" className="input input-bordered rounded-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" className="input input-bordered rounded-none" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] rounded-none text-white">Login</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>Dont’t Have An Account ? <Link to="/auth/register" className='text-[#FF8C47] underline'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;