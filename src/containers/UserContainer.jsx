import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import User from 'components/User';

class UserListContainer extends PureComponent {
    render() {
        const { user } = this.props;
        return (
            <Fragment>
                <User user={user} />
            </Fragment>
        );
    }
}

export default connect(
    (state, props) => ({
        user: state.users.entries.find((user) => user.id === +props.match.params.id)
    })
)(UserListContainer);

