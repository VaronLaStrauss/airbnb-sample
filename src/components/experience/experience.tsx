import { Component, ReactNode } from "react";
import { Experience } from "../../types/experience";
import "./experience.scss";
import RatingComponent from "./rating/rating";

export default class ExperienceComponent extends Component {
  render(): ReactNode {
    const {
      imgUrl,
      location,
      numberOfRatings,
      rating,
      pricing: { currency, unit, price },
      shortDescription,
      status,
    } = this.props as Experience;

    return (
      <div className="experience card">
        <div className="status">
          <span>{status}</span>
        </div>
        <div className="img-cont">
          <img src={imgUrl} alt="" />
        </div>
        <div className="information">
          <div>
            <RatingComponent {...{ rating, numberOfRatings }} />
            <span className="location muted">&nbsp;- {location}</span>
          </div>
          <div className="description">{shortDescription}</div>
          <div>
            <span className="bold">
              From {currency}
              {price}
            </span>
            <span>&nbsp;/ {unit.toLowerCase()}</span>
          </div>
        </div>
      </div>
    );
  }
}
