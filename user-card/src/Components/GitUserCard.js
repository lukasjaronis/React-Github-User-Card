import React from "react";
import styled from "styled-components";

const GitUserCardStyles = styled.div`
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
        justify-content: space-between;
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

            &:first-child {
                color: #66fcf1;
            }

            &:last-child {
                color: #45a29e;
            }
        }
      }

      .contentContainerTwo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: 2rem;

        .line {
          width: 100%;
          border: 2px solid #45a29e;
          border-radius: 2rem;

        }
      

        span {
          padding: 10px;
          color: #66fcf1;
          font-weight: 900;
          font-size: 1rem;

          &:hover {
            color: #fff;
          }

          .contentText {
            color: #45a29e;
          }

        }
      }
    }
  }
`;

const GitUserCard = props => {
  return (
    <GitUserCardStyles>
      <div className="outerContainer">
        <div className="innerContainer">
          <img src={props.user.avatar_url} alt={props.user.id} />
          <div className="contentContainer">
            <span>{props.user.login} ({props.user.name})</span>
            <span>{props.user.bio}</span>
          </div>
          <div className="contentContainerTwo">
          <span><span className="contentText">Followers</span> {props.user.followers}</span>
          <div className="line" />
          <span><span className="contentText">Following</span> {props.user.following}</span>
          <div className="line" />
          <span><span className="contentText">Public Repos</span> {props.user.public_repos}</span>
          <div className="line" />
          </div>
        </div>
      </div>
    </GitUserCardStyles>
  );
};

export default GitUserCard;
