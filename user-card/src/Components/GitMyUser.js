import React, { Component } from 'react';
import axios from 'axios';
import GitMyCard from './GitMyCard';

class GitMyUser extends Component {

    state = {
        user: [ ]
    }

    componentDidMount() {
        axios
        .get('https://api.github.com/users/lukasjaronis')
        .then(response => {
            console.log(response);
            this.setState({ 
                user: response.data.name,
                image: response.data.avatar_url,
                bio: response.data.bio
            });
        })
    }

    render() {
        return (
            <div>
            <GitMyCard user={this.state.user} image={this.state.image} bio={this.state.bio} />
            </div>
        )
    }

}

export default GitMyUser;