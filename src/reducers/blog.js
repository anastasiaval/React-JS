import { handleActions } from 'redux-actions';

import { loadStarted, loadCompleted, loadFailed } from 'actions/blog';

const initialState = {
    loading: false,
    error: null,
    articles: [],
    page: 1
};

export default handleActions({
    [loadStarted]: (state) => {
        return {
            ...state,
            error: null,
            loading: true,
        };
    },
    [loadCompleted]: (state, action) => {
        return {
            ...state,
            page: state.page + 1,
            articles: state.articles.concat(action.payload),
            loading: false,
        };
    },
    [loadFailed]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    }
}, initialState);

