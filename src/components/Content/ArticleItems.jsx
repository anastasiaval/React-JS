import React, { Component, Fragment } from 'react';

export default class Content extends Component {
    render () {
        const { items } = this.props;
        return (
            <Fragment>
            {items.map(item =>
            <div className="card mb-4">
                <div className="card-img-top">
                    <p>750 x 300</p>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p className="card-text">{item.text}</p>
                    <a href={item.full} className="btn btn-primary">Read More &rarr;</a>
                    <div className="card-footer text-muted">{item.date}<a href={item.authorpage}>{item.author}</a>
                    </div>
                </div>
            </div>
            )}
            </Fragment>
        );
    }
}

