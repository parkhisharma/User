import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const renderNavLinks = (props) => {
  if(props.token && props.token.length){
    return <SignedInLinks logout={props.onLogout}></SignedInLinks>
  }else{
    return <SignedOutLinks></SignedOutLinks>
  }
}

const Navbar = (props) => (
  <nav className="nav-wrapper grey darken-3">
    <div className="container">
      <Link to='/' className="brand-logo">User Authentication</Link>
      {renderNavLinks(props)}
    </div>
  </nav>
)
export default Navbar