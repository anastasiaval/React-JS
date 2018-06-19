import React, { Component, Fragment } from 'react';

import ArticleItems from 'components/Content/ArticleItems';

const Articles = [
    {
        title: 'Post Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
        full: '#',
        date: 'Posted on January 1, 2017 by ',
        authorpage: '#',
        author: 'Start Bootstrap',
    },
    {
        title: 'Post Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
        full: '#',
        date: 'Posted on January 1, 2017 by ',
        authorpage: '#',
        author: 'Start Bootstrap',
    },
    {
        title: 'Post Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
        full: '#',
        date: 'Posted on January 1, 2017 by ',
        authorpage: '#',
        author: 'Start Bootstrap',
    }
];

export default class Article extends Component {
    render() {
        return (
            <Fragment>
                <ArticleItems items={Articles} />
                <ul className="pagination justify-content-center mb-4">
                    <li className="page-item">
                        <a className="page-link" href="#">&larr; Older</a>
                    </li>
                    <li className="page-item disabled">
                        <a className="page-link" href="#">Newer &rarr;</a>
                    </li>
                </ul>
            </Fragment>
        );
    }
}