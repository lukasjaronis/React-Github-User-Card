import React from "react";
import styled from "styled-components";

const GitCardStyles = styled.div`
  .outerContainer {
   
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      background: #1f2833;


    .innerContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        border-radius: 15px;
        margin: 2rem;
        width: 50%;

      img {
        height: 20rem;
        border-radius: 15px;
      }

      .contentContainer {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 50%;
          margin: 0 auto;
        
        span {
            margin: 1rem;
            font-size: 1.5rem;
            font-weight: 900;

            &:first-child {
                color: #66fcf1;
            }

            &:last-child {
                color: #45a29e;
            }
        }
      }
    }
  }
`;

const GitCard = ({ user, image, bio }) => {
  return (
    <GitCardStyles>
      <div className="outerContainer">
        <div className="innerContainer">
          <img src={image} />
          <div className="contentContainer">
            <span>{user}</span>
            <span>{bio}</span>
          </div>
        </div>
      </div>
    </GitCardStyles>
  );
};

export default GitCard;
