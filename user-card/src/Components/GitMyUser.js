import React, { Component } from 'react';
import axios from 'axios';
import GitMyCard from './GitMyCard';

class GitMyUser extends Component {

    state = {
        user: [ ],
        
    }

    componentDidMount() {
        axios
        .get('https://api.github.com/users/lukasjaronis')
        .then(response => {
            console.log(response);
          
            this.setState({ 
                name: response.data.name,
                image: response.data.avatar_url,
                bio: response.data.bio
            });
            console.log(this.state.user)
        })
    }



    render() {
        return (
            <div>
            <GitMyCard name={this.state.name} image={this.state.image} bio={this.state.bio} />
            </div>
        )
    }

}

export default GitMyUser;