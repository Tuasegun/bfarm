import React from "react";
import styled from "styled-components";
import pig1 from "../components/images/image-1.png";
import pig2 from "../components/images/image-2.png";
import pig3 from "../components/images/image-3.png";
import pig4 from "../components/images/image-4.png";
import pig5 from "../components/images/image-5.png";

function Garri() {
  return (
    <>
      <GalleryHeader>
        <h1>Gallery</h1>
      </GalleryHeader>
      <GalleryContainer>
        <div className="gallery">
          <div className="flex-image">
            <a href={pig1}>
              <img src={pig1} alt="pig" />
            </a>
            <a href={pig2}>
              <img src={pig2} alt="pig" />
            </a>
          </div>
          <div className="flex-image2">
            <a href={pig3}>
              <img src={pig3} alt="pig" />
            </a>
            <a href={pig4}>
              <img src={pig4} alt="pig" />
            </a>
            <a href={pig5}>
              <img src={pig5} alt="pig" />
            </a>
          </div>
        </div>
      </GalleryContainer>
    </>
  );
}

const GalleryHeader = styled.div`
  padding: 2rem 0rem 0rem 5rem;
  h1 {
    font-family: "Playfair Display", serif;
    font-weight: light;
  }
  @media screen and (max-width: 765px) {
    padding: 3rem 0rem 0rem 1rem;
  }
`;

const GalleryContainer = styled.div`
  padding: 2rem 5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 0.7rem;
  .gallery {
    flex: 25%;

    padding: 0 4px;
    img {
      margin-top: 8px;
      vertical-align: middle;
      cursor: pointer;
    }
    .flex-image {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
      padding: 0.5rem 0;
    }
    .flex-image2 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 1rem;
      padding: 0.5rem 0;
    }
    @media screen and (max-width: 800px) {
      flex: 50%;
    }
    @media screen and (max-width: 600px) {
      flex: 100%;
    }
  }
  @media screen and (max-width: 765px) {
    padding: 3rem 1rem;
  }
`;

export default Garri;
