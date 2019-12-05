import React, { Component } from 'react';
import axios from 'axios';
import GitUserCard from './GitUserCard';

class GitUserCardUser extends Component {

    state = {
        user: [ ],
        userSearch: [],
        currentUser: ''
        
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

   componentDidUpdate(prevProps, PrevState) {
       if (PrevState.currentUser !== this.state.currentUser) {
           this.setState({
               userSearch: [...this.state.userSearch, this.state.currentUser]
           });
           axios
           .get(`https://api.github.com/users/${this.state.currentUser}git `)
           .then(response => {
               this.setState({
                   user: response.data
               });
           });
       }
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