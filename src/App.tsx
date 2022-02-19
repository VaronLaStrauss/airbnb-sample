import React from "react";
import "./App.scss";
import CoverComponent from "./components/cover/cover";
import ExperienceComponent from "./components/experience/experience";
import HeaderComponent from "./components/header/header";
import { Experience } from "./types/experience";

class App extends React.Component {
  _experiences: Experience[] = [
    {
      imgUrl: "/assets/culinary.jpg",
      location: "Manila",
      numberOfRatings: 12,
      pricing: {
        currency: "$",
        price: 500,
        unit: "Person",
      },
      rating: 4.5,
      shortDescription: "Learn how to cook delicious food",
      status: "Available",
    },
    {
      imgUrl: "/assets/instructor.jpg",
      location: "Manila",
      numberOfRatings: 3,
      pricing: {
        currency: "$",
        price: 500,
        unit: "Person",
      },
      rating: 4.2,
      shortDescription: "Swim accross the Pacific",
      status: "Sold Out",
    },
    {
      imgUrl: "/assets/trekking.jpg",
      location: "Siquijor",
      numberOfRatings: 6,
      pricing: {
        currency: "$",
        price: 500,
        unit: "Person",
      },
      rating: 4,
      shortDescription: "Go up the hills of Bohol and meet witches",
      status: "Available",
    },
    {
      imgUrl: "/assets/wedding.jpg",
      location: "Cavite",
      numberOfRatings: 29,
      pricing: {
        currency: "$",
        price: 500,
        unit: "Person",
      },
      rating: 4.9,
      shortDescription: "Let's get married",
      status: "Online",
    },
    {
      imgUrl: "/assets/culinary.jpg",
      location: "Manila",
      numberOfRatings: 12,
      pricing: {
        currency: "$",
        price: 500,
        unit: "Person",
      },
      rating: 4.5,
      shortDescription: "Learn how to cook delicious food",
      status: "Available",
    },
    {
      imgUrl: "/assets/instructor.jpg",
      location: "Manila",
      numberOfRatings: 3,
      pricing: {
        currency: "$",
        price: 500,
        unit: "Person",
      },
      rating: 4.2,
      shortDescription: "Swim accross the Pacific",
      status: "Sold Out",
    },
    {
      imgUrl: "/assets/trekking.jpg",
      location: "Siquijor",
      numberOfRatings: 6,
      pricing: {
        currency: "$",
        price: 500,
        unit: "Person",
      },
      rating: 4,
      shortDescription: "Go up the hills of Bohol and meet witches",
      status: "Available",
    },
    {
      imgUrl: "/assets/wedding.jpg",
      location: "Cavite",
      numberOfRatings: 29,
      pricing: {
        currency: "$",
        price: 500,
        unit: "Person",
      },
      rating: 4.9,
      shortDescription: "Let's get married",
      status: "Online",
    },
  ];

  render(): React.ReactNode {
    return (
      <div className="app">
        <HeaderComponent />
        <div className="content">
          <CoverComponent />
          <div className="experience-container">{this.experiences}</div>
        </div>
      </div>
    );
  }

  get experiences() {
    return this._experiences.map((exp, i) => {
      return <ExperienceComponent key={i} {...exp} />;
    });
  }
}

export default App;
