import './assets/style.scss';

import React, { Component, Fragment } from 'react';

import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';

export default class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

