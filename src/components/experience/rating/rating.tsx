import { Component, ReactNode } from "react";
import "./rating.scss";

export default class RatingComponent extends Component {
  render(): ReactNode {
    const { numberOfRatings, rating } = this.props as {
      rating: number;
      numberOfRatings: number;
    };

    return (
      <div className="rating">
        <span className="star material-icons">star</span>
        <span>
          {rating.toFixed(1)}{" "}
          <span className="muted">({numberOfRatings.toFixed(0)})</span>
        </span>
      </div>
    );
  }
}
