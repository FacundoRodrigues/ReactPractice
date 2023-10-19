import React from 'react'
import { AppRouter } from '../routers/AppRouter'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginScreen } from './login/LoginScreen'


const router = createBrowserRouter([
	{
		path: '/',
		element: <AppRouter />,
		children: [
			{
				path: '/login',
				element: <LoginScreen />
			}
		]
	}
])

export const HeroesApp = () => {
	return (
		<RouterProvider router={router} />
	)
}