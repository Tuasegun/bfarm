import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "../images/pig-new.png";
import maize from "../images/corn-isolated 1.png";

const Slider = () => {
  return (
    <CarouselWrapper>
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showIndicators
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false}
        width={"100%"}
        interval={5000}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            marginLeft: 10,

            color: "white",
            cursor: "pointer",
            height: "10px",
            width: "10px",
            borderRadius: "50%",
            background: "#DBDBDB",
          };
          const style = isSelected
            ? { ...defStyle, backgroundColor: "#43a22a" }
            : { ...defStyle, backgroundColor: "#DBDBDB" };
          return (
            <div
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            ></div>
          );
        }}
      >
        <Link to="/Products">
          <div className="banner">
            <img src={maize} alt="maize" />
          </div>
        </Link>
        <Link to="Invest">
          <div className="banner">
            <img src={banner} alt="farm banner" />
          </div>
        </Link>
      </Carousel>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  .banner {
    img {
      width: 30rem;
      height: 30rem;
      cursor: pointer;
      object-fit: contain;
    }
  }
  .control-dots {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default Slider;
