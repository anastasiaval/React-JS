import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Comments] Load started');
export const loadCompleted = createAction('[Comments] Load completed');
export const loadFailed = createAction('[Comments] Load failed');

export const loadComments = (dispatch, page) => {
    dispatch(loadStarted());
    fetch(`https://jsonplaceholder.typicode.com/comments?limit=10&_page=${page}`)
        .then((response) => response.json())
        .then((comments) => {
            dispatch(loadCompleted(comments));
        })
        .catch((error) => {
            dispatch(loadFailed(error));
        });
};

