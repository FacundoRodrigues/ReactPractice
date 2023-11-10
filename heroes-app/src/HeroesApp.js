import React, { useEffect, useReducer } from 'react'
import { AppRouter } from './routers/AppRouter'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginScreen } from './components/login/LoginScreen'
import { DcScreen } from './components/dc/DcScreen'
import { MarvelScreen } from './components/marvel/MarvelScreen'
import { HeroesScreen } from './components/heroes/HeroesScreen'
import { DashboardRoutes } from './routers/DashboardRoutes'
import { SearchScreen } from './components/search/SearchScreen'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'


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
						path: 'dc',
						element: <DcScreen />
					},
					{
						path: 'marvel',
						element: <MarvelScreen />
					},
					{
						path: 'hero/:heroeId',
						element: <HeroesScreen />
					},
					{
						path: 'search',
						element: <SearchScreen />
					}
				]
			}
		]
	}
])

const init = () => {
	return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

export const HeroesApp = () => {
	const [user, dispatch] = useReducer(authReducer, {}, init)

	useEffect( ()=> {
		localStorage.setItem('user', JSON.stringify(user))
	},[user])

	return (
		<AuthContext.Provider value={{ user, dispatch }}>
			<RouterProvider router={router} />
		</AuthContext.Provider>
	)
}