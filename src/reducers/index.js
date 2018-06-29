import { combineReducers } from 'redux';

import users from './users';
import comments from './comments';
import articles from './blog';

export default combineReducers({
    users,
    comments,
    articles,
});

