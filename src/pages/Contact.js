import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <ContactContainer>
      <div className="contact-content">
        <div className="contact-header">
          <h1>Contact us:</h1>
        </div>
        <div className="contact-text">
          <p>+2348035530767</p>
          <p>admin@bifarin.com </p>
        </div>
        <div className="location">
          <p>Osu, Off Ilesha Road, Osun State Nigeria </p>
        </div>
      </div>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  margin: 0rem 1.5rem;
  background: #f9fff8;
  padding: 2rem 5rem;
  display: flex;
  min-height: 65vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  .contact-header {
    padding-bottom: 1rem;
  }
  .contact-text {
    p {
      line-height: 1.6;
    }
  }
  .location {
    padding-top: 1.2rem;
  }
  @media screen and (max-width: 765px) {
    padding: 3rem 1rem;
  }
`;
export default Contact;
