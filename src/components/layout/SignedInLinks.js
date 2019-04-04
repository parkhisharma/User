import React, {Component} from "react";
import { NavLink } from "react-router-dom";

// This Component loads when user is Logged In.

class SignedInLinks extends Component{
  handleClick=()=>{
    this.props.logout()
  }
  render(){
    return (
      <ul className='right'>
        <li>
          <NavLink to='/' onClick={this.handleClick}>Log Out</NavLink>
        </li>
        <li>
          <NavLink to='/userdetails' >User Details</NavLink>
        </li>
      </ul>
    )
  }
}
export default SignedInLinks