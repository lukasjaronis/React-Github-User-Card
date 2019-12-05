import React from "react";
import styled from "styled-components";

const GitFollowCardStyles = styled.div`
  .outerContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #1f2833;
    border-bottom: 1px solid #45a29e;

    &:hover {
        background: #0b0c10;
      }

    .innerContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      border-radius: 15px;
      margin: 2rem;
      width: 50%;

      img {
        height: 15rem;
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
          color: white;

          &:first-child {
            color: #66fcf1;
          }
        }
      }
    }
  }
`;

const GitFollowCard = props => {
 
  return (
   
    <GitFollowCardStyles>
      <div className="outerContainer" >
        <div className="innerContainer">
        <img src={props.followers.avatar_url} alt={props.followers.id} />
          <div className="contentContainer">
          <span>{props.followers.login}</span>
          </div>
        </div>
      </div>
    </GitFollowCardStyles>
  );

  
};

export default GitFollowCard;
