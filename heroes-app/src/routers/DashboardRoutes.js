import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Route, Routes } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroesScreen } from '../components/heroes/HeroesScreen'

export const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<div className='container mt-2'>
				<Routes>
					<Route path='/dc' element={ <DcScreen /> } />
					<Route path='/marvel' element={ <MarvelScreen /> } />
					<Route path='/heroes/:heroeId' element={ <HeroesScreen /> } />

					<Route path='/' element={ <HeroesScreen/> } />

					
				</Routes>
			</div>
		</>
	)
}