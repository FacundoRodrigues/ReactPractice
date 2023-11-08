import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Outlet, Route, Routes } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroesScreen } from '../components/heroes/HeroesScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<div className='container mt-2'>
				<Routes>
					<Route path='/dc' element={ <DcScreen /> } />
					<Route path='/marvel' element={ <MarvelScreen /> } />
					<Route path='/hero/:heroeId' element={ <HeroesScreen /> } />
					<Route path='/search' element={ <SearchScreen /> } />

					<Route path='/' element={ <MarvelScreen/> } />					
				</Routes>

				<Outlet />
			</div>
		</>
	)
}