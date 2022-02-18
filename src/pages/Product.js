import React from "react";
import styled from "styled-components";
import pigs from "../images/pigs.png";
import garri from "../images/garri.png";

export default function Product() {
  return (
    <ProductContainer>
      <div className="product-content">
        <div className="product-list">
          <div className="sub-header">
            <span>Pig Farming</span>
          </div>
          <div className="text">
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div className="product-btn">
            <button>See Catalogue</button>
          </div>
        </div>
        <div className="product-image">
          <img src={pigs} alt="pigs" />
        </div>
      </div>

      <div className="product-content">
        <div className="product-list">
          <div className="sub-header">
            <span>Gbogberin’s Garri </span>
          </div>
          <div className="text">
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div className="product-btn">
            <button>See Catalogue</button>
          </div>
        </div>
        <div className="product-image">
          <img src={garri} alt="garri" />
        </div>
      </div>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  margin: 0rem 1.5rem;
  background: #f9fff8;
  padding: 2rem 5rem;
  .product-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .product-list {
      .sub-header {
        span {
          font-size: 1.25rem;
          font-family: "Playfair Display", serif;
          color: #3f4042;
        }
      }
      .text {
        padding: 1.5rem 0;
        max-width: 30rem;
        p {
          line-height: 1.6;
        }
      }
      .product-btn {
        button {
          padding: 0.8rem 1.5rem;
          border: none;
          background: #f4faf2;
          border: 1px solid #53c351;
          border-radius: 0.625rem;
          cursor: pointer;
          color: #53c351;
          font-family: "Avenir";
          letter-spacing: 0.06em;
          text-transform: capitalize;
        }
      }
    }
    @media screen and (max-width: 765px) {
      display: flex;
      flex-direction: column;
      padding-bottom: 3rem;
      .product-image {
        padding: 3rem 0 0 0;
      }
    }
  }
  @media screen and (max-width: 765px) {
    padding: 3rem 1rem;
  }
`;
