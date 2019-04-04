import React,{Component} from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

class Navbar extends Component{
  state={
    token:localStorage.getItem('token'),
  }
  handleLogout=(value)=>{
    console.log('here');
    localStorage.removeItem('token')
    setTimeout(() => {
      // this.props.history.push('/');
    }, 10);
    this.setState({
      token:value,
    })
  }
  render(){
    console.log(this.state);
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to='/' className="brand-logo">User</Link>
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