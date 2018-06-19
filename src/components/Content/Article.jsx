import React, { Component, Fragment } from 'react';

export default class Article extends Component {
    render() {
        return (
            <Fragment>
                <div className="card mb-4">
                    <div className="card-img-top">
                        <p>750 x 300</p>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Post Title</h2>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
                        aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi
                        vero voluptate voluptatibus possimus, veniam magni quis!</p>
                        <a href="#" className="btn btn-primary">Read More &rarr;</a>
                        <div className="card-footer text-muted">
                        Posted on January 1, 2017 by
                        <a href="#">Start Bootstrap</a>
                        </div>
                    </div>
                </div>

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