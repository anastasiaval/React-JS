import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import HomePage from './Homepage.jsx';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <HomePage/>
            </BrowserRouter>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));

