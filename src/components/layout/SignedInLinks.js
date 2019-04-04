import React, {Component} from "react";
import { NavLink } from "react-router-dom";


class SignedInLinks extends Component{
  handleClick=()=>{
    this.props.logout('')
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
        <li>
          <NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink>
        </li>
      
      </ul>
    )
  }
}
export default SignedInLinks