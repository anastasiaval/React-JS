import React, {PureComponent, Fragment} from 'react';

import Author from 'components/Author';

export default class AuthorContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            user: 1
        };
    }

    componentDidMount() {
        const {userId} = this.props;

        fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    loading: false,
                    user: data[0]
                });
            }).catch(() => this.setState({loading: false}));
    }

    render() {
        const {user, loading} = this.state;
        return (
            <Fragment>
                {loading ? <div>Loading...</div> : <Author user={user}/>}
            </Fragment>
        );
    }
}

