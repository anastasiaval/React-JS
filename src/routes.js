import Content from 'components/Content';
import Blog from 'containers/BlogContainer';
import Comments from 'containers/CommentsContainer';
import UserList from 'containers/UserListContainer';
import User from 'containers/UserContainer';
import Post from 'containers/PostContainer';
import BlogItem from 'containers/BlogItemContainer';

export default [
    {
        path: '/',
        exact: true,
        component: Content,
    },
    {
        path: '/blog',
        exact: true,
        component: Blog,
    },
    {
        path: '/blog/:id',
        exact: true,
        component: BlogItem,
    },
    {
        path: '/comments',
        exact: true,
        component: Comments,
    },
    {
        path: '/comments/:id',
        exact: true,
        component: Post,
    },
    {
        path: '/users',
        exact: true,
        component: UserList,
    },
    {
        path: '/users/:id',
        exact: true,
        component: User,
    }
]

