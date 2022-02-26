import React from "react";
import styled from "styled-components";
import illustration from "../components/images/illustration.png";

export default function Invest() {
  return (
    <InvestContainer>
      <div className="invest-content">
        <div className="invest-text">
          <div className="invest-header">
            <h1>Looking to invest in our Pig Farm ?</h1>
          </div>
          <div className="txt">
            <p>
              Bifarin farms present an attractive investment opportunity for the
              public in its farming enterprises, starting with the pig farm. In
              this first round of investment, a person/entity can invest in up
              to five 'packages' worth N500,000 each. Return of investment is at
              35% after an incubation period of 8 months.  Please download this
              investor contract{" "}
              <span>
                <a
                  href="https://pdf.ac/14dyua"
                  target="_blank"
                  rel="noreferrer"
                >
                  here{" "}
                </a>
              </span>
              if you have reserved package(s) through any farm representatives.
              Then, pay the money to this account number …….. and forward a
              signed investor contract to bifarinfarms@gmail.com. The final copy
              of the investor contract will be sent to the investor shortly
              afterward. If you are not able to make this round, be sure to
              indicate{" "}
              <span>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScjZ5Kht4XNW9gvQcWN3MmSzpSUmYI6Unagk-81npjDFttEHA/viewform?usp=sf_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
              </span>
              . Our next round of investment will open July of this year.
            </p>
          </div>

          <div className="invest-btn">
            <a href="https://pdf.ac/14dyua" target="_blank" rel="noreferrer">
              <button>INVEST NOW</button>
            </a>
          </div>
        </div>
        <div className="about-image">
          <img src={illustration} alt="farm gallery" />
        </div>
      </div>
    </InvestContainer>
  );
}

const InvestContainer = styled.div`
  margin: 0rem 1.5rem;
  background: #f9fff8;
  padding: 2rem 5rem;
  .invest-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .invest-text {
      max-width: 28rem;

      .invest-header {
        padding-bottom: 0.6rem;
      }
      .txt {
        padding-bottom: 0.6rem;
        p {
          line-height: 1.6;
          span {
            a {
              color: #43a22a;
            }

            font-weight: bold;
          }
        }
      }
      .invest-btn {
        button {
          padding: 1rem 3rem;
          border: none;
          background: #43a22a;
          border: none;
          cursor: pointer;
          color: #ffffff;
          font-family: "Avenir";
          letter-spacing: 0.06em;
          text-transform: capitalize;
        }
      }
    }
    @media screen and (max-width: 900px) {
      display: flex;
      flex-direction: column-reverse;

      .invest-header {
        padding-top: 0.6rem;
      }
    }
  }
  @media screen and (max-width: 765px) {
    padding: 3rem 1rem;
  }
`;
