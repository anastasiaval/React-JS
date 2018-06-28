import React, { PureComponent } from 'react';

export default class BlogItem extends PureComponent {
    render() {
        const { article } = this.props;
        return (
            <div>
                <h4>{article.title}</h4>
                <p>{article.body}</p>
                <p>{article.body}</p>
                <p>{article.body}</p>
            </div>
        )
    }
}

