import React, { PureComponent } from 'react';

export default class Post extends PureComponent {
    render() {
        const { post } = this.props;
        return (
            <div>
                <h4>{post.name}</h4>
                <a href={`mailto: ${post.email}`}> Email me</a>
                <p>{post.body}</p>
            </div>
        )
    }
}

