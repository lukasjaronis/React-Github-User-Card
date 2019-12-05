import React, { Component } from "react";
import axios from "axios";
import GitFollowCard from "./GitFollowCard";
import GitUserCardUser from "./GitUserCardUser";

class GitFollower extends Component {



    state ={
        followers: [],
      }

      componentDidMount() {
        axios
        .get('https://api.github.com/users/lukasjaronis/followers')
        .then(response => {
          this.setState({
            followers: response.data
          })
        })
      }


  render() {
    return (

        <div>
        {this.state.followers.map(follower => (
          <GitFollowCard key={follower.id} followers={follower}/>
      ))}
        </div>

    );
  }
}

export default GitFollower;
