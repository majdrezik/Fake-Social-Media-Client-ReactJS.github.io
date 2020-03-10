import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

class Navbar extends Component {
  render() {
    return (
      // <nav class="navbar navbar sticky">
      //   <a class="navbar-brand">
      //     <b className="navbar-font">MyMedia</b>
      //   </a>
      //   <ul>
      //     <li>
      //       <i className="fa fa-inbox fa-x"> </i>
      //     </li>
      //     <li>
      //       <i className="fa fa-users fa-x"></i>
      //     </li>
      //     <li>
      //       <i className="fa fa-sign-out fa-x"></i>
      //     </li>
      //   </ul>
      //   <form class="form-inline">
      //     <input
      //       class="form-control mr-sm-2"
      //       type="search"
      //       placeholder="Search"
      //       aria-label="Search"
      //     ></input>
      //     <button class="btn btn-outline-info my-2 my-sm-0" type="submit">
      //       Search
      //     </button>
      //   </form>
      // </nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            <b>ProTech</b>
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Create
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li> */}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
