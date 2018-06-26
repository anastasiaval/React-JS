import React, { PureComponent } from 'react';

export default class Comments extends PureComponent {
    render () {
        const { comments, onLoadMore } = this.props;

        return (
            <div className="container">
                    {comments.map(comment => <div className="card-body" key={comment.id}>{comment.body}</div>)}
                <button onClick={onLoadMore}>Load more</button>
            </div>
        )
    }
}

