import React from "react";
import { NavLink } from "react-router-dom";

// This Component loads when user is not Logged In.
const SignedOutLinks =()=>{
  return (
    <ul className='right'>
      <li>
        <NavLink to='/signup'>Sign Up</NavLink>
      </li>
      <li>
        <NavLink to='/signin'>Login</NavLink>
      </li>
    </ul>
  )
}
export default SignedOutLinks