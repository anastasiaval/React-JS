import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Comments extends PureComponent {
    render () {
        const { comments, onLoadMore } = this.props;

        return (
            <div className="container">
                    {comments.map(comment => <div className="card-body" key={comment.id}>
                        <Link to={`/comments/${comment.id}`}>{comment.name}</Link></div>)}
                <button onClick={onLoadMore}>Load more</button>
            </div>
        )
    }
}

