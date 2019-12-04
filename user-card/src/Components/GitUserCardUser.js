import React, { Component } from 'react';
import axios from 'axios';
import GitUserCard from './GitUserCard';

class GitUserCardUser extends Component {

    state = {
        user: [ ],
        
    }

   componentDidMount() {
       // user details
       axios
       .get('https://api.github.com/users/lukasjaronis')
       .then(response => {
           this.setState({
               user: response.data
           });
       })
   }



    render() {
        return (
            <div>
            <GitUserCard user={this.state.user} />
            </div>
        )
    }

}

export default GitUserCardUser;