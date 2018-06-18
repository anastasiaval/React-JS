import React, { Component } from 'react';
import ReactDom from 'react-dom';

import MainPage from './MainPage.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div>
                <MainPage />
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));