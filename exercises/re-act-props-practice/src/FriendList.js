import React, { Component } from 'react';

export default class FriendList extends Component {
    // Render friend info:
    
    render() {
        const myFriends = this.props.friends.map(()=> <Friend />)
        return (
            <div>
                {myFriends}
            </div>
        )
    }
}
export default FriendList;