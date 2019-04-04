import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class SignUp extends Component {
  state = {
    userName: '',
    password: '',
    gender: '',
    token: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let formData = this.state;
    try {
      fetch('https://api.prontoitlabs.com/api/v1/user', {
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
          if (res.status === 200) {
            this.setState({
              token: res.data.data,
              status: res.status
            })
            toast.success("Account Created Successfully, Redirectiong to Login!", {
              position: toast.POSITION.TOP_CENTER,
              className: 'foo-bar'
            })

            localStorage.setItem('token', res.data.data.token);
            localStorage.setItem('user', res.data.data.user);
            setTimeout(() => {
              this.props.history.push('/signin');
            }, 3000);
          } else {
            toast.error("Something Went Wrong.", {
              position: toast.POSITION.TOP_CENTER,
              className: 'foo-bar'
            })
          }
        }))
    } catch (error) {
      console.error('Signup Error ',error);
    }
  }
  render(props) {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="userName">User Name</label>
            <input type="text" id="userName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <p>
            <label>
              <input name="gender" id="gender" value='FEMALE' onChange={this.handleChange} type="radio" />
              <span>Female</span>
            </label>
          </p>
          <p>
            <label>
              <input name="gender" id="gender" value='MALE' onChange={this.handleChange} type="radio" />
              <span>Male</span>
            </label>
          </p>
          <p>
            <label>
              <input name="gender" id="gender" value='OTHERS' onChange={this.handleChange} type="radio" />
              <span>Others</span>
            </label>
          </p>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">SignUp</button>
          </div>
        </form>
        <ToastContainer autoClose={3000} />
      </div>
    )
  }
}

export default SignUp
