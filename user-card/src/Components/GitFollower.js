import React, { Component } from "react";
import axios from "axios";
import GitFollowCard from "./GitFollowCard";

class GitFollower extends Component {



  state = {
      followers: [ ],
  };

  componentDidMount = () => {
    axios
      .get("https://api.github.com/users/lukasjaronis/followers")
      .then(response => {
        response.data.map(element => {
          return axios.get(element.url)
          .then(response => {
            this.setState({
              followers: response.data.name + response.data.avatar_url
            });
           
            console.log(this.state.followers)
          });
         
        });
      }); 
  };


  render() {
    return (

        <div>
  
        
 
        </div>

    );
  }
}

export default GitFollower;
