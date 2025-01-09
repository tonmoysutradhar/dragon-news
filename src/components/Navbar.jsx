import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from "../assets/user.png"
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const { user , logOut } = useContext(AuthContext);

    return (
        <div className='flex justify-between items-center'>
            <div>
                {user?.email}
            </div>
            <div className='space-x-4'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex gap-2 items-center'>
                <div>
                    <img src={userIcon} alt="user" />
                </div>
                {
                    user && user?.email ? (
                        <button onClick={logOut} className='btn btn-neutral rounded-none'>Log Out</button>
                    ) 
                    :
                    <Link to="/auth/login" className='btn btn-neutral rounded-none'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;