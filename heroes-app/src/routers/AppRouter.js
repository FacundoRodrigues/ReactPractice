import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { PrivateRoute } from './PrivateRoute'
import { DashboardRoutes } from './DashboardRoutes'
import { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { PublicRoute } from './PublicRoute'



export const AppRouter = () => {
	const { user } = useContext(AuthContext)
	const { logged } = user
	return (
		<div>
			<Routes>
				<Route path='/login' element={ 
					<PublicRoute isAuthenticated={ logged }>
						<LoginScreen />
					</PublicRoute>
				}/>

				<Route path='/*' element={
					<PrivateRoute isAuthenticated={ logged }>
						<DashboardRoutes />
					</PrivateRoute>
				}/>

			</Routes>
		</div>
	)
}