import './content.scss';

import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import { Article, SearchWidget, CategoriesWidget, SideWidget } from 'components/Content';

export default class Content extends Component {
    render () {
        return (
            <div className="container">
                <Row>
                    <Col className="col-8">
                        <h1 className="my-4">Page Heading <small>Secondary Text</small></h1>
                        <Article/>
                    </Col>
                    <Col className="col-4">
                        <SearchWidget/>
                        <CategoriesWidget/>
                        <SideWidget/>
                    </Col>
                </Row>
            </div>
        );
    }
}

