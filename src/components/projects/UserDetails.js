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
    try {
      fetch('https://api.prontoitlabs.com/api/v1/user?page='+pageNumber+'&size=25', {
        method: 'GET',
        headers: {
          'X-AUTH-TOKEN': token,
        },
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
    this.setState({
      currentPage: Number(event.target.id)
    },()=>{
      this.getPageData(this.state.currentPage);
    });
  }
  renderPageinationBar = () => {
    let pages = this.state.totalPages;
    const pageButtons = [];
    // Pagination can be improved with styling, but focusing on functionality on priority.
    for (let i = 0; i < pages; i++) {
      pageButtons.push(<li className="waves-effect"  onClick={this.handleClick}><a href="#!" id = {i}>{i+1}</a></li>);
    }
    return pageButtons;
  }
  renderUserData = () => {
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
      })
    ) : (
        <div className="">
            <span className="card-title"> Nothing here</span>
            <p>There is no user in the list!! </p>
        </div>
      )
    return UserList;
  }
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
