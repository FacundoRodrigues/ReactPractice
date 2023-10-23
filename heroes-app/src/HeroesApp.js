import React from 'react'
import { AppRouter } from './routers/AppRouter'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginScreen } from './components/login/LoginScreen'
import { DcScreen } from './components/dc/DcScreen'
import { MarvelScreen } from './components/marvel/MarvelScreen'
import { HeroesScreen } from './components/heroes/HeroesScreen'
import { DashboardRoutes } from './routers/DashboardRoutes'


const router = createBrowserRouter([
	{
		path: '/',
		element: <AppRouter />,
		children: [
			{
				path: '/login',
				element: <LoginScreen />
			},
			{
				path: '/',
				element: <DashboardRoutes />,
				children: [
					{
						path: '/dc',
						element: <DcScreen />
					},
					{
						path: '/marvel',
						element: <MarvelScreen />
					},
					{
						path: '/heroe',
						element: <HeroesScreen />
					}
				]
			}
		]
	}
])

export const HeroesApp = () => {
	return (
		<RouterProvider router={router} />
	)
}