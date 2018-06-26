import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';

class Navigation extends Component {
    render() {
        const { location } = this.props;
        return (
                <Nav>
                    <NavItem className={classNames({ active: location.pathname === '/' })}>
                        <Link to="/">Home</Link>
                    </NavItem>
                    <NavItem className={classNames({ active: location.pathname === '/blog' })}>
                        <Link to="/blog">Blog</Link>
                    </NavItem>
                    <NavItem className={classNames({ active: location.pathname === '/comments' })}>
                        <Link to="/comments">Comments</Link>
                    </NavItem>
                    <NavItem className={classNames({ active: location.pathname === '/users' })}>
                        <Link to="/users">Users</Link>
                    </NavItem>
                </Nav>
        );
    }
}

export default withRouter(Navigation)

