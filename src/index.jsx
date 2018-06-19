import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import HomePage from './Homepage.jsx';

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