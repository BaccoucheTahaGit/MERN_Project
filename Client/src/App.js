import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/App.css';

/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import HottestTopics from "./components/Topics/Hottest/Topic";
import NewestTopics from "./components/Topics/Newest/Topic";
import Topic from './components/Topics/Topics';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import Home from './components/home';

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'


/** root routes */
const router = createBrowserRouter([
    {
        path : '/home',
        element : <Home></Home>
    },
    {
        path : '/',
        element : <Register></Register>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '/login',
        element : <Username></Username>
    },
    {
        path : '/topics',
        element : <Topic></Topic>
    },
    {
        path : '/hottest',
        element : <HottestTopics></HottestTopics>
    },
    {
        path : '/newest',
        element : <NewestTopics></NewestTopics>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
]

)

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
