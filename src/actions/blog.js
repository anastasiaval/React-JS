import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Blog] Load started');
export const loadCompleted = createAction('[Blog] Load completed');
export const loadFailed = createAction('[Blog] Load failed');

export const loadBlog = (dispatch, page) => {
    dispatch(loadStarted());
    fetch(`https://jsonplaceholder.typicode.com/posts?limit=10&_page=${page}`)
        .then((response) => response.json())
        .then((articles) => {
            dispatch(loadCompleted(articles));
        })
        .catch((error) => {
            dispatch(loadFailed(error));
        });
};

