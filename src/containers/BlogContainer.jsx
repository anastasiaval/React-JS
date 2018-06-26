import React, {PureComponent, Fragment} from 'react';

import Blog from 'components/Blog';

export default class BlogContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            articles: []
        };
    }

    load(page) {
        fetch(`https://jsonplaceholder.typicode.com/posts?limit=10&_page=${page}`)
            .then((response) => response.json())
            .then((results) => {
                this.setState({
                    loading: false,
                    articles: results
                })
            })
            .catch(() => {
                this.setState({ loading: false });
            });
    }

    componentDidMount() {
        this.load(1);
    }

    handleLoadPage = (page, e) => {
        e.preventDefault();
        this.load(page);
    };

    render() {
        const {articles, loading} = this.state;

        return (
            <Fragment>
                {loading ? <div>Loading...</div> :
                    <Blog loadPage={this.handleLoadPage} articles={articles}/>}
            </Fragment>
        );
    }
}

