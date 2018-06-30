import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import HomePage from './Homepage.jsx';
import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <HomePage/>
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));

