import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
                <Nav>
                    <NavItem>
                        <Link to="/">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/blog">Blog</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/comments">Comments</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/users">Users</Link>
                    </NavItem>
                </Nav>
        );
    }
}

