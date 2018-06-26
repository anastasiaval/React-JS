import React, {PureComponent} from 'react';

export default class Author extends PureComponent {
    render() {
        const {user} = this.props;

        return (
            <div>Author: {user.name}</div>
        )
    }
}

