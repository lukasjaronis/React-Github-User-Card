import React from 'react';
import GitFollowCard from './GitFollowCard';

const Followers = props => {
    return (
        <div>
       {props.userFollowers.map(follower => (
           <GitFollowCard key={follower.id} follower={follower} searchUsers={props.searchUsers} />
       ))}
        </div>
    )
}

export default Followers;