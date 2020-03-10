import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

import m2 from "../pics/male_avatar/avatar_male2.png";

class Feed extends Component {
  render() {
    return (
      <div>
        <div id="container2" className="div">
          <div id="first">
            <img src={m2} className="avatar" alt=""></img>
          </div>
          <div className="card border-0 ml-0 " id="second2">
            <div className="card-body p-0">
              <h5 className="card-title">
                <div>
                  <input
                    type="text"
                    placeholder="What's on your mind, Joe?"
                    className="pF borderless"
                  ></input>
                </div>
              </h5>
            </div>
            <div className="mb-5"></div>
            <div>
              <button type="button" class="btn btn-light ">
                <i className="fa fa-image "> </i>
                <span className="newFeedIconFont"> Photo/Video </span>
              </button>
              <button type="button" class="btn btn-light ml-2">
                <i className="fa fa-user ml-4">
                  <span className="newFeedIconFont"> Tag Friends </span>
                </i>
              </button>
              <button type="button" class="btn btn-light ml-2">
                <i className="fa fa-location-arrow">
                  <span className="newFeedIconFont"> Check in</span>
                </i>
              </button>
              <button type="button" class="btn btn-light ml-2">
                <i className="fa fa-ellipsis-h ml-4"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
