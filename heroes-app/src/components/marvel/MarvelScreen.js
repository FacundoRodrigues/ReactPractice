import React from 'react'
import { HeroList } from '../heroes/HeroList'

const MARVEL_PUBLISHER = 'Marvel Comics'

export const MarvelScreen = () => {
	return (
		<>
			<h1>Marvel</h1>
			<hr />

			<HeroList publisher={ MARVEL_PUBLISHER } />
		</>
	)
}