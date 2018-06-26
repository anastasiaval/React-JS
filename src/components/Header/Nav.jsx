import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Navigation extends Component {
    render() {
        return (
                <Nav>
                    <NavItem>
                        <NavLink className="active" href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Blog</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Comments</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Users</NavLink>
                    </NavItem>
                </Nav>
        );
    }
}

