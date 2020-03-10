import React, { Component } from "react";
import "../styles.css";
import user from "../pics/male_avatar/avatar_male2.png";
import "font-awesome/css/font-awesome.min.css";

class Side extends Component {
  random1 = () => {
    return Math.floor(Math.random() * 5 + 1);
  };

  random2 = () => {
    return Math.floor(Math.random() * 10 + 1);
  };

  render() {
    return (
      <div className="side">
        <div className="btn-group-vertical block ">
          <button type="button" className="btn btn-secondary btn-lg block">
            <div className="align">
              <img src={user} className="avatarside" alt=""></img>
              <div className="emailFont">
                <h6> Joe Doe</h6>
                <h6 className="account">joe_doe@gmail.com</h6>
              </div>
            </div>
          </button>

          <button type="button" className="btn btn-secondary btn-lg block">
            <i className="fa fa-newspaper"></i>

            <div className="div1 newFeedIconFont">
              <i className="fa fa-rss-square">
                <span className="newFeedIconFont">
                  {" "}
                  <b>News Feed</b>
                </span>
              </i>
            </div>
            <div className="div2">
              <span className="number"> {this.random1()} </span>
            </div>
          </button>
          <button type="button" className="btn btn-secondary btn-lg block">
            <div className="div1 ">
              <i className="fa fa-inbox">
                {" "}
                <span className="newFeedIconFont"> Messenger</span>{" "}
              </i>
            </div>
            <div className="div2">
              <span className="number"> {this.random1()} </span>
            </div>
          </button>
          <button type="button" className="btn btn-secondary btn-lg block">
            <div className="div1">
              <i className="fa fa-tv">
                <span className="newFeedIconFont"> Watch </span>
              </i>
            </div>

            <div className="div2">
              <span className="number"> {this.random2()} </span>
            </div>
          </button>
          <button type="button" className="btn btn-secondary btn-lg block">
            <div className="div1">
              <i className="fa fa-shopping-cart">
                <span className="newFeedIconFont"> Marketplace</span>
              </i>
            </div>
            <div className="div2">
              <span className="number"> {this.random2()} </span>
            </div>
          </button>
          <button type="button" className="btn btn-secondary btn-lg block">
            <div className="div1">
              <i className="fa fa-flag">
                <span className="newFeedIconFont"> Pages</span>
              </i>
            </div>

            <div className="div2">
              <span className="number"> {this.random2()} </span>
            </div>
          </button>
          <button type="button" className="btn btn-secondary btn-lg block">
            <div className="div1">
              <i className="fa fa-users">
                <span className="newFeedIconFont"> Groups</span>
              </i>
            </div>
            <div className="div2">
              <span className="number"> {this.random2()} </span>
            </div>
          </button>
          <button type="button" className="btn btn-secondary btn-lg block">
            <div className="div1">
              <i className="fa fa-calendar">
                <span className="newFeedIconFont"> Events</span>
              </i>
            </div>
            <div className="div2">
              <span className="number"> {this.random2()} </span>
            </div>
          </button>
          <button type="button" className="btn btn-secondary btn-lg block">
            <div className="div1">
              <i className="fa fa-credit-card">
                <span className="newFeedIconFont"> Fundraisers</span>
              </i>
            </div>

            <div className="div2">
              <span className="number"> {this.random2()} </span>
            </div>
          </button>
          <button type="button" className="btn btn-secondary btn-lg block">
            <div className="div1">
              <i className="fa fa-money">
                <span className="newFeedIconFont"> Buy/Sell Groups</span>
              </i>
            </div>
            <div className="div2">
              <span className="number"> {this.random1()} </span>
            </div>
          </button>
          <button type="button" className="btn btn-secondary btn-lg block">
            <i className="fa fa-angle-down" title="does nothing!">
              <span className="newFeedIconFont"> See More...</span>
            </i>
          </button>
        </div>
      </div>
    );
  }
}

export default Side;
