import React, { PureComponent, Fragment } from 'react';

import Post from 'components/Post';

export default class PostContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            post: {}
        };
    }

    load() {
        const { match } = this.props;

        this.setState({ loading: true });
        fetch(`https://jsonplaceholder.typicode.com/comments/${match.params.id}`)
            .then((response) => response.json())
            .then((post) => {
                this.setState({
                    loading: false,
                    post
                })
            })
            .catch(() => {
                this.setState({ loading: false });
            });
    }

    componentDidMount() {
        this.load();
    }

    render() {
        const { post, loading } = this.state;
        return (
            <Fragment>
                {loading ? <div>Loading...</div> : <Post post={post} />}
            </Fragment>
        );
    }
}

