import React, {Component} from 'react';

class User extends Component {
    render() {
        return (
            <div className = "user">
                <input type = "text" placeholder = "Enter UserName" />
            </div>
        );
    }
}

export default User;