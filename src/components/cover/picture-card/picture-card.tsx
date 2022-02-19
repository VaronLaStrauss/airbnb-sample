import { Component, ReactNode } from "react";
import "./picture-card.scss";

export default class PictureCardComponent extends Component {
  render(): ReactNode {
    const shouldSpanTwo = Math.random() > 0.5;
    const style = {
      "--row-height": shouldSpanTwo ? 2 : 1,
    } as React.CSSProperties;

    const { src } = this.props as { src: string };
    return (
      <div className="picture-card" style={style}>
        <img src={src} alt="logo" />
      </div>
    );
  }
}
