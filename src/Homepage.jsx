import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';

import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';

export default class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Row>
                    <Col>
                        <Content/>
                    </Col>
                </Row>
                <Footer/>
            </Fragment>
        );
    }
}