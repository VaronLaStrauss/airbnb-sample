import { Component, ReactNode } from "react";
import "./header.scss";
import logo from "./logo.png";

export default class HeaderComponent extends Component {
  render(): ReactNode {
    return (
      <header>
        <img src={logo} alt="logo" />
      </header>
    );
  }
}
