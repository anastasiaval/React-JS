import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import { loadComments } from 'actions/comments';
import Comments from 'components/Comments';

class CommentsContainer extends PureComponent {
    componentDidMount() {
        const { load, comments } = this.props;

        if (!comments.length) {
            load();
        }
    }

    handleLoadMore = () => {
        const { load } = this.props;

        load();
    };

    render() {
        const { comments, loading } = this.props;
        return (
            <Fragment>
                {loading && !comments.length ? <div>Loading...</div> : <Comments onLoadMore={this.handleLoadMore} comments={comments} />}
            </Fragment>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        page: state.comments.page,
        loading: state.comments.loading,
        comments: state.comments.comments,
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        load: loadComments.bind(null, dispatch),
    };
}

function mergeMap(stateProps, dispatchProps, ownProps) {
    return {
        ...stateProps,
        ...ownProps,
        load: () => dispatchProps.load(stateProps.page),
    };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeMap)(CommentsContainer);

