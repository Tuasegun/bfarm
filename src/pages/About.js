import React from "react";
import styled from "styled-components";
import farmGallery from "../components/images/image-1.svg";

export default function About() {
  return (
    <AboutContainer>
      <div className="about-content">
        <div className="about-text">
          <p>
            Bifarin Farms is a family owned-farm founded by Olatomiwa and
            Olatokunbo Bifarin. The farm is led by Olatokunbo Bifarin, Ph.D., an
            agricultural expert with a doctorate in agricultural economics. He
            has over 20 years of experience teaching agriculturists and farmers
            at the Federal College of Agriculture, Akure, Nigeria. Bifarin Farms
            has an array of enterprises, including livestock production such as
            pig and cattle farming. Plantation such as cassava farming and
            value-added products such as Garri.
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
