import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer py-5 bg-dark">
                <Row>
                    <Col>
                        <p className="m-0 text-center text-white">Copyright &copy; Your Website 2018</p>
                    </Col>
                </Row>
            </div>
        );
    }
}