import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class SignIn extends Component {
  componentDidMount(){    
  }
  state = {
    userName:'',
    password:''
  }
  handleChange = (e)=>{
   this.setState({
     [e.target.id]: e.target.value
   })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let formData = this.state;
    console.log("DSFASD",JSON.stringify(formData));
    try{
    fetch('https://api.prontoitlabs.com/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(response =>
      response.json().then(data => ({
        data: data,
        status: response.status
      })
      ).then(res => {
        if (res.status === 200 ) {
          localStorage.setItem('token',res.data.data.token);
          setTimeout(() => {
            this.props.history.push('/userdetails');
          }, 10);
        } else {
          toast.error("Something Went Wrong.", {
            position: toast.POSITION.TOP_CENTER,
            className: 'foo-bar'
          })
        }
      }))
  } catch (error) {
    console.error('Login Error ',error);
  }
  }
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Login</h5>
          <div className="input-field">
            <label htmlFor="userName">Username</label>
            <input type="text" id="userName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
        <ToastContainer autoClose={3000} />
      </div>
    )
  }
}

export default SignIn
