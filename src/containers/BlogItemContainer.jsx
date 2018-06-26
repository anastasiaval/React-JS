import React, {PureComponent, Fragment} from 'react';

import BlogItem from 'components/BlogItem';

export default class BlogItemContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            article: {}
        };
    }

    load() {
        const { match } = this.props;

        this.setState({ loading: true });
        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
            .then((response) => response.json())
            .then((article) => {
                this.setState({
                    loading: false,
                    article
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
        const { article, loading } = this.state;
        return (
            <Fragment>
                {loading ? <div>Loading...</div> : <BlogItem article={article} />}
            </Fragment>
        );
    }
}

