import React, { Component } from "react";
import image2 from "../pics/social_media/react2.png";
import image3 from "../pics/social_media/react3.png";
import image1 from "../pics/social_media/react1.jpg";
import m2 from "../pics/male_avatar/avatar_male2.png";
import m3 from "../pics/male_avatar/avatar_male3.png";
import m4 from "../pics/male_avatar/avatar_male4.png";
import m5 from "../pics/male_avatar/avatar_male5.png";
import f2 from "../pics/female_avatar/avatar_female2.jpg";
import f3 from "../pics/female_avatar/avatar_female3.png";
import f4 from "../pics/female_avatar/avatar_female4.png";
import f5 from "../pics/female_avatar/avatar_female5.png";
import f6 from "../pics/female_avatar/avatar_female6.png";
import male_avatar from "../pics/male_avatar/male_avatar-512.png";
import female_avatar from "../pics/female_avatar/female_avatar.png";
import facebook from "../pics/social_media/facebook.jpg";
import git from "../pics/social_media/git.png";
import github1 from "../pics/social_media/github1.jpg";
import github2 from "../pics/social_media/github2.png";
import github3 from "../pics/social_media/github3.png";
import instagram from "../pics/social_media/instagram.jpg";
import linkedin from "../pics/social_media/linkedin.jpg";
import linkedin2 from "../pics/social_media/linkedin2.png";
import "../styles.css";
import "font-awesome/css/font-awesome.min.css";
import App from "../App";

class Card extends Component {
  state = {
    name: ""
  };

  getImageUrl = () => {
    const images = [
      image1,
      image2,
      image3,
      facebook,
      git,
      github1,
      github2,
      github3,
      instagram,
      linkedin,
      linkedin2
    ];
    const index = Math.floor(Math.random() * 11);
    const imageUrl = images[index];
    return imageUrl;
  };

  getAvatar = () => {
    const images = [
      male_avatar,
      female_avatar,
      m2,
      m3,
      m4,
      m5,
      f2,
      f3,
      f4,
      f5,
      f6
    ];
    const index = Math.floor(Math.random() * 11);
    const avatar = images[index];
    return avatar;
  };

  getMessage = () => {
    const msgs = [
      "Hello Guys, Check out my first React.js app on Github!",
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications",
      "Hey guys, I'm so excited to be learning ReactJS!!",
      "Hello, did you see this cool picture of React.js?"
    ];
    const index = Math.floor(Math.random() * 3);
    const msg = msgs[index];
    return msg;
  };

  getLastUpdate = () => {
    return Math.floor(Math.random() * 60);
  };

  getComments = () => {
    return Math.floor(Math.random() * 150);
  };

  getLikes = () => {
    return Math.floor(Math.random() * 300);
  };

  getTweets = () => {
    return Math.floor(Math.random() * 70);
  };

  like = () => {
    return Math.floor(Math.random() * 2);
  };

  render() {
    return (
      <div id="container" className="div">
        <div id="first">
          <img src={this.getAvatar()} className="avatar" alt=""></img>
        </div>
        <div className="card border-0 ml-0 " id="second">
          <div className="card-body p-0">
            <h5 className="card-title">
              <b>{this.props.name}</b>
              <i className="fa fa-angle-down ad" title="does nothing!"></i>
              <p className="account"> {this.props.email}</p>
            </h5>
            <img src={this.getImageUrl()} className="photo mb-1" alt=""></img>
            <div>
              <p className="card-text p">"{this.getMessage()}"</p>
              {"\n\n"}
            </div>
          </div>
          <div className="mb-5">
            <p className="p2 card-text">
              <small className="text-muted">
                Last updated {this.getLastUpdate()} mins ago
              </small>
            </p>
          </div>
          <div className=" footer">
            <i className="fa fa-comment" title="Comment">
              <span className="font"> {this.getComments()} </span>
            </i>

            <i className="fa fa-heart ml-5" title="Like">
              <span className="fontR">{this.getLikes()}</span>
            </i>

            <i className="fa fa-retweet ml-5" title="Share">
              {this.getTweets()}
            </i>
            <i className="fa fa-envelope ml-5" title="Send message"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
