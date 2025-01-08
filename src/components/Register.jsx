import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'> 
            <div className="card bg-white w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center'>Register your account</h2>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" className="input input-bordered rounded-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Enter your photo url" className="input input-bordered rounded-none" required />
                    </div>
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] rounded-none text-white">Register</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>Already Have An Account ? <Link to="/auth/login" className='text-[#FF8C47] underline'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;