import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const {createNewUser, setUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, serError ] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        if (name.length < 5){
          serError({ ...error, name: "must be more than 5 character long"})
          return;
        }
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({name, photo, email, password});

        createNewUser(email, password)
        .then((result)=> {
            const user = result.user;
            setUser(user);
            updateUserProfile({displayName:name, photoURL:photo})
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
              console.error(err);
            })
        })
        .catch((error) => {
            console.error("Error",error.message);
        })
    }


  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-white w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          {
            error.name && (
              <label className="label text-xs text-red-500">
                {error.name} 
              </label>
            )
          }
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] rounded-none text-white">
              Register
            </button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already Have An Account ?{" "}
          <Link to="/auth/login" className="text-[#FF8C47] underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
