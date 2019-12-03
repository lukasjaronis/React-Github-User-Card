import React, { Component } from 'react';
import axios from 'axios';

const GitCard = ({user, image, bio }) => {
    return (
        <div className="outerContainer">
        <div className="innerContainer">

        <img src={image} alt ="user" />
        <span>Name: {user} </span>
        <span>Biography: {bio}</span>

        </div>
        </div>
    )
}

export default GitCard;