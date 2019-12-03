import React, { Component } from 'react';
import axios from 'axios';

class GitCard extends Component {

state = {
    cards: []
};

componentDidMount() {
    axios.get('https://api.github.com/users/lukasjaronis/followers')
    .then(response => {
        this.setState({cards: response.data.url});
        console.log(response);
    });
}


render() {
    return (
     <div>
     <div>
     <h1>GitHub Cards</h1>
     </div>
     <div>
     
     </div>
     </div>
    )
}
}

export default GitCard;