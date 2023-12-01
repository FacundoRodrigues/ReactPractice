import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { AppRouter } from './components/routers/AppRouter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRouter />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
