import React,{Component} from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

class Navbar extends Component{
  state={
    token:localStorage.getItem('token'),
  }
  handleLogout=()=>{
    localStorage.removeItem('token')
    this.setState({
      token:'',
    })
  }
  render(){
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to='/' className="brand-logo">User Authentication</Link>
          {
            this.state.token && this.state.token.length ? (
              <SignedInLinks logout={this.handleLogout}></SignedInLinks>
            ):(
              <SignedOutLinks></SignedOutLinks>
            )}
          
        </div>
      </nav>
    )
  }
}
export default Navbar