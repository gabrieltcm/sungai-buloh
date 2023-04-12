import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Carousel.scss";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// Slides
import slide1 from "../../images/20230412_152049.jpg";
import slide2 from "../../images/20230412_152348.jpg";

const items = [
  {
    src: slide1,
    altText: "Sungai Buloh 1",
    //captionHead: "Caption 1",
    // caption: (
    //   <Link className="redBlack" to="/red-and-black">
    //     Explore the Red &amp; Black
    //   </Link>
    // ),
  },
  {
    src: slide2,
    altText: "Sungai Buloh 2",
    // captionHead: "Caption 2",
    // caption: (
    //   <Link className="blackBeauty" to="/black-beauty">
    //     Explore the Black Beauty
    //   </Link>
    // ),
  },
];

const Carousell = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="slideContainer"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="slides" src={item.src} alt={item.altText} />

        <CarouselCaption
          className="captionAnimation"
          captionHeader={item.captionHead}
          captionText={item.caption}
        ></CarouselCaption>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      ride={"carousel"}
      interval={6000}
      pause={false}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Carousell;
