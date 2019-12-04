import React, { Component } from "react";
import axios from "axios";
import GitFollowCard from "./GitFollowCard";

class GitFollower extends Component {



    state ={
        followers: [],
      }

      componentDidMount = () => {
        axios
        .get(`https://api.github.com/users/lukasjaronis/followers`)
        .then (res => {
     
          this.setState({
            followers: res.data
          });
        }) 
      }


  render() {
    return (

        <div>
        {this.state.followers.map (follower => (
             <GitFollowCard key={follower.id}
                 image={follower.avatar_url} 
                 followers = {follower.login}
                 bio = {follower.bio}
             />
        ))}
     </div>

    );
  }
}

export default GitFollower;
