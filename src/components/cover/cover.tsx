import { Component, ReactNode } from "react";
import "./cover.scss";
import PictureCardComponent from "./picture-card/picture-card";

export default class CoverComponent extends Component {
  imgSrcs = [
    "/assets/culinary.jpg",
    "/assets/instructor.jpg",
    "/assets/trekking.jpg",
    "/assets/wedding.jpg",
    "/assets/culinary.jpg",
    "/assets/instructor.jpg",
    "/assets/trekking.jpg",
    "/assets/wedding.jpg",
  ];

  render(): ReactNode {
    return (
      <div className="cover-container">
        <div className="picture-cards">{this.images}</div>
        <div className="description">
          <h1>Online Experiences</h1>
          <div className="txt">
            Join unique interactive activities led by one-of-a-kind hosts - all
            without leaving home
          </div>
        </div>
      </div>
    );
  }

  get images() {
    return this.imgSrcs.map((src, i) => {
      return <PictureCardComponent key={i} {...{ src }} />;
    });
  }
}
