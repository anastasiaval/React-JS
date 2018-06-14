import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <Nav>
                    <NavItem>
                        <NavLink href="https://geekbrains.ru">Geekbrains</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://google.ru">Google</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Another Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">One more Link</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}