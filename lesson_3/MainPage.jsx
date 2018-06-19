import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import ModalLogin from './Modal.jsx';
import Navigation from './Nav.jsx'
import Articles from './Articles.jsx'

export default class MainPage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="col-11">
                        <Navigation/>
                    </Col>
                    <Col className="col-1">
                        <ModalLogin buttonLabel="Login"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Articles/>
                    </Col>
                </Row>
            </Container>
        );
    }
}