import React from "react";
import styled from "styled-components";
import garri1 from "../components/images/garri-1.png";
import garri2 from "../components/images/garri-2.png";
import garri3 from "../components/images/garri-3.png";
import garri4 from "../components/images/garri-4.png";
import garri5 from "../components/images/garri-5.png";

function Garri() {
  return (
    <>
      <GalleryHeader>
        <h1>Gallery</h1>
      </GalleryHeader>
      <GalleryContainer>
        <div className="gallery">
          <div className="flex-image">
            <a href={garri1}>
              <img src={garri1} alt="pig" />
            </a>
            <a href={garri2}>
              <img src={garri2} alt="pig" />
            </a>
            <a href={garri3}>
              <img src={garri3} alt="pig" />
            </a>
          </div>
        </div>
        <div className="gallery">
          <div className="flex-image2">
            <a href={garri4}>
              <img src={garri4} alt="pig" />
            </a>
            <a href={garri5}>
              <img src={garri5} alt="pig" />
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

  .gallery {
    padding: 0 4px;
    img {
      margin-top: 8px;
      vertical-align: middle;
      cursor: pointer;
    }
    .flex-image {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      column-gap: 1rem;
      padding: 0.5rem 0;
      img {
        height: 50vh;
        object-fit: cover;
      }
      @media screen and (max-width: 800px) {
        img {
          height: 40vh;
          object-fit: cover;
        }
      }
    }
    .flex-image2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      column-gap: 1rem;
      padding: 0.5rem 0;
      img {
        height: 50vh;
        object-fit: cover;
      }
      @media screen and (max-width: 800px) {
        img {
          height: 40vh;
          object-fit: cover;
        }
      }
    }
    @media screen and (max-width: 800px) {
      flex: 100%;
    }
    @media screen and (max-width: 600px) {
      flex: 100%;
    }
  }
  @media screen and (max-width: 765px) {
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export default Garri;
