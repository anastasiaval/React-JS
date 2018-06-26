import React, { PureComponent } from 'react';

export default class UserList extends PureComponent {
    render () {
        const { users, onLoadMore } = this.props;

        return (
            <div>
                <ul>
                    {users.map(user => <li key={user.id}>{user.title}</li>)}
                </ul>
                <button onClick={onLoadMore}>Load more</button>
            </div>
        )
    }
}

