import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Navbar } from '../components/Navbar'



export const AppRouter = () => {
	return (
		<div>
			<Navbar />

			<Routes>
				<Route path='/login' />
				<Route path='/' />
			</Routes>
		</div>
	)
}