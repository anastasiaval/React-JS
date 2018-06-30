import React, {PureComponent, Fragment} from 'react';
import { connect } from 'react-redux';

import BlogItem from 'components/BlogItem';

class BlogItemContainer extends PureComponent {
    render() {
        const { article } = this.props;
        return (
            <Fragment>
                <BlogItem article={article} />
            </Fragment>
        );
    }
}

export default connect(
    (state, props) => ({
        article: state.articles.articles.find((article) => article.id === +props.match.params.id)
    })
)(BlogItemContainer);

