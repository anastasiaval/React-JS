import React, {PureComponent, Fragment} from 'react';
import { connect } from 'react-redux';

import { loadBlog } from 'actions/blog';
import Blog from 'components/Blog';

class BlogContainer extends PureComponent {
    componentDidMount() {
        const { load, articles } = this.props;

        if (!articles.length) {
            load();
        }
    }

    handleLoadMore = () => {
        const { load } = this.props;

        load();
    };

    render() {
        const {articles, loading} = this.props;
        return (
            <Fragment>
                {loading && !articles.length ? <div>Loading...</div> :
                    <Blog onLoadMore={this.handleLoadMore} articles={articles}/>}
            </Fragment>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        page: state.articles.page,
        loading: state.articles.loading,
        articles: state.articles.articles,
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        load: loadBlog.bind(null, dispatch),
    };
}

function mergeMap(stateProps, dispatchProps, ownProps) {
    return {
        ...stateProps,
        ...ownProps,
        load: () => dispatchProps.load(stateProps.page),
    };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeMap)(BlogContainer);
