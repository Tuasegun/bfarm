import React from "react";
import styled from "styled-components";
import farmGallery from "../images/image-1.svg";

export default function About() {
  return (
    <AboutContainer>
      <div className="about-content">
        <div className="about-text">
          <p>
            Food Farming is proud of our past and excited about our future. We
            strive to continue being one of India and New Zealand's great food
            companies, offering quality fruits and vegetable. Food Farming is
            proud of our past and excited about our future. We strive to
            continue being one of India and New Zealand's great food companies,
            offering quality fruits and vegetable. Food Farming is proud of our
            past and excited about our future. We strive to continue being one
            of India and New Zealand's great food companies, offering quality
            fruits and vegetable. Food Farming is proud of our past and excited
            about our future. We strive to continue being one of India and New
            Zealand's great food companies, offering quality fruits and
            vegetable.
          </p>
        </div>
        <div className="about-image">
          <img src={farmGallery} alt="farm gallery" />
        </div>
      </div>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  margin: 0rem 1.5rem;
  background: #f9fff8;
  padding: 2rem 5rem;
  .about-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .about-text {
      max-width: 30rem;
      p {
        line-height: 1.6;
      }
    }
    .about-image {
      img {
        width: 80%;
      }
    }
    @media screen and (max-width: 765px) {
      display: flex;
      flex-direction: column-reverse;
      .about-text {
        padding-top: 2rem;
      }
      .about-image {
        img {
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 765px) {
    padding: 3rem 1rem;
  }
`;
