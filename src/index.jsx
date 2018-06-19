import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import HomePage from './Homepage.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';

class App extends Component {
    render() {
        return (
            <Fragment>
                <HomePage/>
            </Fragment>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));