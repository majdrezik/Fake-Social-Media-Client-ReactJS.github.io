import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

class Navbar extends Component {
  render() {
    return (
      //   <div>
      //     <nav className="navbar navbar-light navbar-static-top bg-light justify-content-between">
      //       <a className="navbar-inner-brand">
      //         <i className="fa fa-foursquare  navColor fa-3x"></i>
      //         <b className="navColor ml-0.5 nav-font">ake</b>
      //       </a>

      //       <a href="#">
      //         <i className="fa fa-user-friends fa-2x"></i>
      //       </a>
      //       <a href="#">
      //         <i className="fa fa-envelope fa-2x"></i>
      //       </a>
      //       <a>
      //         <i className="fa fa-sign-out-alt"></i>
      //       </a>
      //       <form className="form-inline">
      //         <input
      //           className="form-control mr-sm-2"
      //           type="search"
      //           placeholder="Search"
      //           aria-label="Search"
      //         ></input>
      //         <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
      //           Search
      //         </button>
      //       </form>
      //     </nav>
      //   </div>

      <nav class="navbar navbar-dark bg-dark sticky">
        <a class="navbar-brand">
          <b className="navbar-font">MyMedia</b>
        </a>
        <ul>
          <li>
            <i className="fa fa-inbox fa-x"></i>
          </li>
          <li>
            <i className="fa fa-users fa-x"></i>
          </li>
          <li>
            <i className="fa fa-sign-out fa-x"></i>
          </li>
        </ul>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button class="btn btn-outline-info my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default Navbar;
