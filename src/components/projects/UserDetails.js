import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UserDetails extends Component {
  state = {
    content: '',
    totalPages: '',
    pageSize: '',
    currentPage:0
  }
  getPageData=(pageNumber)=>{
    let token = localStorage.getItem('token');
    console.log('called',token);
    try {
      fetch('https://api.prontoitlabs.com/api/v1/user?page='+pageNumber+'&size=25', {
        method: 'GET',
        headers: {
          'X-AUTH-TOKEN': token,
          // 'Content-Type': 'application/json'
        },
        // body: JSON.stringify(formData)
      }).then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        })
        ).then(res => {
          console.log('res', res);
          if (res.status == 200) {
            this.setState({
              token: res.data.data,
              status: res.status
            })
            console.log('res.data.data.user', res.data);
            this.setState({
              content: res.data.data.content,
              totalPages: res.data.data.totalPages,
              pageSize: res.data.data.currentPageSize,
              currentPage : res.data.data.currentPage
            })
          } else {
            toast.error("Something Went Wrong.", {
              position: toast.POSITION.TOP_CENTER,
              className: 'foo-bar'
            })
          }
        }))
    } catch (error) {
      console.error('Signup Error ', error);
    }
  }
  componentWillMount = () => {
    this.getPageData(this.state.currentPage);
  }
  handleClick= (event)=> {
    console.log('event.target.id', event.target);
    this.setState({
      currentPage: Number(event.target.id)
    },()=>{

      this.getPageData(this.state.currentPage);
    });
  }
  renderPageinationBar = () => {
    let pages = this.state.totalPages;
    const pageButtons = [];

    for (let i = 0; i < pages; i++) {
      pageButtons.push(<li className="waves-effect"  onClick={this.handleClick}><a href="#!" id = {i}>{i+1}</a></li>);
    }

    return pageButtons;

    // <div>

    // </div>
  }
  renderUserData = () => {
    console.log();
    let users = this.state.content;
    const UserList = users.length ? (
      users.map(user => {
        return (
          <tr>
            <td>{user.userName}</td>
            <td>{user.gender}</td>
            <td>{user.password}</td>
          </tr>
        )
      }
      )
    ) : (
        <div className="">
            <span className="card-title"> Nothing here</span>
            <p>There is no user in the list!! </p>
        </div>
      )
    return UserList;
  }
  // const id = props.match.params.id;
  render() {
    return (
      <div>
        <div className="container section project-details">
          <div className="card z-depth-1">
            <table className="striped highlight responsive-table" >
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Gender</th>
                  <th>password</th>
                </tr>
              </thead>
              <tbody>
                {this.renderUserData()}
              </tbody>
            </table>
          </div>

          <ul className="pagination center">
            {this.renderPageinationBar()}
          </ul>
        </div>
        <ToastContainer autoClose={3000} />
      </div>
    )
  }

}

export default UserDetails
