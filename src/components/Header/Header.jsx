import React, { Component } from 'react';

import Navigation from 'components/Header/Nav';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container nav-container">
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <Navigation/>
                </div>
            </header>
        );
    }
}