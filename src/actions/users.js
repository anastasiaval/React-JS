import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Users] Load started');
export const loadCompleted = createAction('[Users] Load completed');
export const loadFailed = createAction('[Users] Load failed');

export const loadUsers = (dispatch, page) => {
    dispatch(loadStarted());
    fetch(`https://jsonplaceholder.typicode.com/users?_limit=2&_page=${page}`)
        .then((response) => response.json())
        .then((users) => {
            dispatch(loadCompleted(users));
        })
        .catch((error) => {
            dispatch(loadFailed(error));
        });
};

