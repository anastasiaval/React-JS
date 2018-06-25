import React, { PureComponent } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import Author from 'containers/AuthorContainer';

export default class Blog extends PureComponent {

    loadPage = (pageNumber) => () => {
        const {loadPage} = this.props;
        loadPage(pageNumber);
    };

    render() {
        const {articles} = this.props;

        return (
            <div className="container">
                <h1 className="my-4">Page Heading <small>Secondary Text</small></h1>
                {articles.map(article =>
                    <div className="card mb-4">
                        <div className="card-img-top">
                            <p>750 x 300</p>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{article.title}</h2>
                            <p className="card-text">{article.body}</p>
                            <a href="#" className="btn btn-primary">Read More &rarr;</a>
                            <div className="card-footer text-muted"><a href="#"><Author userId={article.userId}/></a>
                            </div>
                        </div>
                    </div>
                )}
            <Pagination aria-label="Page navigation" className="pagination">
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={this.loadPage(1)} className="text-info" href="#">{1}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
            </Pagination>
            </div>
        )
    }
}

