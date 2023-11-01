import React from 'react'
import { HeroList } from '../heroes/HeroList'

const DC_PUBLISHER = 'DC Comics'

export const DcScreen = () => {
	return (
		<>
			<h1>Dc</h1>
			<hr />

			<HeroList publisher={ DC_PUBLISHER } />
		</>
	)
}
