import React, { useState } from 'react'
import { Root } from './Root'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginScreen } from './LoginScreen';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { NotFoundScreen } from './NotFoundScreen';
import { UserContext } from './UserContext';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFoundScreen />,
        children: [
        {
            path: "about",
            element: <AboutScreen />,
        },
        {
            path: "login",
            element: <LoginScreen />,
        },
        {
            path: "home",
            element: <HomeScreen />,
        },
    ],
    },
]);

export const MainApp = () => {
    const [user, setUser] = useState({})

    return (
        <UserContext.Provider value={ {
            user,
            setUser
        } }>
            <RouterProvider router={router} />
        </UserContext.Provider>
    )
}