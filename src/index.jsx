import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Menu from './Menu.jsx';

const menuItems = [
    {
        link:'https://geekbrains.ru', title: 'Geekbrains'
    },
    {
        link:'https://google.ru', title: 'Google'
    }
];

class App extends Component {
    render() {
        return (
            <div>
                <Menu items={menuItems} />
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));