import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { AuthRouter } from './components/routers/AuthRouter'
import { AppRouter } from './components/routers/AppRouter'
import { JournalScreen } from './components/journal/JournalScreen'
import { LoginScreen } from './components/auth/LoginScreen'
import { RegisterScreen } from './components/auth/RegisterScreen'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRouter />,
    children: [
      {
        path: '/',
        element: <JournalScreen />
      },
      {
        path: '/auth',
        element: <AuthRouter />,
        children: [
          {
            path: 'login',
            element: <LoginScreen />
          },
          {
            path: 'register',
            element: <RegisterScreen />
          },
          {
            path: '*',
            element: <LoginScreen />
          }
        ]
      },
      {
        path: '*',
        element: <LoginScreen />
      }
    ]
  }
])

export const JournalApp = () => {
  return (
    <RouterProvider router={router} />
  )
}
