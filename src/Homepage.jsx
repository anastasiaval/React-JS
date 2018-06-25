import './assets/style.scss';

import React, { Component, Fragment } from 'react';

import Header from 'components/Header';
import Content from 'components/Content';
import Blog from 'containers/BlogContainer';
import Comments from 'containers/CommentsContainer';
import UserList from 'containers/UserListContainer';
import Footer from 'components/Footer';

export default class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Blog />
                {/*<Content/>
+                    <Blog/>
+                    <Comments/>
+                    <UserList/>*/}
                <Footer/>
            </Fragment>
        );
    }
}

