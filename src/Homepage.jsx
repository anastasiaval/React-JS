import './assets/style.scss';

import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import routes from './routes';

export default class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Switch>
                    {routes.map((route) => <Route {...route} />)}
                </Switch>
                <Footer/>
            </Fragment>
        );
    }
}

