import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./SlideShowImage.css";
import meuleuse from "../images/meuleuse.jpg";
import poste from "../images/poste.jpg";
import tube from "../images/tube.jpg";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const Slideshow = () => {
  return (
    <div className="container">
      <Slide {...properties}>
        <div className="each-slide">
          <img src={meuleuse} class="img-slide" alt="meuleuse" />
        </div>
        <div className="each-slide">
          <img src={poste} class="img-slide" alt="poste" />
        </div>
        <div className="each-slide">
          <img src={tube} class="img-slide" alt="tube" />
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
