import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { AppRouter } from './components/routers/AppRouter'
// import { JournalScreen } from './components/journal/JournalScreen'
import { AuthRouter } from './components/routers/AuthRouter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRouter />,
    children: [
      // {
      //   path: '/',
      //   element: <JournalScreen />
      // },
      {
        path: 'auth',
        element: <AuthRouter />
      }
    ]
  }
])

export const JournalApp = () => {
  return (
    <RouterProvider router={router} />
  )
}
