import React, { Component } from "react";
import { connect } from "react-redux"; //HOC to connect to the redux store
class Dashboard extends Component {

  render() {
    // console.log(this.props);
    const { projects } = this.props;
    return (
      <div className="container section project-details">
        <div className="card z-depth-1 blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Welcome</span>
            <p>This is a very basic login signup appliction.</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}
export default connect(mapStateToProps)(Dashboard)